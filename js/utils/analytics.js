// Google Analytics
const gtagScript = document.createElement("script");
gtagScript.async = true;
gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-8BEV08G411";
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-8BEV08G411");

// Microsoft Clarity
(function (c, l, a, r, i, t, y) {
  c[a] =
    c[a] ||
    function () {
      (c[a].q = c[a].q || []).push(arguments);
    };
  t = l.createElement(r);
  t.async = 1;
  t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0];
  y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "wk8ijauiyj");
