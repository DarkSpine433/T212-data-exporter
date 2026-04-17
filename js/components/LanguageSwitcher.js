class LanguageSwitcher extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      #lang-switcher {
        padding: 6px 10px;
        font-size: 14px;
        transition: all 0.2s ease;
      }
      @media (min-width: 768px) {
        #lang-switcher {
          padding: 10px 20px;
          font-size: 18px;
          border-radius: 12px;
        }
      }
    </style>
    <div style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 100000; font-family: sans-serif;">
      <select id="lang-switcher" style="border-radius: 8px; background: rgba(30, 41, 59, 0.8); color: #fff; border: 1px solid rgba(255,255,255,0.2); outline: none; cursor: pointer; backdrop-filter: blur(8px);">
        <option value="pl">🇵🇱 Polski</option>
        <option value="en">🇬🇧 English</option>
      </select>
    </div>
    `;
  }
}

customElements.define('language-switcher', LanguageSwitcher);
