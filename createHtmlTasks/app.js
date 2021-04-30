"use strict"; // here we go again

console.log("create tasks");

// 1. sukurti h1 antraste su 'Dynamic page' tekstu virs musu div su Id APP
const h1El = document.createElement("h1");
h1El.textContent = "Dynamic page";

// document.body.prepend(h1El);

const divAppEl = document.getElementById("app");
divAppEl.insertAdjacentElement("beforebegin", h1El);

// 2. sukurti virs h1 headerio elementa ir jame h3 antraste su tekstu
// 'siandienos data' dinamiskai paduota
const now = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const niceDate = now.toLocaleDateString("LT", options);
const nH3 = document.createElement("h3");
nH3.textContent = niceDate;
const headerEl = document.createElement("header");
headerEl.appendChild(nH3);
document.body.prepend(headerEl);

// 3. dive '#app' sukurti section elementa i ji ideti h4 elementa ir paragrafa su
// lorem tekstais

// 4. is duoto masyvo sugeneruoti li elementus ir sudeti juo is 'item-list'
// sarasa
let colors = ["blue", "green", "orange", "tomato", "red"];
// nuoroda i ul el
const ulEl = document.querySelector(".item-list");
console.log(ulEl);

colors.forEach((color) => {
  let newliEl = document.createElement("li");
  newliEl.textContent = color;
  ulEl.appendChild(newliEl);
  // ulEl.appendChild(newliEl);
});

// 5. .main-article elementui prideti antraste h4 su klase
// '.main-article__title'
const mainArticleEl = document.querySelector(".main-article");
const elString = `
  <h4 class='main-article__title'> Main article title </h4>
`;
mainArticleEl.innerHTML = elString;
// eventai paspaudus
mainArticleEl.onclick = function () {
  console.log("click");
};
mainArticleEl.onclick = test;
function test() {
  console.log("test");
}
// 5.1 .main-article elementui prideti 2 paragrafus su lorem tekstais kurie turetu klases
// '.main-article__text'

// 6. po main-article sukurti aside elmenta su klase 'info'
// jame sukurti nav elementa. nav elemente sugeneruoti nuorodu sarasa
// su nuorodom vedandciom i about.html, contact.html, home.html
const asideEl = document.createElement("aside");
const navEl = document.createElement("nav");
asideEl.className = "info";
["about", "contact", "home"].forEach((linkName) => {
  const newLinkEl = document.createElement("a");
  newLinkEl.textContent = linkName;
  newLinkEl.href = linkName + ".html";
  newLinkEl.style.marginRight = "20px";
  navEl.appendChild(newLinkEl);
});
asideEl.appendChild(navEl);
mainArticleEl.after(asideEl);

// 7. po aside.info el suskurti div su klase modal
// modal viduje sukurti h2 antraste su tekstu 0
// ir 2 mygtukus
// vienas mygtukas butu add
// kitas subtract
// jie turetu padidinti ir pamazinti h2 antrastes skaitliuka
// aprasyti .modal klase stiliaus faile taip kad jis butu nematomas
// ekrano centre 20 x 20 proc ekrano dydzio
// turetu juoda apvada ir butu centruotas ekravo viduryje
const modalHtmlText = `
    <div class="modal">
      <h2>0</h2>
      <button>add</button>
      <button>sub</button>
    </div>
`;
asideEl.insertAdjacentHTML("afterend", modalHtmlText);
const modalEl = document.querySelector(".modal");
// 8.sukurti mygtuka headeryje su tekstu 'modal', ji paspaudus turetu pasirodyti
// arba pasislepti modal. (prideti nuimti klase? )
const btnModalEl = document.createElement("button");
btnModalEl.textContent = "Toggle modal";
btnModalEl.onclick = () => {
  modalEl.classList.toggle("visible");
};
headerEl.appendChild(btnModalEl);
// prideti mygtukam eventus
modalEl.children[1].onclick = addHandler;
modalEl.children[2].onclick = subHandler;
let currentCounterEl = modalEl.children[0];
currentCounterEl.style.fontSize = "50px";

function addHandler() {
  console.log("addHandler");
  // issisaugom dabartine reiksme
  let currentValue = currentCounterEl.textContent;
  // irasom padinta reiksme
  currentCounterEl.textContent = ++currentValue;
}
function subHandler() {
  // issisaugom dabartine reiksme
  let currentValue = currentCounterEl.textContent;
  // irasom padinta reiksme
  currentCounterEl.textContent = --currentValue;
}
// 9. sukurti div su id person ir jame atvaizduoti informacija is objekto:
// paragraphu ir span pavidaliu pvz
// <p><strong>Name:</strong>Araranas</p>
// <p><strong>Surname:</strong>Baras</p>
// ...
let person = {
  name: "Arananas",
  surname: "Baras",
  age: 7,
  height: 110,
  weight: 40,
  sex: "male",
};

// 10 po pries body tago uzdaryma sukurti nauja ol sarasa
// kiekvienas jo li el turetu buti vardas ir pavarde is peopleObjs masyvo
// 10.1 kiekvienas li tagas turi tureti title atributa kuriame butu
// to zmogaus svoris ir ugis
const peopleObjs = [
  {
    name: "Arananas",
    surname: "Baras",
    age: 7,
    height: 110,
    weight: 40,
    sex: "male",
  },
  {
    name: "Ugne",
    surname: "Pugne",
    age: 17,
    height: 170,
    weight: 60,
    sex: "female",
  },
  {
    name: "Saulius",
    surname: "Bezda",
    age: 77,
    height: 165,
    weight: 90,
    sex: "male",
  },
  {
    name: "Kentas",
    surname: "Bentas",
    age: 27,
    height: 166,
    weight: 40,
    sex: "male",
  },
  {
    name: "Sauja",
    surname: "Mauja",
    age: 37,
    height: 165,
    weight: 55,
    sex: "female",
  },
  {
    name: "Nojus",
    surname: "Beda",
    age: 39,
    height: 184,
    weight: 92,
    sex: "male",
  },
  {
    name: "Laras",
    surname: "Makaule",
    age: 27,
    height: 192,
    weight: 88,
    sex: "male",
  },
  {
    name: "Fanta",
    surname: "Firtaite",
    age: 17,
    height: 168,
    weight: 75,
    sex: "female",
  },
];
