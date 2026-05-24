(function () {
  const STORAGE_KEY = "kria-theme";

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function getStoredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return null;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    const isDark = theme === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  function initTheme() {
    const theme = getStoredTheme() || getSystemTheme();
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleButton(theme);
  }

  function bindToggle() {
    document.addEventListener("click", function (e) {
      const btn = e.target.closest("#theme-toggle");
      if (!btn) return;
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  window.kriaSyncThemeToggle = function () {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    updateToggleButton(theme);
  };

  initTheme();
  bindToggle();

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(window.kriaSyncThemeToggle, 0);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
})();
