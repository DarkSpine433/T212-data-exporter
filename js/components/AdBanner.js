class AdBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div
        class="content-ad"
        style="width: 100%; margin: auto; position: relative"
      >
        <iframe
          data-aa="2433499"
          src="//acceptable.a-ads.com/2433499/?size=Adaptive"
          style="
            border: 0;
            padding: 0;
            width: 100%;
            height: auto;
            overflow: hidden;
            display: block;
            margin: auto;
          "
        ></iframe>
      </div>
    `;
  }
}

customElements.define('ad-banner', AdBanner);
