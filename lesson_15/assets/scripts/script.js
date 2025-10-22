// (function () {
//   const btn = document.querySelector(".nav-toggle");
//   const modal = document.getElementById("mobile-nav");

//   function open() {
//     modal.hidden = false;
//     btn.setAttribute("aria-expanded", "true");
//     document.body.style.overflow = "hidden";
//   }
//   function close() {
//     modal.hidden = true;
//     btn.setAttribute("aria-expanded", "false");
//     document.body.style.overflow = "";
//   }

//   btn.addEventListener("click", open);
//   modal.addEventListener("click", (e) => {
//     if (e.target.hasAttribute("data-close")) close();
//   });

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".nav-toggle");
  const modal = document.getElementById("mobile-nav");

  const openMenu = () => {
    modal.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    modal.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  // Open on hamburger click
  if (btn) {
    btn.addEventListener("click", openMenu);
  }

  // Close on any element with data-close
  modal?.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) {
      closeMenu();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) {
      closeMenu();
    }
  });
});
