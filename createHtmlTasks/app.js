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

// 3. dive '#app' sukurti section elementa i ji ideti h4 elementa ir paragrafa su
// lorem tekstais

// 4. is duoto masyvo sugeneruoti li elementus ir sudeti juo is 'item-list'
// sarasa
let colors = ["blue", "green", "orange", "tomato", "red"];

// 5. .main-article elementui prideti antraste h4 su klase
// '.main-article__title'

// 5.1 .main-article elementui prideti 2 paragrafus su lorem tekstais kurie turetu klases
// '.main-article__text'

// 6. po main-article sukurti aside elmenta su klase 'info'
// jame sukurti nav elementa. nav elemente sugeneruoti nuorodu sarasa
// su nuorodom vedandciom i about.html, contact.html, home.html

// 7. po aside.info el suskurti div su klase modal
// modal viduje sukurti h2 antraste su tekstu 0
// ir 2 mygtukus
// vienas mygtukas butu add
// kitas subtract
// jie turetu padidinti ir pamazinti h2 antrastes skaitliuka
// aprasyti .modal klase stiliaus faile taip kad jis butu nematomas
// ekrano centre 20 x 20 proc ekrano dydzio
// turetu juoda apvada ir butu centruotas ekravo viduryje

// 8.sukurti mygtuka headeryje su tekstu 'modal', ji paspaudus turetu pasirodyti
// arba pasislepti modal. (prideti nuimti klase? )

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
