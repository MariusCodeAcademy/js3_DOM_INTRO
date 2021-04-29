"use strict"; // here we go again

const ul = document.querySelector(".main-list");

// innerHTML = perrasom visa vidine struktura, negeriausias
//sprendimas didelioms strukturoms, ir jei reikia tureti nuorodas i el
ul.innerHTML = generateList();
// ul.innerHTML += "<li>List item 2</li>";

function generateList() {
  let liListString = "";
  for (let i = 1; i <= 10; i++) {
    liListString += `<li>List item ${i}</li>`;
  }
  return liListString;
}
// insertAdjacentHTML(position, text); - ikelia texta kaip html ir nepergeneruotja html is naujo
ul.insertAdjacentHTML("beforeend", "<li>List item adjasent</li>");

// bandom ikelti pranesima po inputu
const inputContainerEl = document.querySelector(".input-container");
// inputContainerEl.innerHTML += "<p> svarbus pranesimas </p>";
inputContainerEl.insertAdjacentHTML("beforeend", "<p> svarbus pranesimas </p>"); // generuojam tik nauja texta

// pakeisti h1
const h1El = document.querySelector("h1");
h1El.innerText = "<em>create</em>HTML"; // negeneruoja zymu is teksto
h1El.textContent = "<em>create</em>HTML"; // negeneruoja zymu is teksto

h1El.innerHTML = "<em>create</em>HTML"; // generuoja html zymas

// pakeisti dinamiskai sukurto li el raides i diziasias
const lastDLi = ul.lastElementChild;
lastDLi.style.textTransform = "uppercase";
