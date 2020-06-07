const nav_bar = document.querySelector("nav");
const nav_links = document.getElementsByClassName("nav-link");

window.onscroll = function () {
  shrinkOnScroll();
};

function shrinkOnScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav_bar.style.backgroundColor = "white";
    nav_bar.style.color = "black";
    nav_bar.style.padding = "10px";
    nav_bar.style.borderBottom = "1px solid black";

    for (let i = 0; i < nav_links.length; i++) {
      nav_links[i].style.color = "green";
    }
  } else {
    nav_bar.style.backgroundColor = "black";
    nav_bar.style.padding = "20px";
    nav_bar.style.color = "white";
    nav_bar.style.height = "10%";

    for (let i = 0; i < nav_links.length; i++) {
      nav_links[i].style.color = "white";
    }
  }
}

for (let i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.classList.add("active");
  });
}
