# 🚀 Trading212 CFD Data Exporter

🌍 **Language / Język:** [🇬🇧 English](README.en.md) | [🇵🇱 Polski](README.pl.md)

### Jeżeli uważasz to narzędzie za przydatne, zostaw gwiazdkę na GitHubie! 🌟

##### link do repozytorium epxortera danych -> <a href="https://github.com/DarkSpine433/T212-CFD-DATA/" target="_blank">https://github.com/DarkSpine433/T212-CFD-DATA/</a>

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-CFD-DATA/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-CFD-DATA/issues)
[![GitHub version](https://img.shields.io/badge/Wersja-1.2.0-blue?style=for-the-badge)](https://github.com/DarkSpine433/T212-CFD-DATA/releases)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENCE.md)

Darmowe narzędzie umożliwiające eksport szczegółowych danych transakcyjnych z konta **Trading212 CFD** do formatu JSON oraz CSV. Projekt rozwiązuje problem braku natywnego eksportu danych CFD na platformie.

👉 **Oficjalna strona** [darkspine433.github.io/T212-CFD-DATA/](https://darkspine433.github.io/T212-CFD-DATA/)

🤝 **Współpraca:** Narzędzie najlepiej współpracuje z [kalkulatorgieldowy.pl](https://kalkulatorgieldowy.pl/) i zostało wykonane z ich współpracą.

---

<img class="showcase" width="405" height="540" alt="2" src="https://github.com/user-attachments/assets/2d117620-64b9-476e-9a7f-b17dac7efef6" />
<br/>
<img  class="showcase" width="407" height="569" alt="1" src="https://github.com/user-attachments/assets/da52ca0f-6aa6-4381-ab1f-59efa3e9d799" />
<br/>
<img  class="showcase" width="420" height="450" alt="3" src="https://github.com/user-attachments/assets/160e9c51-c9d6-4902-a02f-054ee2ecf0f3" />

## ✨ Kluczowe Funkcje (v1.2.0)

- **Kompleksowy eksport:** Pobiera dane o zamkniętych pozycjach, opłatach FX, odsetkach (`CASH_INTEREST`), opłatach overnight, **historii transakcji** (wpłaty, wypłaty, przelewy) oraz **rejestrach dywidend**.
- **Wiele formatów eksportu:** Eksportuj dane do **JSON** (dla kalkulatorów podatkowych), **CSV** (format T212) oraz **TXT** (podsumowanie tekstowe).
- **Interaktywne UI:** Nowoczesny panel z paskiem postępu i konsolą logów wyświetlany bezpośrednio na stronie Trading212.
- **Wsparcie dwóch języków:** Pełne wsparcie dla **języka polskiego i angielskiego** z możliwością przełączania w czasie rzeczywistym.
- **Skróty klawiszowe:** Naciśnij **Enter** aby potwierdzić, **Escape** aby anulować w oknie konfiguracji.
- **Anti-Ban System:** Mechanizm _Retry_ chroniący przed blokadą za zbyt dużą liczbę zapytań (błąd 429).
- **100% Prywatności:** Dane przetwarzane są wyłącznie lokalnie w Twojej przeglądarce.
- **Wsparcie urządzeń mobilnych:** Działa na przeglądarkach mobilnych - pozostań na stronie T212 i nie wygaszaj ekranu.

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
- `js/i18n.js` - System międzynarodowy (i18n).
- `js/utils/` - Moduły narzędziowe (analytics, zgody cookies).

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
