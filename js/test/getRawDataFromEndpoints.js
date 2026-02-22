// Ten skrypt pobiera dane z endpointów Trading212 musisz go uruchomić w konsoli przeglądarki bedąc zalogowanym na stronie Trading212. Pobierane dane zostą zapisane jako pliki JSON. Po pobraniu danych w nazwie na końcu zwróć uwage czy nie ma np (1), (2) itp jeżeli tak to usuń to z nazwy , umieść je w katalogu /testData/ i uruchom generatorJsonDataFromFiles.js, aby wygenerować finalny JSON do testów. żeby uruchomić generatorJsonDataFromFiles.js użyj komendy:
/******************************************** */
/* node js/test/generatorJsonDataFromFiles.js */
/******************************************** */
// w terminalu będąc w katalogu głównym projektu.

async function getPositions() {
  const fromDateStr = prompt(
    "Wpisz datę OD której ma wziąć dane (format RRRR-MM-DD):",
    `${new Date().getFullYear() - 1}-01-01`,
  );
  if (!fromDateStr) return;

  const toDateStrInput = prompt(
    "Wpisz datę DO której ma wziąć dane (format RRRR-MM-DD):",
    `${fromDateStr.split("-")[0]}-12-31`,
  );
  if (!toDateStrInput) return;
  const toDateStr = toDateStrInput;

  const minDate = new Date(fromDateStr);
  const maxDate = new Date(toDateStr);
  const requestBase = `https://live.trading212.com/rest/reports/`;
  const requestFilter = `&perPage=20&from=${fromDateStr}&to=${toDateStr}`;

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  const session =
    getCookie("TRADING212_SESSION_LIVE") || getCookie("CUSTOMER_SESSION");

  const auth = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Trading212-Session": session,
    },
    credentials: "include",
  };

  let positionDetails = [];
  let interestDetails = [];
  let overnightFeesDetails = [];

  try {
    let res = await (
      await fetch(requestBase + "positions?page=1" + requestFilter, auth)
    ).json();
    const totalSize = res.totalSize || 0;
    const pageCount = Math.ceil(totalSize / 20);

    const fetchWithRetry = async (url, options, retries = 5) => {
      for (let i = 0; i < retries; i++) {
        const response = await fetch(url, options);
        if (response.status === 429) {
          const wait = Math.pow(2, i) * 1000;
          console.warn(`Rate limit (429). Czekam ${wait}ms...`);
          await new Promise((r) => setTimeout(r, wait));
          continue;
        }
        return response;
      }
      throw new Error(`Przekroczono limit prób dla ${url}`);
    };

    for (let i = 1; i <= pageCount; i++) {
      const pageRes = await (
        await fetchWithRetry(
          requestBase + `positions?page=${i}` + requestFilter,
          auth,
        )
      ).json();

      if (pageRes.data) {
        for (let position of pageRes.data) {
          const detailsResponse = await fetchWithRetry(
            requestBase + position.orderNumber.link,
            auth,
          );
          const details = await detailsResponse.json();
          let tempPositionDetails = [];
          for (let j = 0; j < details.length; j++) {
            tempPositionDetails.push(details[j]);
          }
          positionDetails.push(tempPositionDetails);
        }
      } else {
        alert(
          `Nie udało się pobrać odpowiedzi Trading212. Skontaktuj sie z nami wklejajac caly ponizszy komunikat:\n` +
            JSON.stringify(pageRes),
        );
        return false;
      }
    }
  } catch (e) {
    console.error("Błąd przy pozycjach:", e);
    alert("Wystąpił błąd przy pobieraniu pozycji. Sprawdź konsolę.");
    return;
  }

  /*--- ODSETKI OD GOTÓWKI  ---*/
  try {
    let cursor = maxDate.getTime();
    cursor += 24 * 60 * 60 * 1000; // +1 dzień zapasu

    let hasNext = true;
    const interestUrl = (requestBase + "interest/v2").replace(
      /([^:]\/)\/+/g,
      "$1",
    );

    console.log(`DEBUG: URL odsetek to: ${interestUrl}`);

    while (hasNext) {
      const fetchUrl = `${interestUrl}?limit=20&olderThan=${cursor}`;

      const response = await fetch(fetchUrl, auth);

      if (!response.ok) {
        throw new Error(
          `Błąd sieci: ${response.status} ${response.statusText} dla adresu: ${fetchUrl}`,
        );
      }

      const res = await response.json();

      if (!res) throw new Error("Odpowiedź API jest pusta (null/undefined).");

      if (!res.interests) {
        hasNext = false;
        break;
      }

      if (res.interests.length > 0) {
        for (let item of res.interests) {
          const itemDate = new Date(item.executionDate);

          if (itemDate < minDate) {
            hasNext = false;
            continue;
          }

          if (itemDate <= maxDate && itemDate >= minDate) {
            interestDetails.push(item);
          }
        }

        const lastItem = res.interests[res.interests.length - 1];
        cursor = lastItem.executionDate;

        if (!res.hasNext || cursor < minDate.getTime()) {
          hasNext = false;
        }

        await new Promise((r) => setTimeout(r, 100));
      } else {
        hasNext = false;
      }
    }
    console.log(`Sukces: Pobrano ${interestDetails.length} odsetek.`);
  } catch (e) {
    console.error("Szczegóły błędu:", e);
    alert(
      `BŁĄD POBIERANIA ODSETEK:\n\n${e.name}: ${e.message}\n\nCzytaj powyżej co poszło nie tak.`,
    );
  }

  /*--- OPŁATY (OVERNIGHT FEES) ---*/
  try {
    const feeUrl = `${requestBase}overnight-holding-fee`;
    const res = await (
      await fetch(feeUrl + "?page=1" + requestFilter, auth)
    ).json();
    const totalSize = res.totalSize || 0;
    const pageCount = Math.ceil(totalSize / 20);

    for (let i = 1; i <= pageCount; i++) {
      const pageRes = await (
        await fetch(feeUrl + `?page=${i}` + requestFilter, auth)
      ).json();

      if (pageRes.data) {
        for (let overnightFee of pageRes.data) {
          let d = new Date(overnightFee.time);
          if (d >= minDate && d <= maxDate) {
            overnightFeesDetails.push(overnightFee);
          }
        }
      }
    }
  } catch (e) {
    console.error("Błąd przy opłatach:", e);
    alert("Wystąpił błąd przy pobieraniu opłat. Sprawdź konsolę.", e);
    return;
  }
  const combinedData = [
    {
      category: positionDetails,
      fileName: "Trading212_CFD_Raw_Positions_Data",
    },
    {
      category: interestDetails,
      fileName: "Trading212_CFD_Raw_Interest_On_Cash_Data",
    },
    {
      category: overnightFeesDetails,
      fileName: "Trading212_CFD_Raw_Overnight_Fees_Data",
    },
  ];

  combinedData.forEach((categories, index) => {
    const blob = new Blob([JSON.stringify(categories.category, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${categories.fileName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  });
}

getPositions();
