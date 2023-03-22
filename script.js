let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

let cal = Array.from(buttons);
cal.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText == "=") {
      string = eval(string);
      input.value = string;
    } else if (buttonText == "AC") {
      string = "";
      input.value = string;
    } else if (buttonText == "C") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += buttonText;
      input.value = string;
    }
  });
});
