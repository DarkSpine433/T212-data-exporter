# 🚀 Trading212 CFD Data Exporter

🌍 **Language / Język:** [🇬🇧 English](README.en.md) | [🇵🇱 Polski](README.pl.md)

## If you find this tool useful, please leave a star on GitHub! 🌟

### Data exporter repository link -> [https://github.com/DarkSpine433/T212-CFD-DATA/](https://github.com/DarkSpine433/T212-CFD-DATA/)

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-CFD-DATA/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-CFD-DATA?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-CFD-DATA/issues)
[![GitHub version](https://img.shields.io/badge/Version-1.3.0-blue?style=for-the-badge)](https://github.com/DarkSpine433/T212-CFD-DATA/releases)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE.md)

A free tool enabling the export of detailed transaction data from **Trading212 CFD** and **Crypto** accounts to JSON and CSV format. This project solves the problem of the lack of native data export on the platform.

👉 **Official website** [https://darkspine433.github.io/T212-CFD-DATA/](https://darkspine433.github.io/T212-CFD-DATA/)

🤝 **Collaboration:** The tool works best with [https://kalkulatorgieldowy.pl/](https://kalkulatorgieldowy.pl/) and was built in collaboration with them.

---


<img class="showcase"  width="406" height="633" alt="1" src="https://github.com/user-attachments/assets/f8662798-edf8-4d53-9f1e-87df18020ba8" />
<img class="showcase"  width="406" height="666" alt="2" src="https://github.com/user-attachments/assets/888bc100-bbea-4a20-9c85-4240ab24fe61" />
<img class="showcase"  width="406" height="600" alt="3" src="https://github.com/user-attachments/assets/ebb024c7-649f-4116-951a-e070cbb4c3fb" />

## ✨ Key Features (v1.3.0)

- **Universal Export:** Now supports both **CFD** and **Crypto** accounts. Downloads closed positions, FX fees, interest (`CASH_INTEREST`), overnight fees, transaction history, and dividend records.
- **Smart Account Detection:** Automatically identifies if you are on the correct account type (CFD/Crypto) and warns you of any mismatch to prevent errors.
- **Privacy Mode:** "Hide Results" toggle that instantly blurs sensitive financial data and switches text colors to neutral white.
- **Pause & Resume:** Total control over the extraction process with real-time pause/resume functionality.
- **Advanced UI/UX:** A draggable, minimizable panel with a progress bar, a "Back" button for easy reconfiguration, and full language support.
- **NBP Exchange Rates:** Automated integration with NBP mid-market rates for all supported Trading 212 account currencies.
- **Multiple Formats:** Export data to **JSON** (optimized for tax calculators), **CSV**, and **TXT** summaries.
- **Anti-Ban System:** Built-in safeguards against rate limits (Error 429) and session protection.
- **100% Privacy:** All processing is done locally in your browser; no data ever leaves your device.

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
