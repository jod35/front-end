const touch_buttons = document.querySelectorAll(".box-number");

const screentext = document.querySelector(".screen-text");
const screen_nums = document.querySelector(".screen-nums");
const del_button = document.querySelector(".cancel");

for (let i = 0; i < touch_buttons.length; i++) {
  touch_buttons[i].addEventListener("click", () => {
    touch_buttons[i].classList.add("active");
    screentext.style.display = "none";
    screen_nums.innerHTML += touch_buttons[i].innerText;

    // console.log(typeof screen_nums.innerText);
  });
}

del_button.addEventListener("click", () => {
  for (let i = 0; i < screen_nums.innerText.length; i++) {
    screen_nums.innerText;
    ft;
  }
});
