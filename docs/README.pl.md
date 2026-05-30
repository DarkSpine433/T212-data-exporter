# 🚀 Trading212 CFD & CRYPTO Data Exporter

🌍 **Language / Język:** [🇬🇧 English](README.md) | [🇵🇱 Polski](README.pl.md)

### Jeżeli uważasz to narzędzie za przydatne, zostaw gwiazdkę na GitHubie! 🌟

##### link do repozytorium exportera danych -> <a href="https://github.com/DarkSpine433/T212-data-exporter/" target="_blank">https://github.com/DarkSpine433/T212-data-exporter/</a>

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-data-exporter?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-data-exporter/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-data-exporter?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-data-exporter/issues)
[![GitHub version](https://img.shields.io/badge/Wersja-2.0.0-blue?style=for-the-badge)](https://github.com/DarkSpine433/T212-data-exporter/releases)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE.md)

Darmowe narzędzie umożliwiające eksport szczegółowych danych transakcyjnych z kont **Trading212 CFD** oraz **Crypto** do formatu JSON oraz CSV. Projekt rozwiązuje problem braku natywnego eksportu danych na platformie.

👉 **Oficjalna strona** [darkspine433.github.io/T212-data-exporter/](https://darkspine433.github.io/T212-data-exporter/)

🤝 **Współpraca:** Narzędzie najlepiej współpracuje z [kalkulatorgieldowy.pl](https://kalkulatorgieldowy.pl/) i zostało wykonane z ich współpracą.

---

<img class="showcase"  width="406" height="633" alt="1" src="https://github.com/user-attachments/assets/f8662798-edf8-4d53-9f1e-87df18020ba8" />
<img class="showcase"  width="406" height="666" alt="2" src="https://github.com/user-attachments/assets/888bc100-bbea-4a20-9c85-4240ab24fe61" />
<img class="showcase"  width="406" height="600" alt="3" src="https://github.com/user-attachments/assets/ebb024c7-649f-4116-951a-e070cbb4c3fb" />

## ✨ Kluczowe Funkcje (v2.0.0)

- **Uniwersalny Eksport:** Pełna obsługa kont **CFD** oraz **Crypto**. Pobiera dane o zamkniętych pozycjach, opłatach FX, odsetkach (`CASH_INTEREST`), opłatach overnight, historii transakcji i dywidendach.
- **Nowy Silnik API:** Całkowicie dostosowany do zmian w autoryzacji Trading212. Obsługuje nowe nagłówki (`X-Trader-Client`, `X-Trader-Device-Model`, itd.) i bezpieczny proces bootstrappingu konta.
- **Dynamiczne Skalowanie Okna (Resizing):** Wyposażone w przeciągalne narożniki pozwalające na swobodną, ręczną zmianę rozmiarów interfejsu oraz funkcję **"Auto Fit"**.
- **Pamięć Stanu UI:** Rozmiar i pozycja okna są automatycznie zapisywane w `localStorage`, dzięki czemu po przeładowaniu strony panel pojawi się dokładnie tam, gdzie go zostawiłeś.
- **Minimalizacja Dwuklikiem:** Możliwość szybkiego zwijania panelu poprzez podwójne kliknięcie na nagłówek (z ochroną przed przypadkowym kliknięciem w przyciski).
- **Tryb Prywatności:** Funkcja "Ukryj wyniki" natychmiast rozmywa (blur) wrażliwe dane finansowe, ułatwiając robienie bezpiecznych zrzutów ekranu.
- **Pauza i Wznowienie:** Pełna kontrola nad procesem pobierania z możliwością wstrzymania i wznowienia w dowolnym momencie.
- **Kursy NBP:** Zautomatyzowana integracja z kursami średnimi NBP dla wszystkich walut obsługiwanych przez Trading 212.
- **Szybkość i Optymalizacja:** Wbudowane minifikowanie kodu w locie (Terser), skrócone payloady bookmarkletu oraz mechanizmy redukcji opóźnień sieciowych (preconnect).
- **100% Prywatności:** Wszystkie obliczenia odbywają się lokalnie w przeglądarce; żadne dane nie opuszczają Twojego urządzenia.

---

## 🐛 Zgłaszanie Błędów

Jeśli skrypt napotka problem:

1. Kliknij przycisk **"Zapisz Logi"** w panelu narzędzia, aby pobrać plik `T212_Logs.txt`.
2. Otwórz zgłoszenie w zakładce [Issues](https://github.com/DarkSpine433/T212-data-exporter/issues).
3. Opisz sytuację i załącz pobrany plik z logami.

---

## 🏗️ Struktura Projektu

- `index.html` - Strona główna i generator kodu bookmarklet.
- `src/styles/` - Scentralizowana architektura stylów z wykorzystaniem czcionki Inter oraz zmiennych CSS.
- `src/core/` - Główny silnik aplikacji, ekstrakcja danych, obsługa API i lokalizacji.
- `src/components/` - Interaktywne układy interfejsu (m.in. nowoczesne okna dialogowe dla urządzeń mobilnych).
- `src/assets/` - Zoptymalizowane zasoby statyczne, ikony i grafiki Open Graph.
- `tests/` - Dedykowany folder na skrypty oraz dane testowe.

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

Pełna treść postanowień znajduje się w pliku [LICENSE.md](LICENSE.md).

---

## ⚠️ Disclaimer (Oświadczenie)

Narzędzie jest udostępniane "tak jak jest" (as-is), całkowicie za darmo. Autor nie ponosi odpowiedzialności za ewentualne błędy w obliczeniach, ubytki danych oraz konsekwencje prawno-podatkowe wynikające z użycia wygenerowanego pliku. Wynik należy traktować jako estymację.
