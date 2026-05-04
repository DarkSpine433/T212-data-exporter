if (!window.adDistribution) {
  const sidebarAds = ["changenow", "binance"];
  if (Math.random() > 0.5) sidebarAds.reverse();
  const remainingAds = [
    "changenow",
    "binance",
    Math.random() > 0.5 ? "changenow" : "binance",
  ];
  for (let i = remainingAds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remainingAds[i], remainingAds[j]] = [remainingAds[j], remainingAds[i]];
  }
  window.adDistribution = [...sidebarAds, ...remainingAds];
  window.adSlotCounter = 0;
}

window.AdManager = {
  getAdConfig() {
    const adType =
      window.adDistribution[
        window.adSlotCounter++ % window.adDistribution.length
      ];
    const isBinance = adType === "binance";

    return {
      type: adType,
      isBinance,
      brandName: isBinance ? "Binance" : "ChangeNOW",
      brandColor: isBinance ? "#F3BA2F" : "#00d37d",
      brandColorMuted: isBinance ? "#F3BA2F22" : "#00d37d22",
      referralUrl: isBinance
        ? "https://www.binance.com/register?ref=447596469"
        : "https://changenow.app.link/referral?link_id=d44fa5f660270a",
      brandGradient: isBinance
        ? "linear-gradient(135deg, #F3BA2F 0%, #FFD700 100%)"
        : "linear-gradient(135deg, #00d37d 0%, #00ffa3 100%)",
      images: isBinance
        ? [
            "https://play-lh.googleusercontent.com/2Ktk3USnDoPNL1vdffC4c8EjxXlxYllr5kB5mEkOxgsAXWAJyKcl-2tAHIUz9Sxz41E=w2560-h1440",
            "https://play-lh.googleusercontent.com/-mbE5gjC7uV6It6bAVHp_AOMaLYKUL_HgyFFO-lAxmiPpYDWGoZw3iz83zO_Aq01eFA=w2560-h1440",
            "https://play-lh.googleusercontent.com/ERI6bfO-8UT5jQ3jUN9H3kmDmfDB0fZ0kBnt9AWU-tfJ-5X0lJ1PbwvYwM51rUNGrg=w2560-h1440",
            "https://play-lh.googleusercontent.com/BO2N9oWtQJXHhD-o_Icy7rMNbKfyZXC4ZuzvJeytURVv_EquHtv_f4DvrD-Jj6RtRI4=w2560-h1440",
            "https://play-lh.googleusercontent.com/HJGgF0B4UjFItP5p3bOO4F_QtYkuVTYfAG_dccJ5bzcrvEi2gbBWp8JePRZm8jDz75A=w2560-h1440",
            "https://play-lh.googleusercontent.com/GK6skwR-VZpUdL1JCq1f8pJvnlyur-8UlDHfi3MqF05XZOQONFGLj2pP5n2_4RWc2V8=w2560-h1440",
            "https://play-lh.googleusercontent.com/PtZimEqecxwHB8vsB9qyvYr76qT5M5qI5APZ6HVO5d1teEJeGcu8J924xWMesv-CKG4F=w2560-h1440",
            "https://play-lh.googleusercontent.com/FzphStRmiTDQfysxqgbSG6BXs3ndY2tlmJXMAUTdT65J8GRn0Cq3_ki89G6wlsEE6Q=w2560-h1440",
          ]
        : [
            "https://play-lh.googleusercontent.com/D_HTcFNtaB_AVLblScXXN6npTKiZWdRtlusobJ9NMcrmenSin_kyvvBYxo3mbFciRe2I=w2560-h1440",
            "https://play-lh.googleusercontent.com/9NVWFm7AWagvGwYzbbyDFZYyhPAvtbSMqr9pyqLxSvCjfqeOiqqgt2tSExMl5ZkCbHk=w2560-h1440",
            "https://play-lh.googleusercontent.com/5SMUKDZ_vruAAMcqBbAF8qDba8pRX9HSYfLnsB_c_pKp-pc29BX8a_MfT8Ksilnbtg=w2560-h1440",
            "https://play-lh.googleusercontent.com/vYLbv4IfIwOG7rrCfVryhqc5zhRV_dL0e3LYtaU0YqnPuLG10gkSydrSGWAai1VNbQ=w2560-h1440",
            "https://play-lh.googleusercontent.com/oOpz4DMNa9RMlacxFBIHMicjX3dP0JzpGevn2aPGGo8JI3ABBdSuVUgHwdJDyKs0Uf8=w2560-h1440",
            "https://play-lh.googleusercontent.com/HLzQYim18XexFh-_2J5QoMKngzpZzocHNTG2jpNXY6qEmriU8WjM3rfutmIue2K8yJI=w2560-h1440",
            "https://play-lh.googleusercontent.com/ZnhBG6VhMlnAhGROIL-_2tXwUZ-TzHc_0vQXsaSA2XMlSho6UHnWGd58vNqfZtM8HA=w2560-h1440",
          ],
    };
  },

  initImageFallback(container, brandName, brandColor, fallbackSelector) {
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      img.onerror = () => {
        let retries = parseInt(img.getAttribute("data-retries")) || 0;
        if (retries < 3) {
          img.setAttribute("data-retries", retries + 1);
          setTimeout(
            () => {
              const currentSrc = img.src.split("?")[0];
              img.src = `${currentSrc}?retry=${Date.now()}`;
            },
            (retries + 1) * 3000,
          );
        } else {
          const slideItem = img.closest(fallbackSelector);
          if (slideItem) {
            slideItem.innerHTML = this.getFallbackUI(brandName, brandColor);
          }
        }
      };
    });
  },

  getFallbackUI(brandName, brandColor) {
    const isBinance = brandName === "Binance";
    return `
      <div class="fallback-ui-wrapper" style="
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
      ">
        <div class="fallback-icon" style="font-size: 2.5rem; color: ${brandColor}; text-shadow: 0 0 10px ${brandColor}44;">
          ${isBinance ? "₿" : "⚡"}
        </div>
        <div class="fallback-text" style="font-weight: 800; font-size: 1rem; color: #fff; text-transform: uppercase;">
          ${brandName}
        </div>
      </div>
    `;
  },
};
