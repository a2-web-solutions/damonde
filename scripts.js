
const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuToggle.classList.toggle("active", open);
  document.body.classList.toggle("menu-open", open);

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "メニューを閉じる" : "メニューを開く"
  );
}

menuToggle.addEventListener("click", () => {
  setMenu(!nav.classList.contains("open"));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    setMenu(false);
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    setMenu(false);
  }
});

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();
