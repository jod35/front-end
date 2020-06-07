const nav_bar = document.querySelector(".nav");
const buttons = document.getElementsByClassName("btn");

window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    nav_bar.style.padding = "2%";
  } else {
    nav_bar.style.padding = "5%";
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace("active", "");

    this.className += "active";
  });
}
