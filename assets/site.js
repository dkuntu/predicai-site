// assets/site.js

(function () {
  // Print handler (CSP-safe: no inline onclick)
  const printBtn = document.querySelector("[data-print]");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      // iOS Safari requires this to be triggered by a user gesture (this is).
      window.print();
    });
  }

  // Simple dropdown support
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  dropdowns.forEach((dd) => {
    const btn = dd.querySelector("button");
    if (!btn) return;

    const close = () => {
      dd.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    };

    const open = () => {
      dd.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.contains("open");
      if (isOpen) close();
      else open();
    });

    // Click outside closes
    document.addEventListener("click", () => close());

    // ESC closes
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  });
})();
