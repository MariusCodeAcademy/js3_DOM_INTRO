"use strict"; // here we go again

// 1. pakeisti Pagr antrastes teksta
const mainTitleEl = document.querySelector("h1");
console.dir(mainTitleEl);
mainTitleEl.textContent = "I have done Task number 1";

// 2. pakeisti parg antrastes spalva
mainTitleEl.style.color = "Tomato";
// mainTitleEl.style.fontSize = "50px";
// mainTitleEl.style["font-size"] = "50px";

// 3. prideti pagr antrastei id 'main-title'
mainTitleEl.id = "main-title";

// 4. prideti article clase
const art1 = document.querySelector("article");
art1.className = "main-article";

// 5. pakeisti article viduje antrastes texta
const artTitleEl = document.querySelector(".main-article > h2");
console.log("artTitleEl", artTitleEl);
artTitleEl.textContent = "Main artcle title";

// 6. pakeisti article paragrafu teksto dydi i 20px
const pInsideArt = art1.querySelectorAll("p");
console.log(pInsideArt);
// sukam cikla nes turim i masyva panasia struktura
pInsideArt.forEach((p) => (p.style.fontSize = "20px"));

// 7 prie esamos Pagr antrastes prideti teksta '(pakeista)'
const dabartinisTextas = mainTitleEl.textContent;
// mainTitleEl.textContent = dabartinisTextas + " (pakeista)";
mainTitleEl.textContent += " (pakeista)";

// 8 pakeisti paskutinio article paragrafo texto srifta i Verdana

// 9. padaryti kad tik tiesioginiai article paragrafai butu 25px dydzio
const ptiesiogArtVaikai = document.querySelectorAll(".main-article > p");
console.log("ptiesiogArtVaikai", ptiesiogArtVaikai);

for (let p of ptiesiogArtVaikai) {
  p.style.fontSize = "25px";
  p.style.color = "tomato";
}

// 10. prideti prie aside article vidue clase "inner-aside"
// className
const innerAsideEl = art1.querySelector("aside");
innerAsideEl.className = "inner-aside";

// 11. prideti prie aside nesancios article viduej klase 'main-aside'

// 12. padaryti kad visi main-aside el butu 18to dydzio ir melynos spalvos

// 13. prideti visiems some-list li elementams klase 'some-list__element'

// 14. nuimti some list elementams burbuliukus nuo kaires puses

// 15. apjuosti some list elmenta su 2px apvadu kurio kampai butu apvalnti ir uzdeti padingo 15px is visu pusiu

// 16. antro ul saraso li elementams uzdeti didejanti id 'el_1', 'el_2', 'el_3' ir tt

// 17. suskaiciuoti kiek is viso puslapyje yra li el

// 18. prie antro ul saraso elementu teksto prideti skaicius didejancius nuo 55

// 19. parasyti funkcija kuri padidina pagr antrastes dydi 7px

// 20. parasyti funkcija kuri sumazina pagr antrastes dydi 7px

// 21. parasyti funkcija kuri nustato parg antrastes dydi i nustatytaja reiksme

// 22. padaryti funkciju pagalba kad galetume didinti ir mazinti skaitliuka vienetu
// pan kaip 19-21 uzd
