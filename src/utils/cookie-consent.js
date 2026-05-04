// Cookie Consent Logic
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookieConsent")) {
    const overlay = document.createElement("div");
    overlay.className = "cookie-overlay";
    
    const banner = document.createElement("div");
    banner.className = "cookie-consent";
    banner.innerHTML = `
      <h3 data-i18n="cookie_title" style="margin-bottom: 5px; font-size: 1.3rem;">Zgoda na pliki cookies</h3>
      <p style="font-size: 0.95rem; margin-bottom: 20px;">
        <span data-i18n="cookie_desc">Korzystając z tej strony, wyrażasz zgodę na używanie plików cookies do celów prawidłowego działania narzędzia oraz statystyk.<br/><br/><a href="privacy-policy.html" style="text-decoration: underline;">Polityka Prywatności</a></span>
      </p>
      <div class="cookie-buttons">
        <button class="cookie-consent-btn decline" id="decline-cookies"><span data-i18n="cookie_decline">Nie zgadzam się</span></button>
        <button class="cookie-consent-btn" id="accept-cookies"><span data-i18n="cookie_accept">Jestem tego świadomy</span></button>
      </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(banner);
    
    // Disable body scroll when modal is active
    document.body.style.overflow = "hidden";

    // If i18n is defined, translate the dynamically added banner:
    if (typeof updatePageTranslations === 'function') {
      updatePageTranslations();
    }

    setTimeout(() => {
      overlay.classList.add("show");
      banner.classList.add("show");
    }, 500);

    document.getElementById("accept-cookies").addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      overlay.classList.remove("show");
      banner.classList.remove("show");
      document.body.style.overflow = ""; // restore scroll
      setTimeout(() => {
        overlay.remove();
        banner.remove();
      }, 400);
    });
    
    document.getElementById("decline-cookies").addEventListener("click", function () {
      if (confirm("Zostaniesz przeniesiony do google.com. Chcesz kontynuować?")) {
          window.location.href = "https://google.com";
      }
    });
  }
});
