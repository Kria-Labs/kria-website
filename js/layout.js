(function () {
  const links =
    typeof KRIA_LINKS !== "undefined"
      ? KRIA_LINKS
      : {
          org: "#",
          lang: "#",
          vscode: "#",
          kpm: "#",
          website: "#",
        };

  const navItems = [
    { href: "/index.html", label: "Home", id: "index" },
    { href: "/docs.html", label: "Docs", id: "docs" },
    { href: "/playground.html", label: "Playground", id: "playground" },
    { href: "/kpm.html", label: "KPM", id: "kpm" },
    { href: "/about.html", label: "About", id: "about" },
  ];

  function navLinks(className) {
    return navItems
      .map(
        (item) =>
          `<a href="${item.href}" class="nav-link ${className}" data-nav="${item.id}">${item.label}</a>`
      )
      .join("");
  }

  const headerHtml = `
    <a href="#main-content" class="skip-link">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a href="/index.html" class="logo">
          <img src="/assets/kria-ico.png" alt="" class="logo-img" width="28" height="28">
          <span class="logo-text">Kria</span>
        </a>
        <nav class="nav-desktop" aria-label="Main navigation">
          ${navLinks("")}
        </nav>
        <div class="header-actions">
          <button type="button" id="theme-toggle" class="theme-toggle" aria-pressed="false" aria-label="Switch to dark theme">
            <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
            <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="nav-mobile" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav id="nav-mobile" class="nav-mobile" aria-label="Mobile navigation">
        ${navLinks("")}
      </nav>
    </header>
  `;

  const footerHtml = `
    <footer class="site-footer">
      <div class="footer-inner">
        <p class="footer-copy">&copy; 2026 <a href="${links.org}" target="_blank" rel="noopener noreferrer">Kria Labs</a>. MIT License.</p>
        <ul class="footer-links">
          <li><a href="${links.lang}" target="_blank" rel="noopener noreferrer">kria-lang</a></li>
          <li><a href="${links.vscode}" target="_blank" rel="noopener noreferrer">VS Code</a></li>
          <li><a href="${links.kpm}" target="_blank" rel="noopener noreferrer">KPM</a></li>
          <li><a href="/docs.html">Docs</a></li>
          <li><a href="${links.website}" target="_blank" rel="noopener noreferrer">Site source</a></li>
        </ul>
      </div>
    </footer>
  `;

  function setActiveNav() {
    const page = document.body.getAttribute("data-page");
    if (!page) return;
    document.querySelectorAll(`[data-nav="${page}"]`).forEach((link) => {
      link.classList.add("active");
    });
  }

  function injectLayout() {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(fontLink);

    document.body.insertAdjacentHTML("afterbegin", headerHtml);
    document.body.insertAdjacentHTML("beforeend", footerHtml);
    setActiveNav();
    if (typeof window.kriaSyncThemeToggle === "function") {
      window.kriaSyncThemeToggle();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectLayout);
  } else {
    injectLayout();
  }
})();
