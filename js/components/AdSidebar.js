class AdSidebar extends HTMLElement {
  connectedCallback() {
    const position = this.getAttribute("position") || "left";
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
    const desc = isBinance
      ? dict.ad_binance_desc || "Leading Crypto Exchange. Secure and reliable."
      : dict.ad_changenow_desc || "Simple. Fast. Limitless. No Registration.";
    const cta = isBinance
      ? dict.ad_binance_cta || "Sign Up"
      : dict.ad_changenow_cta || "Swap Now";

    const slideImages = [...images, images[0]];
    const n = images.length;
    const total = slideImages.length;
    const uid = `sidebar-${Math.random().toString(36).substring(2, 11)}`;

    // Generate dynamic keyframes for infinite loop (Vertical)
    let keyframes = "";
    const step = 100 / n;
    for (let i = 0; i <= n; i++) {
      const percentage = i * step;
      const nextPercentage = i < n ? (i + 1) * step - 2 : 100;
      const translateY = (i * 100) / total;
      keyframes += `  ${percentage.toFixed(2)}%, ${nextPercentage.toFixed(2)}% { transform: translateY(-${translateY.toFixed(2)}%); }\n`;
    }

    this.innerHTML = `
      <style>
        #${uid}.changenow-sidebar {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 230px;
          height: 600px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #${uid}.changenow-sidebar.left { left: 20px; }
        #${uid}.changenow-sidebar.right { right: 20px; }

        #${uid} .sidebar-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid ${brandColor}44;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8), 0 0 20px ${brandColorMuted};
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #${uid} .sidebar-container:hover {
          border-color: ${brandColor};
          box-shadow: 0 15px 50px ${brandColor}66, 0 0 30px ${brandColor}22;
          transform: scale(1.03) translateY(-5px);
        }

        #${uid} .sidebar-carousel {
          height: 65%;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        #${uid} .sidebar-slides {
          display: flex;
          flex-direction: column;
          height: ${total * 100}%;
          animation: sidebar-slide-${uid} ${n * 4}s infinite ease-in-out;
        }

        #${uid} .sidebar-slide-item {
          height: ${100 / total}%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        #${uid} .sidebar-slide-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(1);
        }

        #${uid} .sidebar-fallback-ui {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #111 0%, ${brandColor}11 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-align: center;
          padding: 10px;
          border: 1px inset ${brandColor}22;
        }

        #${uid} .s-fallback-icon {
          font-size: 2.5rem;
          color: ${brandColor};
          text-shadow: 0 0 10px ${brandColor}44;
        }

        #${uid} .s-fallback-text {
          font-weight: 800;
          font-size: 1rem;
          color: #fff;
          text-transform: uppercase;
        }

        #${uid} .sidebar-content {
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(0deg, #000 0%, #111 100%);
          text-align: center;
        }

        #${uid} .sidebar-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 5px;
          background: ${brandGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        #${uid} .sidebar-desc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
          font-weight: 500;
        }

        #${uid} .sidebar-cta {
          background: ${brandGradient};
          color: #000;
          padding: 12px;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 900;
          text-transform: uppercase;
          margin-top: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px ${brandColor}44;
          animation: pulse-glow-${uid} 2s infinite;
        }

        @keyframes pulse-glow-${uid} {
          0% { box-shadow: 0 4px 15px ${brandColor}44; }
          50% { box-shadow: 0 4px 25px ${brandColor}88; }
          100% { box-shadow: 0 4px 15px ${brandColor}44; }
        }

        #${uid} .sidebar-container:hover .sidebar-cta {
          background: #fff;
          color: #000;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(255,255,255,0.4);
          animation: none;
        }

        #${uid} .sidebar-trustpilot {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          opacity: 0.8;
        }

        #${uid} .tp-label { font-size: 0.55rem; color: #fff; font-weight: 700; }
        #${uid} .tp-stars { display: flex; gap: 2px; }
        #${uid} .tp-star { width: 12px; height: 12px; background: #00b67a; border-radius: 1px; display: flex; align-items: center; justify-content: center; font-size: 8px; color: white; }

        @keyframes sidebar-slide-${uid} {
${keyframes}
        }

        @media screen and (max-width: 1390px) {
          #${uid}.changenow-sidebar { display: none !important; }
        }
      </style>
      
      <div class="changenow-sidebar ${position}" id="${uid}">
        <a href="${referralUrl}" target="_blank" class="sidebar-container">
          <div class="sidebar-carousel">
            <div class="sidebar-slides">
              ${slideImages
                .map(
                  (url, i) => `
                <div class="sidebar-slide-item">
                  <img src="${url}" alt="Slide ${i + 1}" data-retries="0" loading="lazy">
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
          <div class="sidebar-content">
            <div>
              <div class="sidebar-title">${brandName}</div>
              <div class="sidebar-desc" data-i18n="${isBinance ? "ad_binance_desc" : "ad_changenow_desc"}">${desc}</div>
            </div>
            
            <div class="sidebar-trustpilot">
              <div class="tp-label">Trustpilot Excellent</div>
              <div class="tp-stars">
                <div class="tp-star">★</div><div class="tp-star">★</div><div class="tp-star">★</div><div class="tp-star">★</div><div class="tp-star">★</div>
              </div>
            </div>
            
            <div class="sidebar-cta" data-i18n="${isBinance ? "ad_binance_cta" : "ad_changenow_cta"}">${cta}</div>
          </div>
        </a>
      </div>
    `;

    window.AdManager.initImageFallback(
      this,
      brandName,
      brandColor,
      ".sidebar-slide-item",
    );
    if (typeof updatePageTranslations === "function") updatePageTranslations();
  }
}

customElements.define("ad-sidebar", AdSidebar);
