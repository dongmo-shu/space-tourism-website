const links = document.querySelectorAll(".navigation li");
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let description = document.querySelector(".description");
let distance = document.querySelector(".distance");
let travel = document.querySelector(".travel");
let element = [];

fetch("../data.json")
.then((res) => res.json())
.then((data) => {
  for (let i = 0; i < data.destinations.length; i++) {
    elements.push(data.destinations[i]);
  }
});