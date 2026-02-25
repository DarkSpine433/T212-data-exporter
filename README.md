# 🚀 Trading212 CFD Data Exporter

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-CFD-DATA/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-CFD-DATA/issues)
[![License](https://img.shields.io/github/license/DarkSpine433/T212-CFD-DATA?style=for-the-badge)](https://github.com/DarkSpine433/T212-CFD-DATA/blob/main/LICENSE)

Darmowe narzędzie open-source umożliwiające eksport szczegółowych danych transakcyjnych z konta **Trading212 CFD** do formatu JSON. Projekt rozwiązuje problem braku natywnego eksportu danych CFD na platformie, dostarczając plik gotowy do rozliczeń podatkowych (np. dla polskiego formularza **PIT-38** i popularnych kalkulatorów giełdowych).

👉 **Oficjalna strona i generator skryptu:** [darkspine433.github.io/T212-CFD-DATA/](https://darkspine433.github.io/T212-CFD-DATA/)

---

## ✨ Kluczowe Funkcje

- **Zgodność z Polskim Prawem Podatkowym:** Skrypt automatycznie pobiera kursy średnie z API NBP z dnia poprzedzającego uzyskanie przychodu/poniesienie kosztu.
- **Kompleksowy eksport:** Pobiera dane o:
  - Zamkniętych pozycjach (oblicza PnL i uwzględnia częściowe zamknięcia).
  - Opłatach za przewalutowanie (`FEE_FX`).
  - Odsetkach od niezainwestowanej gotówki (`CASH_INTEREST`).
  - Opłatach za przetrzymywanie pozycji przez noc (`FEE_OVERNIGHT`).
- **Interaktywne UI (Nowość!):** Skrypt po uruchomieniu wyświetla na stronie T212 nowoczesny, ruchomy panel z paskiem postępu, estymowanym wynikiem netto na żywo oraz konsolą logów.
- **Anti-Ban System:** Wbudowany mechanizm _Retry_ z opóźnieniem (Exponential Backoff), który chroni przed nałożeniem blokady "Too Many Requests" (błąd 429) przez serwery Trading212.
- **100% Prywatności:** Skrypt działa w całości lokalnie w Twojej przeglądarce. Dane nie są wysyłane na żadne zewnętrzne serwery.

---

## 🐛 Zgłaszanie Błędów i Rozwiązywanie Problemów

Ze względu na to, że API Trading212 potrafi zwracać ogromne ilości danych, skrypt może czasami natrafić na błąd (np. zatrzymać się na konkretnej stronie). W najnowszej wersji wprowadzono system logowania, który pozwala łatwo namierzyć problem.

### Jak poprawnie zgłosić błąd?

1. **Zapisz Logi:** Jeśli skrypt się zawiesi lub na panelu wyświetli się czerwony komunikat o błędzie (np. `true` lub `TypeError`), kliknij przycisk **"Zapisz Logi"** w panelu narzędzia na stronie T212. Zostanie pobrany plik `T212_Logs.txt`.
2. **Przejdź do zakładki:** [Issues](https://github.com/DarkSpine433/T212-CFD-DATA/issues) w tym repozytorium.
3. **Stwórz zgłoszenie:** Kliknij `New issue`.
4. **Opisz problem:** _ Podaj, co dokładnie się stało (np. _"Skrypt zatrzymuje się na pobieraniu opłat overnight, na stronie 119 z 165"\*).
   - Dołącz pobrany plik `T212_Logs.txt` (możesz go przeciągnąć i upuścić w polu tekstowym zgłoszenia) lub wklej kilka ostatnich linijek z logów.
   - Dołącz zrzut ekranu panelu bocznego, jeśli widzisz tam komunikat.

Dzięki plikom z logami, naprawa błędów będzie znacznie szybsza!

---

## 🏗️ Struktura Projektu

- `index.html` - Strona wizytówka i generator czystego kodu.
- `style.css` - System projektowy strony (Premium Dark Design).
- `js/generatorJsonData.js` - Główny silnik aplikacji. Komunikuje się z API T212, odpytuje serwery NBP i renderuje pływający interfejs użytkownika.

---

## 👨‍💻 Kontrybucja

Projekt jest rozwijany dla społeczności inwestorów. Jeśli masz pomysł na ulepszenie narzędzia lub naprawiłeś istniejący błąd:

1. Zrób Fork tego repozytorium.
2. Wprowadź swoje zmiany w branchu.
3. Otwórz Pull Request opisując co ulepszyłeś.

---

## ⚖️ Disclaimer (Oświadczenie o wyłączeniu odpowiedzialności)

Narzędzie jest udostępniane "tak jak jest" (as-is), na licencji Open Source, całkowicie za darmo. Autor (Dawid Konopiaty) nie ponosi odpowiedzialności za ewentualne błędy w obliczeniach matematycznych, ubytki danych oraz ewentualne konsekwencje prawno-podatkowe wynikające z użycia wygenerowanego pliku JSON w deklaracjach podatkowych.
