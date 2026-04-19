# 🚀 Trading212 CFD Data Exporter

🌍 **Language / Język:** [🇬🇧 English](README.en.md) | [🇵🇱 Polski](README.pl.md)

### If you find this tool useful, please leave a star on GitHub! 🌟

##### Data exporter repository link -> <a href="https://github.com/DarkSpine433/T212-CFD-DATA/" target="_blank">https://github.com/DarkSpine433/T212-CFD-DATA/</a>

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-CFD-DATA/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-CFD-DATA/issues)
[![GitHub version](https://img.shields.io/badge/Version-1.2.0-blue?style=for-the-badge)](https://github.com/DarkSpine433/T212-CFD-DATA/releases)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE.md)

A free tool enabling the export of detailed transaction data from a **Trading212 CFD** account to JSON and CSV format. This project solves the problem of the lack of native CFD data export on the platform.

👉 **Official website** [darkspine433.github.io/T212-CFD-DATA/](https://darkspine433.github.io/T212-CFD-DATA/)

🤝 **Collaboration:** The tool works best with [kalkulatorgieldowy.pl](https://kalkulatorgieldowy.pl/) and was built in collaboration with them.

---

<img class="showcase" width="405" height="540" alt="2" src="https://github.com/user-attachments/assets/2d117620-64b9-476e-9a7f-b17dac7efef6" />
<br/>
<img  class="showcase" width="407" height="569" alt="1" src="https://github.com/user-attachments/assets/da52ca0f-6aa6-4381-ab1f-59efa3e9d799" />
<br/>
<img  class="showcase" width="420" height="450" alt="3" src="https://github.com/user-attachments/assets/160e9c51-c9d6-4902-a02f-054ee2ecf0f3" />

## ✨ Key Features (v1.2.0)

- **Comprehensive export:** Downloads data about closed positions, FX fees, interest (`CASH_INTEREST`), overnight fees, **transaction history** (deposits, withdrawals, transfers), and **dividend records**.
- **Multiple export formats:** Export data to **JSON** (for tax calculators), **CSV** (T212 format), and **TXT** (text summary).
- **Interactive UI:** A modern panel with a progress bar and a logs console displayed directly on the Trading212 page.
- **Bilingual support:** Full **Polish and English** language support with real-time language switching.
- **Keyboard shortcuts:** Press **Enter** to confirm, **Escape** to cancel in the configuration dialog.
- **Anti-Ban System:** A _Retry_ mechanism protecting against bans for too many requests (error 429).
- **100% Privacy:** Data is processed exclusively locally in your browser.
- **Mobile-friendly:** Works on mobile browsers - stay on the T212 page and keep your screen active.

---

## 🐛 Reporting Bugs

If the script encounters a problem:

1. Click the **"Save Logs"** button in the tool panel to download the `T212_Logs.txt` file.
2. Open an issue in the [Issues](https://github.com/DarkSpine433/T212-CFD-DATA/issues) tab.
3. Describe the situation and attach the downloaded log file.

---

## 🏗️ Project Structure

- `index.html` - Homepage and code generator.
- `style.css` - Page design (Premium Dark Design).
- `js/generatorJsonData.js` - Main application engine and API logic.
- `js/i18n.js` - Internationalization system.
- `js/utils/` - Utility modules (analytics, cookie consent).

---

## 👨‍💻 Contributing

Want to improve the project?

1. Fork the repository.
2. Make your improvements.
3. Open a Pull Request.

---

## ⚖️ Copyright and License

© 2026 Dawid Konopiaty. All rights reserved.

- **End Users:** May use the script for personal purposes completely free of charge (exporting personal data).
- **Restrictions:** Copying, redistributing, or publishing the source code on other websites without prior written or spoken consent from the author is prohibited.

For the full text of the terms, see [LICENSE.md](LICENSE.md).

---

## ⚠️ Disclaimer

This tool is provided "as is", completely free of charge. The author is not responsible for any potential calculations errors, data gaps, or legal and tax consequences resulting from the use of the generated file. The result should be treated as an estimation.
