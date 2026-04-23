const langTranslations = {
  pl: {
    pp_title: "Polityka Prywatności | T212 CFD Data Exporter",
    pp_h1: "Polityka Prywatności",
    pp_sub: "Dowiedz się, w jaki sposób dbamy o Twoje dane.",
    pp_back: "⬅ Wróć do Strony Głównej",
    pp_s1_t: "1. Wprowadzenie",
    pp_s1_p:
      "Niniejsza polityka prywatności określa, w jaki sposób gromadzone, wykorzystywane i chronione są dane podczas korzystania z narzędzia <strong>T212 CFD Data Exporter</strong> oraz strony internetowej projektu.",
    pp_s2_t:
      '2. Zasada "Local First" – Przetwarzanie i Ochrona Danych Finansowych',
    pp_s2_p:
      "Skrypt eksportujący dane (Uruchamiany w oknie Trading212) <strong>wymienia dane bezpośrednio pomiędzy Twoją przeglądarką, a oficjalnymi serwerami Trading212</strong> (API: <code>live.trading212.com</code>).",
    pp_s2_l1:
      "Plik wynikowy JSON, CSV oraz zestawienie logów jest generowane wyłącznie lokalnie w pamięci RAM urządzenia użytkownika.",
    pp_s2_l2:
      "Żadne loginy, hasła, sumy transakcji ani inne <strong>wrażliwe dane nie są wysyłane</strong>, gromadzone ani analizowane przez serwery twórcy narzędzia.",
    pp_s2_l3:
      "Cały kod narzędzia odpowiedzialny za to działanie jest publicznie dostępny (Open Source) na repozytorium GitHub do samodzielnego wglądu.",
    pp_s3_t: "3. Pliki Cookies (Ciasteczka)",
    pp_s3_p:
      "Na tej stronie wykorzystywane are pliki cookies (ciasteczka) niezbędne do działania strony oraz w celach analitycznych. Dane analityczne są anonimowe.",
    pp_s3_l1:
      "<strong>Funkcjonalne:</strong> Klucz <code>cookieConsent</code> służy do zachowania informacji o wyrażeniu zgody na używanie plików cookie (zapobiega wyświetlaniu komunikatu przy każdej wizycie).",
    pp_s3_l2:
      "<strong>Analityka i UX:</strong> Strona wykorzystuje narzędzia analityczne (Google Analytics oraz Microsoft Clarity, domyślnie używające własnych bezpiecznych plików cookie), które zbierają anonimowe dane o odwiedzinach, urządzeniach i zachowaniu na podstronach projektu.",
    pp_s4_t: "4. Zewnętrzne narzędzia Analityczne i Reklamowe",
    pp_s4_p:
      "Podstrona domowa projektu korzysta z narzędzi zewnętrznych dostawców w celu utrzymania jakości serwisu:",
    pp_s4_l1:
      "<strong>Google Analytics (G-4G118Q2EH2):</strong> Służy do analizowania ogólnego ruchu i informacji o przeglądarkach.",
    pp_s4_l2:
      "<strong>Microsoft Clarity:</strong> Służy do monitorowania problemów z działaniem interfejsu wizualnego strony w oparciu o anonimowe mapy ciepła i interakcje na stronie domowej projektu.",
    pp_s4_l3:
      "<strong>A-ADS:</strong> Platforma zajmująca się anonimowymi reklamami bez naruszania prywatności użytkowników, dzięki której strona projektu opłacana i rozwijana. Reklamy A-ADS nie śledzą użytkowników.",
    pp_s5_t: "5. Zastrzeżenie odpowiedzialności (Disclaimer)",
    pp_s5_p:
      "Narzędzie T212 CFD Data Exporter ma na celu asystowanie w pozyskaniu i transformacji danych. Projekt ani jego twórca nie bierze odpowiedzialności prawnej i finansowej za błędy wynikające z ewentualnych braków danych dostarczonych przez stronę trzecią (Trading212), ani poprawności wygenerowanego JSON'a przy późniejszym rozliczeniu z US. Wynik powinien być każdorazowo zweryfikowany przez profesjonalistę lub dedykowane, komercyjne oprogramowanie podatkowe.",

    site_title: "T212 CFD Data Exporter | Profesjonalne Raporty PIT-38",
    meta_desc:
      "Darmowe narzędzie open-source do eksportu danych z Trading212 CFD oraz Crypto do formatu JSON i CSV. Narzędzie najlepiej współpracuje z kalkulatorgieldowy.pl.",
    og_title: "T212 CFD Data Exporter | Wygeneruj raport do PIT-38",
    og_desc:
      "Eksportuj dane transakcyjne z T212 CFD oraz Crypto do pliku JSON w 30 sekund. Bezpiecznie i za darmo.",
    logo_badge: "🚀 Trading212 Tool",
    title_main: "CFD Data Exporter",
    subtitle:
      'Eksportuj transakcje CFD oraz Crypto do formatu <strong style="color: var(--warning); font-weight: 600"><kbd>JSON</kbd></strong> oraz <strong style="color: var(--warning); font-weight: 600"><kbd>CSV</kbd></strong> w kilka sekund.<br />Bezpiecznie i za darmo.',
    partner_link: "🤝 Narzędzie najlepiej współpracuje z kalkulatorgieldowy.pl",
    nav_about: "O Narzędziu",
    nav_instructions: "Instrukcje",
    instructions_header: "Instrukcje",
    info_date:
      "ℹ️ <b>INFO:</b> Jeśli Twoja zapisana zakładka jest starsza niż 17.04.2026 r., usuń ją i dodaj ponownie. Możesz również skopiować aktualny kod z instrukcji dla urządzeń mobilnych i wkleić go w pole adresu istniejącej zakładki, aby cieszyć się najnowszymi poprawkami. i już od tego momentu nie będziesz musiał za każdym razem zmieniać zakładki ponieważ kod będzie ciągle aktualny",
    warning_account: "⚠️ <b>WAŻNE:</b> Uruchamiaj skrypt będąc na koncie CFD.",
    warning_spam:
      "⚠️ <b>WAŻNE:</b> Nie uruchamiaj skryptu kilkukrotnie w ciągu kilku minut! Może to skutkować blokadą dostępu do Trading212 na około 5 minut.",
    opt1_title: "Opcja 1: Zakładka Bookmarklet (PC)",
    step1_title: "Krok 1: Dodawanie zakładki",
    step1_desc: "Przeciągnij przycisk na pasek zakładek.",
    bookmark_nomenu:
      "Brak paska? Naciśnij <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>",
    quick_inst_title: "🚀 Szybka Instrukcja (Bookmarklet)",
    qi_1: 'Otwórz stronę <b>Trading212</b> (<a target="_blank" href="https://app.trading212.com">app.trading212.com</a>).',
    qi_2: "Kliknij zakładkę <b>🚀 T212 Export Tool</b> zapisaną wcześniej na Twoim pasku zakładek.",
    qi_3: "W oknie które się pojawi wybierz z listy <b>walutę swojego konta</b> i wybierz daty <b>OD</b> oraz <b>DO</b>. Transakcji które mają zostać pobrane",
    qi_4: "Zatwierdź komunikat końcowy i poczekaj na pobranie pliku <b>.json</b> lub <b>.csv</b>.",
    qi_5: 'Wczytaj plik na platformie <a href="https://kalkulatorgieldowy.pl/" target="_blank"><b>kalkulatorgieldowy.pl</b></a>, z którą narzędzie zostało wykonane we współpracy.',
    opt2_title: "Opcja 2: Konsola DevTools",
    opt2_desc:
      "Skopiuj kod i wklej go w zakładce <b>Console</b> (F12) na stronie Trading212.",
    copy_btn: "Kopiuj kod skryptu",
    copy_status: "Skopiowano!",
    full_inst_f12_title: "📋 Pełna Instrukcja Eksportu (Konsola F12)",
    fi_1: 'Skopiuj kod przyciskiem <b>"Kopiuj kod skryptu"</b> (sekcja powyżej).',
    fi_3: "Otwórz narzędzia deweloperskie: naciśnij klawisz <kbd>F12</kbd>.",
    fi_4: "Przejdź do zakładki <b>Console</b> (Konsola).",
    fi_5: 'Wklej skopiowany wcześniej kod skryptu i naciśnij <kbd>Enter</kbd>. <br /><small style="color: var(--text-muted)">* Jeśli przeglądarka blokuje wklejanie, wpisz ręcznie <code>allow pasting</code> i naciśnij Enter, a następnie spróbuj ponownie.</small>',
    mobile_inst_title: "📱 Pełna Instrukcja dla urządzeń mobilnych",
    mobile_warning:
      '⚠️ <b>WAŻNE:</b> Na urządzeniach mobilnych skrypt był testowany na przeglądarkach Chrome i Firefox. Jeżeli udało Ci się odtworzyć skrypt na innej przeglądarce mobilnej niż Chrome lub Firefox, prosimy o zgłoszenie tego w sekcji "Issues" na GitHubie lub drogą mailową. W zgłoszeniu uwzględnij nazwę przeglądarki oraz dołącz screenshot potwierdzający działanie – pomoże nam to w aktualizacji listy wspieranych środowisk!',
    mi_3: "W przeglądarce, dodaj ją do <b>Zakładek</b> (ikona gwiazdki lub menu udostępniania).",
    mi_4: "Przejdź do edycji tej zakładki. Zmień jej nazwę na: <kbd>🚀 T212 Export</kbd>.",
    mi_5: "W polu <b>Adres URL</b> usuń aktualny link i wklej skopiowany kod. Zapisz zmiany.",
    mi_6: "<b>Uruchomienie:</b> Będąc na zalogowanym koncie T212, kliknij w pasek adresu przeglądarki i wpisz: <kbd>T212 Export</kbd>.",
    mi_7: "Z listy podpowiedzi wybierz element z <b>ikoną gwiazdki</b> (Twoją zakładkę). Skrypt uruchomi się na stronie.",
    mobile_note:
      "⚠️ Przeglądarki mobilne blokują skrypty uruchamiane bezpośrednio z menu zakładek. Musisz wpisać nazwę zakładki w pasku adresu i wybrać ją z podpowiedzi – to jedyny sposób na start narzędzia.",
    about_title: "Dlaczego ten skrypt?",
    about_desc:
      "Trading212 CFD nie posiada natywnego eksportu szczegółowych raportów JSON oraz CSV. To narzędzie wypełnia tę lukę.",
    privacy_title: "Prywatność",
    privacy_desc:
      "Dane are przetwarzane lokalnie. Kod jest dostępny na GitHub do wglądu dla każdego użytkownika.",
    github_btn: "Zobacz kod na GitHub",
    cookie_title: "Zgoda na pliki cookies",
    cookie_desc:
      'Korzystając z tej strony, wyrażasz zgodę na używanie plików cookies do celów prawidłowego działania narzędzia oraz statystyk.<br/><br/><a href="privacy-policy.html" style="text-decoration: underline;">Polityka Prywatności</a>',
    cookie_decline: "Nie zgadzam się",
    cookie_accept: "Jestem tego świadomy",
    dev_by: "Developed by Dawid Konopiaty",
    dev_desc:
      "Pasjonat programowania i inwestowania. Ten projekt powstał z myślą o ułatwieniu życia inwestorom korzystającym z Trading212 CFD.",
    footer_privacy: "Polityka Prywatności",
    meta_keywords:
      "Trading212, CFD, Crypto, kryptowaluty, Export, PIT-38, Raport Podatkowy, Giełda, JSON, CSV, Dawid Konopiaty, Kalkulator Giełdowy, zestawienie transakcji, rozliczenie podatku, giełda zagraniczna, T212, Trading 212 data, dane transakcyjne, podatki giełdowe, inwestycje, narzędzia giełdowe, trading212 export, trading 212 tool, pit38, rozliczenie trading212, skrypt trading212, dane giełdowe, finanse, automatyzacja podatków",
    ad_changenow_title: "ChangeNOW • Giełda Kryptowalut",
    ad_changenow_desc: "Prosto. Szybko. Bez limitów. Bez rejestracji.",
    ad_changenow_cta: "Wymień teraz",
    ad_binance_title: "Binance • Największa Giełda",
    ad_binance_desc: "Kupuj i handluj krypto bezpiecznie. Bonus na start!",
    ad_binance_cta: "Zarejestruj się",
  },
  en: {
    pp_title: "Privacy Policy | T212 CFD Data Exporter",
    pp_h1: "Privacy Policy",
    pp_sub: "Learn how we protect your data.",
    pp_back: "⬅ Back to Home",
    pp_s1_t: "1. Introduction",
    pp_s1_p:
      "This privacy policy explains how data is collected, used, and protected while using the <strong>T212 CFD Data Exporter</strong> tool and the project's website.",
    pp_s2_t:
      '2. "Local First" Principle – Financial Data Processing and Protection',
    pp_s2_p:
      "The exporting script (run in the Trading212 window) <strong>exchanges data directly between your browser and official Trading212 servers</strong> (API: <code>live.trading212.com</code>).",
    pp_s2_l1:
      "The resulting JSON, CSV file and log summary are generated strictly locally in the RAM of the user's device.",
    pp_s2_l2:
      "No logins, passwords, transaction amounts, or other <strong>sensitive data are sent</strong>, collected, or analyzed by the tool creator's servers.",
    pp_s2_l3:
      "The entire code responsible for this mechanism is publicly available (Open Source) on the GitHub repository for self-inspection.",
    pp_s3_t: "3. Cookies",
    pp_s3_p:
      "This website uses cookies necessary for the website to function and for analytical purposes. Analytical data is anonymous.",
    pp_s3_l1:
      "<strong>Functional:</strong> The <code>cookieConsent</code> key is used to store information about your consent to the use of cookies (prevents the message from appearing on every visit).",
    pp_s3_l2:
      "<strong>Analytics and UX:</strong> The website uses analytics tools (Google Analytics and Microsoft Clarity, which use their own secure cookies by default) that collect anonymous data about visits, devices, and behavior on the project subpages.",
    pp_s4_t: "4. External Analytics and Advertising Tools",
    pp_s4_p:
      "The project homepage uses tools from external providers to maintain service quality:",
    pp_s4_l1:
      "<strong>Google Analytics (G-4G118Q2EH2):</strong> Used to analyze general traffic and browser information.",
    pp_s4_l2:
      "<strong>Microsoft Clarity:</strong> Used to monitor issues with the visual interface based on anonymous heatmaps and interactions on the project homepage.",
    pp_s4_l3:
      "<strong>A-ADS:</strong> A platform dealing with privacy-friendly anonymous ads, which helps fund and develop the project. A-ADS ads do not track users.",
    pp_s5_t: "5. Disclaimer",
    pp_s5_p:
      "The T212 CFD Data Exporter tool aims to assist in acquiring and transforming data. Neither the project nor its creator assumes legal or financial responsibility for errors resulting from potential data gaps provided by a third party (Trading212), nor for the accuracy of the generated JSON during subsequent tax settlements. The result should always be verified by a professional or dedicated commercial tax software.",

    site_title: "T212 CFD Data Exporter | Professional Tax Reports",
    meta_desc:
      "Free open-source tool for exporting Trading212 CFD and Crypto data to JSON and CSV format. The tool works best with kalkulatorgieldowy.pl.",
    og_title: "T212 CFD Data Exporter | Tool by Dawid Konopiaty",
    og_desc:
      "Export transactional data from T212 CFD and Crypto to JSON file in 30 seconds. Secure and free.",
    logo_badge: "🚀 Trading212 Tool",
    title_main: "CFD Data Exporter",
    subtitle:
      'Export CFD and Crypto transactions to <strong style="color: var(--warning); font-weight: 600"><kbd>JSON</kbd></strong> and <strong style="color: var(--warning); font-weight: 600"><kbd>CSV</kbd></strong> format in seconds.<br />Safely and for free.',
    partner_link: "🤝 The tool works best with kalkulatorgieldowy.pl",
    nav_about: "About Tool",
    nav_instructions: "Instructions",
    instructions_header: "Instructions",
    info_date:
      "ℹ️ <b>INFO:</b> If your saved bookmark is older than April 17, 2026, please delete it and add it again. Alternatively, you can copy the current code from the mobile instructions and paste it into the URL field of your existing bookmark to enjoy the latest fixes. From this point on, you won't need to change your bookmark every time, as the code will remain constantly up to date.",
    warning_account:
      "⚠️ <b>IMPORTANT:</b> Run the script while on your CFD account.",
    warning_spam:
      "⚠️ <b>IMPORTANT:</b> Do not run the script multiple times within a few minutes! This may result in blocking access to Trading212 for about 5 minutes.",
    opt1_title: "Option 1: Bookmarklet (PC)",
    step1_title: "Step 1: Adding the bookmark",
    step1_desc: "Drag the button to the bookmarks bar.",
    bookmark_nomenu:
      "No bar? Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>",
    quick_inst_title: "🚀 Quick Instructions (Bookmarklet)",
    qi_1: 'Open the <b>Trading212</b> page (<a target="_blank" href="https://app.trading212.com">app.trading212.com</a>).',
    qi_2: "Click the <b>🚀 T212 Export Tool</b> bookmark saved previously on your bookmarks bar.",
    qi_3: "In the window that appears, select your <b>account currency</b> from the list and choose the <b>FROM</b> and <b>TO</b> dates for the transactions to be downloaded.",
    qi_4: "Confirm the final message and wait for the <b>.json</b> or <b>.csv</b> file to download.",
    qi_5: 'Upload the file to the <a href="https://kalkulatorgieldowy.pl/" target="_blank"><b>kalkulatorgieldowy.pl</b></a> platform, with which the tool was developed in cooperation.',
    opt2_title: "Option 2: DevTools Console",
    opt2_desc:
      "Copy the code and paste it in the <b>Console</b> tab (F12) on the Trading212 website.",
    copy_btn: "Copy script code",
    copy_status: "Copied!",
    full_inst_f12_title: "📋 Full Export Instructions (F12 Console)",
    fi_1: 'Copy the code using the <b>"Copy script code"</b> button (section above).',
    fi_3: "Open developer tools: press the <kbd>F12</kbd> key.",
    fi_4: "Go to the <b>Console</b> tab.",
    fi_5: 'Paste the previously copied script code and press <kbd>Enter</kbd>. <br /><small style="color: var(--text-muted)">* If the browser blocks pasting, type <code>allow pasting</code> manually and press Enter, then try again.</small>',
    mobile_inst_title: "📱 Full instructions for mobile devices",
    mobile_warning:
      '⚠️ <b>IMPORTANT:</b> On mobile devices, the script has been tested on Chrome and Firefox. If you managed to run the script on a mobile browser other than Chrome or Firefox, please report it in the "Issues" section on GitHub or via email. In your report, include the browser name and attach a screenshot confirming it works – this will help us update the list of supported environments!',
    mi_3: "In the browser, add it to <b>Bookmarks</b> (star icon or share menu).",
    mi_4: "Go to edit this bookmark. Change its name to: <kbd>🚀 T212 Export</kbd>.",
    mi_5: "In the <b>URL</b> field, remove the current link and paste the copied code. Save changes.",
    mi_6: "<b>Running:</b> While logged into your T212 account, click on the browser address bar and type: <kbd>T212 Export</kbd>.",
    mi_7: "From the suggestions list, select the item with the <b>star icon</b> (your bookmark). The script will run on the page.",
    mobile_note:
      "⚠️ Mobile browsers block scripts run directly from the bookmarks menu. You must type the bookmark name in the address bar and select it from the suggestions – this is the only way to start the tool.",
    about_title: "Why this script?",
    about_desc:
      "Trading212 CFD does not have native export for detailed JSON or CSV reports. This tool fills that gap.",
    privacy_title: "Privacy",
    privacy_desc:
      "Data is processed locally. The code is available on GitHub for any user to inspect.",
    github_btn: "View code on GitHub",
    cookie_title: "Cookie consent",
    cookie_desc:
      'By using this site, you consent to the use of cookies for the proper operation of the tool and statistics.<br/><br/><a href="privacy-policy.html" style="text-decoration: underline;">Privacy Policy</a>',
    cookie_decline: "I do not agree",
    cookie_accept: "I accept",
    dev_by: "Developed by Dawid Konopiaty",
    dev_desc:
      "Programming and investing enthusiast. This project was created to make life easier for investors using Trading212 CFD.",
    footer_privacy: "Privacy Policy",
    meta_keywords:
      "Trading212, CFD, Crypto, cryptocurrency, Export, Tax Report, Stock Market, JSON, CSV, Dawid Konopiaty, Trading tool, transaction history, tax settlement, stock trading, T212, Trading 212 data, transactional data, trading taxes, investment tools, open source trading tools, Trading212 data exporter, trading212 spreadsheet, tax automation, stock export, finance tool, trading data script",
    ad_changenow_title: "ChangeNOW • Crypto Exchange",
    ad_changenow_desc: "Simple. Fast. Limitless. No Registration Required.",
    ad_changenow_cta: "Swap Now",
    ad_binance_title: "Binance • Leading Exchange",
    ad_binance_desc: "Buy and trade crypto securely. Start with a bonus!",
    ad_binance_cta: "Sign Up Now",
  },
};

function getSystemLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get("lang");
  if (langParam && langTranslations[langParam]) return langParam;

  const lang = navigator.language || navigator.userLanguage;
  if (lang && lang.toLowerCase().startsWith("pl")) return "pl";
  return "en";
}

let currentLang = localStorage.getItem("siteLang") || getSystemLanguage();

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("siteLang", lang);
  updatePageTranslations();

  const switcher = document.getElementById("lang-switcher");
  if (switcher) switcher.value = lang;
}

function updatePageTranslations() {
  const dict = langTranslations[currentLang];
  if (!dict) return;

  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  if (dict["site_title"]) {
    document.title = dict["site_title"];
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", dict["og_title"] || dict["site_title"]);
    document
      .querySelector('meta[property="twitter:title"]')
      ?.setAttribute("content", dict["og_title"] || dict["site_title"]);
  }

  if (dict["meta_desc"]) {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dict["meta_desc"]);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", dict["og_desc"] || dict["meta_desc"]);
    document
      .querySelector('meta[property="twitter:description"]')
      ?.setAttribute("content", dict["og_desc"] || dict["meta_desc"]);
  }

  if (dict["meta_keywords"]) {
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", dict["meta_keywords"]);
  }

  // Ensure image tags are also set if needed (using current site base path)
  const ogImage = "https://darkspine433.github.io/T212-CFD-DATA/og-image.png";
  document
    .querySelector('meta[property="og:image"]')
    ?.setAttribute("content", ogImage);
  document
    .querySelector('meta[property="twitter:image"]')
    ?.setAttribute("content", ogImage);
}

document.addEventListener("DOMContentLoaded", () => {
  updatePageTranslations();

  const switcher = document.getElementById("lang-switcher");
  if (switcher) {
    switcher.value = currentLang;
    switcher.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }
});
