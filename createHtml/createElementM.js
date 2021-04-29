"use strict"; // here we go again

console.log("create");

const ul = document.querySelector(".main-list");

// sukurti li el
// createElement(tag) - sukuria nauja el ir grazina nuoroda i ji
const newLi = document.createElement("li");
newLi.textContent = "I am dynamic";
ul.appendChild(newLi);

for (let i = 0; i < 5; i++) {
  let nLi = document.createElement("li");
  nLi.textContent = "item_" + i;
  ul.appendChild(nLi); // palakomas visur
  ul.append(nLi); // daro ta pati bet IE nepalaiko
}
// ikelti newLi i pries paskutine viena ul sarase
ul.lastElementChild.before(newLi);

const nli2 = document.createElement("li");
nli2.textContent = "Prepend Me";

ul.prepend(nli2);

// jei reikia kad palaikoma butu palaiko visose narsyklese
// ul.insertAdjacentElement(position, el)

ul.children[3].insertAdjacentElement("afterend", nli2);
