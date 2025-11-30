// JavaScript Document
console.log("hi");

/******************************/
/* hamburgermenu openen de MENU button */
/******************************/

// stap 1: zoek de menu-button op en sla die op in een variabele
const menuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = openMenu

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  // alert("he")
  deNav.classList.add("toonMenu")
}




/************************************/
/* hamburgermenu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
const sluitButton = document.querySelector("header nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  // alert("he")
  deNav.classList.remove("toonMenu")
}

