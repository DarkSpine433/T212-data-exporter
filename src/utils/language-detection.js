/**
 * Detects the system language and returns 'pl' if it's Polish, otherwise 'en'.
 * @returns {string} 'pl' or 'en'
 */
export function getSystemLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang && lang.toLowerCase().startsWith("pl")) return "pl";
  return "en";
}

if (typeof window !== "undefined") {
  window.getSystemLanguage = getSystemLanguage;
}
