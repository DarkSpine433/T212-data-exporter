# 🚀 Trading212 CFD & CRYPTO Data Exporter

🌍 **Language / Język:** [🇬🇧 English](README.en.md) | [🇵🇱 Polski](README.pl.md)

### Jeżeli uważasz to narzędzie za przydatne, zostaw gwiazdkę na GitHubie! 🌟

##### link do repozytorium epxortera danych -> <a href="https://github.com/DarkSpine433/T212-data-exporter/" target="_blank">https://github.com/DarkSpine433/T212-data-exporter/</a>

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-data-exporter?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-data-exporter/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-data-exporter?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-data-exporter/issues)
[![GitHub version](https://img.shields.io/badge/Wersja-1.3.0-blue?style=for-the-badge)](https://github.com/DarkSpine433/T212-data-exporter/releases)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE.md)

Darmowe narzędzie umożliwiające eksport szczegółowych danych transakcyjnych z kont **Trading212 CFD** oraz **Crypto** do formatu JSON oraz CSV. Projekt rozwiązuje problem braku natywnego eksportu danych na platformie.

👉 **Oficjalna strona** [darkspine433.github.io/T212-data-exporter/](https://darkspine433.github.io/T212-data-exporter/)

🤝 **Współpraca:** Narzędzie najlepiej współpracuje z [kalkulatorgieldowy.pl](https://kalkulatorgieldowy.pl/) i zostało wykonane z ich współpracą.

---

<img class="showcase"  width="406" height="633" alt="1" src="https://github.com/user-attachments/assets/f8662798-edf8-4d53-9f1e-87df18020ba8" />
<img class="showcase"  width="406" height="666" alt="2" src="https://github.com/user-attachments/assets/888bc100-bbea-4a20-9c85-4240ab24fe61" />
<img class="showcase"  width="406" height="600" alt="3" src="https://github.com/user-attachments/assets/ebb024c7-649f-4116-951a-e070cbb4c3fb" />

## ✨ Kluczowe Funkcje (v1.3.0)

- **Uniwersalny Eksport:** Obsługa kont **CFD** oraz **Crypto**. Pobiera dane o zamkniętych pozycjach, opłatach FX, odsetkach (`CASH_INTEREST`), opłatach overnight, historii transakcji i dywidendach.
- **Inteligentne Wykrywanie Konta:** Automatycznie sprawdza, czy jesteś na odpowiednim typie konta (CFD/Crypto) i ostrzega przed błędami.
- **Tryb Prywatności:** Przycisk "Ukryj wyniki", który natychmiastowo rozmywa dane finansowe i zmienia kolory na neutralne.
- **Pauza i Wznowienie:** Pełna kontrola nad procesem pobierania z możliwością wstrzymania i wznowienia w dowolnym momencie.
- **Zaawansowane UI/UX:** Przesuwalny i minimalizowalny panel, przycisk "Wstecz" dla łatwej rekonfiguracji oraz pełne wsparcie językowe.
- **Kursy NBP:** Zautomatyzowana integracja z kursami średnimi NBP dla wszystkich walut obsługiwanych przez Trading 212.
- **Wiele Formatów:** Eksport do **JSON** (zoptymalizowany pod kalkulatory podatkowe), **CSV** oraz **TXT**.
- **System Anti-Ban:** Wbudowane zabezpieczenia przed limitami zapytań (Błąd 429) i ochrona sesji.
- **100% Prywatności:** Wszystkie obliczenia odbywają się lokalnie w przeglądarce; żadne dane nie opuszczają Twojego urządzenia.

---

## 🐛 Zgłaszanie Błędów

Jeśli skrypt napotka problem:

1. Kliknij przycisk **"Zapisz Logi"** w panelu narzędzia, aby pobrać plik `T212_Logs.txt`.
2. Otwórz zgłoszenie w zakładce [Issues](https://github.com/DarkSpine433/T212-data-exporter/issues).
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

Pełna treść postanowień znajduje się w pliku [LICENSE.md](LICENSE.md).

---

## ⚠️ Disclaimer (Oświadczenie)

Narzędzie jest udostępniane "tak jak jest" (as-is), całkowicie za darmo. Autor nie ponosi odpowiedzialności za ewentualne błędy w obliczeniach, ubytki danych oraz konsekwencje prawno-podatkowe wynikające z użycia wygenerowanego pliku. Wynik należy traktować jako estymację.
