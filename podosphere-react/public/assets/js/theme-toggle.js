// Centralized theme toggle script
// Sets data-theme on <html> and <body>, toggles legacy .theme-dark class,
// and persists preference to localStorage.
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    bodyEl.setAttribute("data-theme", theme);
    if (theme === "dark") {
      bodyEl.classList.add("theme-dark");
    } else {
      bodyEl.classList.remove("theme-dark");
    }
  }

  // Initialize from localStorage (or default to light)
  const currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);

  if (toggle) {
    toggle.checked = currentTheme === "dark";

    toggle.addEventListener("change", function () {
      if (this.checked) {
        applyTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        applyTheme("light");
        localStorage.setItem("theme", "light");
      }
    });
  }
});
