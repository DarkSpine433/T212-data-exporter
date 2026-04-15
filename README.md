# 🚀 Trading212 CFD Data Exporter

### Jeżeli uważasz to narzędzie za przydatne, zostaw gwiazdkę na GitHubie! 🌟

##### link do repozytorium epxortera danych -> <a href="https://github.com/DarkSpine433/T212-CFD-DATA/" target="_blank">https://github.com/DarkSpine433/T212-CFD-DATA/</a>

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-CFD-DATA/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-CFD-DATA/issues)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

Darmowe narzędzie umożliwiające eksport szczegółowych danych transakcyjnych z konta **Trading212 CFD** do formatu JSON. Projekt rozwiązuje problem braku natywnego eksportu danych CFD na platformie.

👉 **Oficjalna strona** [darkspine433.github.io/T212-CFD-DATA/](https://darkspine433.github.io/T212-CFD-DATA/)

🤝 **Współpraca:** Narzędzie najlepiej współpracuje z [kalkulatorgieldowy.pl](https://kalkulatorgieldowy.pl/) i zostało wykonane z ich współpracą.

---

<img width="415" height="431" alt="1" src="https://github.com/user-attachments/assets/2b454139-fb60-4b12-93a9-def8b7fa5800" />

<img width="388" height="565" alt="2" src="https://github.com/user-attachments/assets/5f6699b7-0b39-4aef-9685-caf01ea612d9" />


## ✨ Kluczowe Funkcje

- **Kompleksowy eksport:** Pobiera dane o zamkniętych pozycjach, opłatach FX, odsetkach (`CASH_INTEREST`) oraz opłatach overnight.
- **Interaktywne UI:** Nowoczesny panel z paskiem postępu i konsolą logów wyświetlany bezpośrednio na stronie Trading212.
- **Anti-Ban System:** Mechanizm _Retry_ chroniący przed blokadą za zbyt dużą liczbę zapytań (błąd 429).
- **100% Prywatności:** Dane przetwarzane są wyłącznie lokalnie w Twojej przeglądarce.

---

## 🐛 Zgłaszanie Błędów

Jeśli skrypt napotka problem:

1. Kliknij przycisk **"Zapisz Logi"** w panelu narzędzia, aby pobrać plik `T212_Logs.txt`.
2. Otwórz zgłoszenie w zakładce [Issues](https://github.com/DarkSpine433/T212-CFD-DATA/issues).
3. Opisz sytuację i załącz pobrany plik z logami.

---

## 🏗️ Struktura Projektu

- `index.html` - Strona wizytówka i generator kodu.
- `style.css` - Design strony (Premium Dark Design).
- `js/generatorJsonData.js` - Główny silnik aplikacji i logika API.

---

## 👨‍💻 Kontrybucja

Chcesz ulepszyć projekt?

1. Zrób Fork repozytorium.
2. Wprowadź poprawki.
3. Otwórz Pull Request.

---

## ⚖️ Prawa Autorskie i Licencja

© 2026 Dawid Konopiaty. Wszelkie prawa zastrzeżone.

- **Użytkownicy końcowi:** Mogą bezpłatnie korzystać ze skryptu do celów prywatnych (eksport danych własnych).
- **Ograniczenia:** Zabrania się kopiowania, redystrybucji oraz publikowania kodu źródłowego na innych stronach internetowych bez uprzedniej pisemnej lub ustnej zgody autora.

Pełna treść postanowień znajduje się w pliku [LICENCE.md](LICENCE.md).

---

## ⚠️ Disclaimer (Oświadczenie)

Narzędzie jest udostępniane "tak jak jest" (as-is), całkowicie za darmo. Autor nie ponosi odpowiedzialności za ewentualne błędy w obliczeniach, ubytki danych oraz konsekwencje prawno-podatkowe wynikające z użycia wygenerowanego pliku. Wynik należy traktować jako estymację.
