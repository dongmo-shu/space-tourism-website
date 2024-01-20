/* navigating through the numbers changing divs visibility*/

const button1 = document.getElementsByClassName("button-1");

const button2 = document.getElementsByClassName("button-2");
const button3 = document.getElementsByClassName("button-3");
const button1Text = document.getElementsByClassName("button-press-1")[0].style;
const button2Text = document.getElementsByClassName("button-press-2")[0].style;
const button3Text = document.getElementsByClassName("button-press-3")[0].style;
const button1Style = document.getElementsByClassName("button-1")[0].style;
const button2Style = document.getElementsByClassName("button-2")[0].style;
const button3Style = document.getElementsByClassName("button-3")[0].style;

const button1Transparent = () => {
  button1Style.background = "transparent";
  button1Style.color = "white";
};
const button2Transparent = () => {
  button2Style.background = "transparent";
  button2Style.color = "white";
};
const button3Transparent = () => {
  button3Style.background = "transparent";
  button3Style.color = "white";
};
const button1Highlighted = () => {
  button1Style.background = "white";
  button1Style.color = "black";
};
const button2Highlighted = () => {
  button2Style.background = "white";
  button2Style.color = "black";
};
const button3Highlighted = () => {
  button3Style.background = "white";
  button3Style.color = "black";
};

button1[0].addEventListener("click", () => {
  button1Text.visibility = "visible";
  button1Highlighted();
  button2Text.visibility = "hidden";
  button2Transparent();
  button3Text.visibility = "hidden";
  button3Transparent();
});
button2[0].addEventListener("click", () => {
  button1Text.visibility = "hidden";
  button1Transparent();
  button2Text.visibility = "visible";
  button2Highlighted();
  button3Text.visibility = "hidden";
  button3Transparent();
});

button3[0].addEventListener("click", () => {
  button1Text.visibility = "hidden";
  button1Transparent();
  button2Text.visibility = "hidden";
  button2Transparent();
  button3Text.visibility = "visible";
  button3Highlighted();
});
