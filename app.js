"use strict"; // here we go again

// norim pasizymeti elementa
document.querySelector(".sec-title").textContent = "DInamisai pakeista antraste";
// 1. issisaugom nuoroda i norima html el
const h2 = document.querySelector(".sec-title");
// 2. keiciam texkta
h2.textContent = "what";
// 3. keiciam stiliu
// h2.style.color = "tomato";
// h2.style.backgroundColor = "black";

// paeisti pagrindine antraste
// querySelector - argumentas toks pat kai css, grazina pirma sutika el
// const mainTitleEl = document.querySelector("#main-title");
// getElementById - argumentu paduodam id pavadinima
// const mainTitleEl = document.getElementById("main-title");
// getElementsByTagName,getElementsByClassName mes gaunam
// i masyva panasia struktura su visai elementai atitinkanciai argumenta
const mainTitleEl = document.getElementsByTagName("p");
const artTextEls1 = document.getElementsByClassName("article-text");
console.log("mainTitleEl:", mainTitleEl);
console.log("artTextEls1:", artTextEls1);
// .querySelectorAll - grazina node list i masyva panasia struktura
const artTextEls = document.querySelectorAll(".article-text");
console.log("artTextEls:", artTextEls);

mainTitleEl.textContent = "Dynamic DOM Title";
console.clear();
// pazymeti visus paragrafus esancius straipsnyje ir pakeisti ju spalva
// ir kad jie butu visi didziosiom raidem

const pInsideArtcl = document.querySelectorAll("article p");

// pInsideArtcl[0].style.color = "tomato";
// pInsideArtcl[1].style.color = "tomato";
// pInsideArtcl[2].style.color = "tomato";

// pInsideArtcl.forEach((p) => {
//   p.style.color = "tomato";
//   p.style.textTransform = "uppercase";
// });

for (let p of pInsideArtcl) {
  p.style.color = "tomato";
  p.style.textTransform = "uppercase";
}

console.log("pInsideArtcl", pInsideArtcl);
