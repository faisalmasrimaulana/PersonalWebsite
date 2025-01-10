// animasi typing
let i = 0;
let charHome = $(".type u");
let border = $(".border")
let oneCharHome = charHome.text();
let speed = 50;
charHome.text("");
function typingHome() {

  if (i < oneCharHome.length) {
    charHome.html(charHome.html() + oneCharHome.charAt(i));
    i++;
    setTimeout(typingHome, speed);
  }
}

typingHome();
charHome.addClass("animationBlinkLine");

// if (i == oneCharHome.length) {
//   border.addClass("borderNeon");
// }

