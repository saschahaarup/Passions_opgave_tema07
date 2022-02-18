const jsonUrl = "https://passionprojekt-7e1a.restdb.io/rest/plader";
const options = {
  headers: {
    "x-apikey": "620f6a1b34fd6215658587b8",
  },
};
// content destination, der hvor vores vinyler / template skal hen
const contentDest = document.querySelector("#content");

// Variabel for selve vores content altså vinylerne
let vinyler;
let filter = "alle";

document.addEventListener("DOMContentLoaded", start);

// Definerer filterKnapper og siger de skal gå til filtrer funktionen når de bliver klikket
function start() {
  const filterKnapper = document.querySelectorAll(".genrer button");
  filterKnapper.forEach((knap) =>
    knap.addEventListener("click", filtrerVinyler)
  );
  hentData();
}

// Funktion for når man trykker på en genre
function filtrerVinyler() {
  filter = this.dataset.genre;
  // tilføjer og fjerner valgt klasse
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  vis();
}

// Henter json data
async function hentData() {
  const jsonData = await fetch(jsonUrl, options);
  vinyler = await jsonData.json();
  console.log(vinyler);
  vis();
}

function vis() {
  console.log(vinyler);
  // Definerer konstant for template
  const skabelon = document.querySelector("template").content;
  // Renser content ID'en
  contentDest.textContent = "";
  vinyler.forEach((vinyl) => {
    if (filter == vinyl.genre || filter == "alle") {
      // definerer konstant for klon, som template der bliver klonet (tror jeg)
      const klon = skabelon.cloneNode(true);
      // putter json dataen ind i vores template
      klon.querySelector(".vinyl-img").src = `billeder/${vinyl.billede}`;
      klon.querySelector(".navn").textContent = `${vinyl.navn}`;
      klon.querySelector(".kunstner").textContent = `${vinyl.kunstner}`;
      klon.querySelector(".year").textContent = `${vinyl.aarstal}`;
      klon
        .querySelector("article")
        .addEventListener("click", () => singleView(vinyl));
      contentDest.appendChild(klon);
    }
  });
}

function singleView(hvilken) {
  location.href = `singleview.html?id=${hvilken._id}`;
}

// Burgermenu

function MenuClick() {
  document.getElementById("menu_streger").classList.toggle("click");
  document.getElementById("nav").classList.toggle("click");
}
