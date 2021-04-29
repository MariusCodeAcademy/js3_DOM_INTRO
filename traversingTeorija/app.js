"use strict"; // here we go again

console.log("traverse");

const ulEl = document.querySelector("ul");
const firstLi = document.querySelector("ul li:first-of-type");

// kryptis zemyn arba is tevinio el link vaikiniu
console.log(ulEl.children); // element nodes
// console.log(ulEl.childNodes); // all nodes
ulEl.children[1].style.color = "coral";

// console.log("ulEl.firstElementChild", ulEl.firstElementChild); // grazina elementa
// console.log("ulEl.firstChild", ulEl.firstChild); // grazina nodes - text

// console.log("ulEl.lastElementChild", ulEl.lastElementChild); // grazina elementa
// console.log("ulEl.lastChild", ulEl.lastChild); // grazina nodes - text

// kryptis aukstyn is vaikinio el link tevinio =======================
const paskLiEl = ulEl.lastElementChild;
console.log(paskLiEl);

// pasiekti tevini ul el
console.log("tevas", paskLiEl.parentElement);
console.log("tevo tevas", paskLiEl.parentElement.parentElement);

// closest() - iesko artimiausio tevinio el
console.log('paskLiEl.closest("body")', paskLiEl.closest("body"));
console.log('paskLiEl.closest("article")', paskLiEl.closest("article"));
console.log('paskLiEl.closest("header")', paskLiEl.closest("header")); // null
console.clear();
// kryptis tame paciame lygyje (kaire desine)
//
const headerEl = document.querySelector("header");

// po hederiu esantis el
let saliaHederioUz = headerEl.nextElementSibling;
console.log(saliaHederioUz);

// pries esantis el
let priesHeaderi = headerEl.previousElementSibling;
console.log(priesHeaderi);
priesHeaderi.textContent = "Dynamic title";
