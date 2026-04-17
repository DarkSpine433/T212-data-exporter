class AdSidebar extends HTMLElement {
  connectedCallback() {
    const position = this.getAttribute('position') || 'left';
    const hideId = `aads-hide-${position}`;
    this.innerHTML = `
      <div class="aads-sidebar ${position}">
        <input autocomplete="off" type="checkbox" id="${hideId}" hidden />
        <div class="aads-sidebar-content">
          <label for="${hideId}" class="aads-close-btn">
            <svg viewBox="0 0 490 490">
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "
              />
            </svg>
          </label>
          <div class="aads-frame">
            <iframe
              data-aa="2433499"
              src="//acceptable.a-ads.com/2433499/?size=Adaptive"
            ></iframe>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('ad-sidebar', AdSidebar);
