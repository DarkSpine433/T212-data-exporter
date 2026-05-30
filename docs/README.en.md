# 🚀 Trading212 CFD & CRYPTO Data Exporter

🌍 **Language / Język:** [🇬🇧 English](README.md) | [🇵🇱 Polski](README.pl.md)

## If you find this tool useful, please leave a star on GitHub! 🌟

### Data exporter repository link -> [https://github.com/DarkSpine433/T212-data-exporter/](https://github.com/DarkSpine433/T212-data-exporter/)

[![GitHub stars](https://img.shields.io/github/stars/DarkSpine433/T212-data-exporter?style=for-the-badge&color=fac814)](https://github.com/DarkSpine433/T212-data-exporter/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/DarkSpine433/T212-data-exporter?style=for-the-badge&color=blue)](https://github.com/DarkSpine433/T212-data-exporter/issues)
[![GitHub version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)](https://github.com/DarkSpine433/T212-data-exporter/releases)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE.md)

A free tool enabling the export of detailed transaction data from **Trading212 CFD** and **Crypto** accounts to JSON and CSV format. This project solves the problem of the lack of native data export on the platform.

👉 **Official website** [https://darkspine433.github.io/T212-data-exporter/](https://darkspine433.github.io/T212-data-exporter/)

🤝 **Collaboration:** The tool works best with [https://kalkulatorgieldowy.pl/](https://kalkulatorgieldowy.pl/) and was built in collaboration with them.

---

<img class="showcase"  width="406" height="633" alt="1" src="https://github.com/user-attachments/assets/f8662798-edf8-4d53-9f1e-87df18020ba8" />
<img class="showcase"  width="406" height="666" alt="2" src="https://github.com/user-attachments/assets/888bc100-bbea-4a20-9c85-4240ab24fe61" />
<img class="showcase"  width="406" height="600" alt="3" src="https://github.com/user-attachments/assets/ebb024c7-649f-4116-951a-e070cbb4c3fb" />

## ✨ Key Features (v2.0.0)

- **Universal Export:** Fully supports both **CFD** and **Crypto** accounts. Downloads closed positions, FX fees, interest (`CASH_INTEREST`), overnight fees, transaction history, and dividend records.
- **Next-Gen API Engine:** Completely updated request headers (`X-Trader-Client`, `X-Trader-Device-Model`, etc.) and endpoints to align with the latest Trading212 authorization mechanics.
- **Advanced Window Resizing:** Draggable corner handles let you manually scale the UI to your needs. Includes a smart **"Auto Fit"** layout option.
- **Persistent UI State:** Automatically saves window dimensions and position via `localStorage` so it loads exactly where you left it.
- **Double-Click Minimize:** Double-clicking the panel header instantly minimizes the interface, with smart overrides for inner interactive components.
- **Privacy Mode:** "Hide Results" toggle that instantly blurs sensitive financial data for clean screenshots or videos.
- **Pause & Resume:** Total control over the extraction process with real-time pause/resume functionality.
- **NBP Exchange Rates:** Automated integration with NBP mid-market rates for all supported Trading 212 account currencies.
- **Multiple Formats:** Export data to **JSON** (optimized for tax calculators), **CSV**, and **TXT** summaries with client-side code compression (Terser minification).
- **100% Privacy:** All processing is done locally in your browser; no data ever leaves your device.

---

## 🐛 Reporting Bugs

If the script encounters a problem:

1. Click the **"Save Logs"** button in the tool panel to download the `T212_Logs.txt` file.
2. Open an issue in the [Issues](https://github.com/DarkSpine433/T212-data-exporter/issues) tab.
3. Describe the situation and attach the downloaded log file.

---

## 🏗️ Project Structure

- `index.html` - Homepage and bookmarklet code generator.
- `src/styles/` - Centralized CSS system using Inter font architecture and variables.
- `src/core/` - Application core engines, data extraction, and localization handlers.
- `src/components/` - Interactive layouts (such as modern mobile support dialogs).
- `src/assets/` - Optimized static resources, icons, and Open Graph graphics.
- `tests/` - Dedicated directory for scripts and data testing.

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
