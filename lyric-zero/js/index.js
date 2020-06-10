const nav_bar = document.querySelector("header");
const nav_bar_items = document.getElementsByClassName("nav-bar-item");
const hamburger_menu_icon = document.querySelector(".mobile-nav");
const mobile_nav = document.querySelector(".mobile-div");

window.onscroll = function () {
  shrinkOnScroll();
};

function shrinkOnScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav_bar.style.padding = "10px";
    nav_bar.style.backgroundColor = "dodgerblue";
    nav_bar.style.color = "white";

    for (let i = 0; i < nav_bar_items.length; i++) {
      nav_bar_items[i].style.color = "white";
      //   nav_bar_items[i].style.fontWeight = "bold";
    }
  } else {
    nav_bar.style.color = "dodgerblue";
    nav_bar.style.backgroundColor = "white";
    nav_bar.style.padding = "20px";

    for (let i = 0; i < nav_bar_items.length; i++) {
      nav_bar_items[i].style.color = "dodgerblue";
      //   nav_bar_items[i].style.fontWeight = "bold";
    }
  }
}

hamburger_menu_icon.addEventListener("click", displayMobileNav);

function displayMobileNav() {
  mobile_nav.style.display = "block";
}
