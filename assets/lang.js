// assets/lang.js – simple internationalisation support for ProfitPlate v2
// Define translations for supported languages and apply them based on settings.
(function () {
  const translations = {
    en: {
      nav_home: "Home",
      nav_purchases: "Purchases",
      nav_recipes: "Recipes",
      nav_settings: "Settings",
      hero_subtitle: "Know your profit per plate.",
      home_headline: "Stop guessing. Know your dish cost.",
      purchases_title: "Purchases",
      recipes_title: "Recipes",
      settings_title: "Settings",
      settings_general: "General",
      settings_behaviour: "Behaviour",
      settings_data: "Data & Local Storage",
    },
    ro: {
      nav_home: "Acasă",
      nav_purchases: "Achiziții",
      nav_recipes: "Rețete",
      nav_settings: "Setări",
      hero_subtitle: "Află profitul pe porție.",
      home_headline: "Nu mai ghici. Află costul felului.",
      purchases_title: "Achiziții",
      recipes_title: "Rețete",
      settings_title: "Setări",
      settings_general: "General",
      settings_behaviour: "Comportament",
      settings_data: "Date & Stocare locală",
    },
  };

  /**
   * Apply translations to all elements with a data‑i18n attribute.
   * If a translation is missing for the selected language, the key
   * remains unchanged.
   */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
        el.textContent = dict[key];
      }
    });
  }
  /**
   * Read the current language from settings (via loadSettings) and
   * apply translations. If loadSettings is not available, defaults to English.
   */
  function translatePage() {
    let lang = 'en';
    if (typeof window.loadSettings === 'function') {
      const settings = window.loadSettings();
      if (settings && settings.language) {
        lang = settings.language;
      }
    }
    applyLanguage(lang);
  }
  // Expose globally
  window.translatePage = translatePage;
})();