class AdBanner extends HTMLElement {
  connectedCallback() {
    const config = window.AdManager.getAdConfig();
    const {
      isBinance,
      brandColor,
      brandColorMuted,
      brandName,
      referralUrl,
      brandGradient,
      images,
    } = config;

    const dict =
      typeof langTranslations != "undefined"
        ? langTranslations[currentLang]
        : {};
    const title = isBinance
      ? dict.ad_binance_title || "Binance • Premier Exchange"
      : dict.ad_changenow_title || "ChangeNOW • Crypto Exchange";
    const desc = isBinance
      ? dict.ad_binance_desc || "Trade 600+ cryptocurrencies. Secure and fast."
      : dict.ad_changenow_desc ||
        "Simple. Fast. Limitless. No Registration Required.";
    const cta = isBinance
      ? dict.ad_binance_cta || "Get Started"
      : dict.ad_changenow_cta || "Swap Now";

    const slideImages = [...images, images[0]];
    const n = images.length;
    const total = slideImages.length;
    const uid = `banner-${Math.random().toString(36).substring(2, 11)}`;

    let keyframes = "";
    const step = 100 / n;
    for (let i = 0; i <= n; i++) {
      const percentage = i * step;
      const nextPercentage = i < n ? (i + 1) * step - 2 : 100;

      const translateX = (i * 100) / total;
      keyframes += `  ${percentage.toFixed(2)}%, ${nextPercentage.toFixed(2)}% { transform: translateX(-${translateX.toFixed(2)}%); }\n`;
    }

    this.innerHTML = `
      <style>
        #${uid}.ad-banner-link {
          display: flex;
          margin: 30px 0;
          width: 100%;
          min-height: 280px;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          flex-direction: column;
          justify-content: flex-end;
          text-decoration: none;
          color: white;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        #${uid}.ad-banner-link:hover {
          transform: translateY(-5px);
          border-color: ${brandColor}66;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7), 0 0 30px ${brandColor}22;
        }

        #${uid} .carousel-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background: #000;
        }

        #${uid} .carousel-view {
          display: flex;
          width: ${total * 100}%;
          height: 100%;
          animation: ad-slide-${uid} ${n * 5}s infinite ease-in-out;
        }
        
        #${uid} .slide-item {
          width: ${100 / total}%;
          height: 100%;
          position: relative;
        }

        #${uid} .slide-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.6) contrast(1.1);
          transition: transform 1.2s ease, filter 0.5s ease;
        }

        #${uid}.ad-banner-link:hover .slide-item img {
          transform: scale(1.1);
          filter: brightness(0.8) contrast(1.1);
        }

        #${uid} .content-overlay {
          position: relative;
          z-index: 2;
          padding: 30px;
          background: linear-gradient(0deg, 
                        rgba(0,0,0,0.95) 0%, 
                        rgba(0,0,0,0.6) 50%, 
                        rgba(0,0,0,0) 100%);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        #${uid} .header-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 15px;
        }

        #${uid} .text-content {
          flex: 1;
        }

        #${uid} .brand-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 100px;
          background: ${brandColor};
          color: #000;
          font-size: 0.7rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
          box-shadow: 0 4px 15px ${brandColor}66;
        }

        #${uid} .content-overlay h4 {
          margin: 0;
          font-size: 1.7rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          background: ${brandGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        #${uid} .content-overlay p {
          margin: 6px 0 0;
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
          font-weight: 600;
          max-width: 85%;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        }

        #${uid} .tp-mini {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          padding: 10px 15px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        #${uid} .tp-stars {
          display: flex;
          gap: 2px;
        }

        #${uid} .star {
          width: 14px;
          height: 14px;
          background: #00b67a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          border-radius: 2px;
        }

        #${uid} .footer-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        #${uid} .cta-button {
          background: ${brandGradient};
          color: #000;
          padding: 14px 32px;
          border-radius: 18px;
          font-weight: 950;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 10px 25px ${brandColor}55;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #${uid} .cta-button:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        @keyframes ad-slide-${uid} {
${keyframes}
        }

        /* Responsive Display Logic: SHOW only on Mobile/Tablet */
        @media (min-width: 1390px) {
          #${uid}.ad-banner-link { display: none !important; }
        }

        @media (max-width: 768px) {
          #${uid} .content-overlay {
            text-align: center;
            align-items: center;
            padding: 20px;
          }
          #${uid} .header-info {
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
          }
          #${uid} .content-overlay p {
            max-width: 100%;
          }
          #${uid} .footer-actions {
            flex-direction: column;
            gap: 15px;
            width: 100%;
          }
          #${uid} .content-overlay h4 { font-size: 1.4rem; }
          #${uid} .tp-mini { display: none; }
        }
      </style>
      <a href="${referralUrl}" target="_blank" class="ad-banner-link" id="${uid}">
        <div class="carousel-container">
          <div class="carousel-view">
            ${slideImages
              .map(
                (url, i) => `
              <div class="slide-item">
                <img src="${url}" alt="Ad Slide ${i + 1}" data-retries="0" loading="lazy">
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
        
        <div class="content-overlay">
          <div class="header-info">
            <div class="text-content">
              <div class="brand-badge">${brandName} Partner</div>
              <h4 data-i18n="${isBinance ? "ad_binance_title" : "ad_changenow_title"}">${title}</h4>
              <p data-i18n="${isBinance ? "ad_binance_desc" : "ad_changenow_desc"}">${desc}</p>
            </div>
            
            <div class="tp-mini">
              <div class="tp-stars">
                <div class="star">★</div><div class="star">★</div><div class="star">★</div><div class="star">★</div><div class="star">★</div>
              </div>
              <span style="font-size: 10px; font-weight: 700; opacity: 0.8">Excellent</span>
            </div>
          </div>
          
          <div class="footer-actions">
            <div style="font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 600;">
              Sponsored Advertisement
            </div>
            <div class="cta-button" data-i18n="${isBinance ? "ad_binance_cta" : "ad_changenow_cta"}">${cta}</div>
          </div>
        </div>
      </a>
    `;

    window.AdManager.initImageFallback(
      this,
      brandName,
      brandColor,
      ".slide-item",
    );
    if (typeof updatePageTranslations === "function") updatePageTranslations();
  }
}

customElements.define("ad-banner", AdBanner);
