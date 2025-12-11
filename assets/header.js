// assets/header.js (v2)
// Shared header/banner for all ProfitPlate v2 pages with accessible icons

(function () {
  function ensureHeaderStyles() {
    if (document.getElementById("pp-header-style-v2")) return;

    const css = ``;
    // Styles are defined in assets/styles.css, so we don't need inline CSS here.
    const style = document.createElement("style");
    style.id = "pp-header-style-v2";
    style.textContent = css;
    document.head.appendChild(style);
  }

    /**
     * Render the shared header into #site-header and highlight the active page.
     * @param {string} activePage - one of "home", "purchases", "recipes", "settings".
     */
  function renderHeader(activePage) {
    ensureHeaderStyles();
    const host = document.getElementById("site-header");
    if (!host) return;
    host.innerHTML = `
<header>
  <div class="header-inner">
    <div class="hero-banner">
      <div class="hero-icons"><span role="img" aria-label="scales">⚖️</span></div>
      <div class="hero-title-block">
        <div class="hero-title-banner">PROFITPLATE</div>
        <div class="hero-subtitle-banner">Know your profit per plate.</div>
      </div>
      <div class="hero-icons"><span role="img" aria-label="meat">🥩</span></div>
    </div>
    <nav>
      <ul class="nav-list">
        <li><a class="nav-link" data-page="home" href="index.html">Home</a></li>
        <li><a class="nav-link" data-page="purchases" href="purchases.html">Purchases</a></li>
        <li><a class="nav-link" data-page="recipes" href="recipes.html">Recipes</a></li>
        <li><a class="nav-link" data-page="settings" href="settings.html">Settings</a></li>
      </ul>
    </nav>
  </div>
</header>
    `;
    host.querySelectorAll(".nav-link").forEach((link) => {
      const page = link.getAttribute("data-page");
      if (page === activePage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Expose renderHeader globally
  window.renderHeader = renderHeader;
})();