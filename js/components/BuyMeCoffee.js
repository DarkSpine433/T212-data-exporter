class BuyMeCoffee extends HTMLElement {
  connectedCallback() {
    // Prevent multiple initializations in case of re-renders
    if (this.hasChildNodes()) return;

    const container = document.createElement('div');
    container.style.cssText = "position: fixed; top: 0; right: 0; z-index: 100000";
    
    const script = document.createElement('script');
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    script.setAttribute('data-id', 'DarkSpine');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', 'Wspomóż kodowanie po służbie! ☕');
    script.setAttribute('data-color', '#5F7FFF');
    script.setAttribute('data-position', 'Right');
    script.setAttribute('data-x_margin', '18');
    script.setAttribute('data-y_margin', '18');
    
    container.appendChild(script);
    this.appendChild(container);
  }
}

customElements.define('buy-me-coffee', BuyMeCoffee);
