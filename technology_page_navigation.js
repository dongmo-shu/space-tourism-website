document
  .getElementsByClassName("button-press-2")
  .addEventListener("click", () => {
    document.getElementsByClassName("button-press-1")[0].style.visibility =
      "visible";
    document.getElementsByClassName("button-press-2")[0].style.visibility =
      "hidden";
    document.getElementsByClassName("button-press-3")[0].style.visibility =
      "hidden";
  });
