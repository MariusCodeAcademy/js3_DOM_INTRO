"use strict"; // here we go again

console.log("class");

const ul = document.querySelector("ul");

// ul.style.backgroundColor = "green";
// ul.className = "";

function toggleUlVisibility() {
  //   if (ul.className === "bg-tomato hide") {
  //     ul.className = "bg-tomato";
  //   } else {
  //     ul.className = "bg-tomato hide";
  //   }

  // classList ojekta darbui su klasem
  //   ul.classList.toggle("hide");
  ul.classList.add("testing");
  //   ul.classList.remove("test2");
  //   ul.classList.replace("test2", "test17");
  if (ul.classList.contains("test2")) {
    console.log("Yest there is test2 class");
  } else {
    console.log("test2 class not found");
  }
}
