const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

let vinyl;

console.log("ID", id);

document.addEventListener("DOMContentLoaded", hentData);

async function hentData() {
  const jsonData = await fetch(
    `https://passionprojekt-7e1a.restdb.io/rest/plader/${id}`,
    {
      headers: {
        "x-apikey": "620f6a1b34fd6215658587b8",
      },
    }
  );
  vinyl = await jsonData.json();
  console.log(vinyl);
  visDetaljer();
}

function visDetaljer() {
  document.querySelector(".vinyl-img").src = `billeder/${vinyl.billede}`;
  document.querySelector(".navn").textContent = `${vinyl.navn}`;
  document.querySelector(".kunstner").textContent = `${vinyl.kunstner}`;
  document.querySelector(".year").textContent = `${vinyl.aarstal}`;
  document.querySelector(".beskrivelse").textContent = `${vinyl.beskrivelse}`;
  document.querySelector(".pris").textContent = `${vinyl.pris},-`;
  document.querySelector(".back").addEventListener("click", gaaTilbage);
}

function gaaTilbage() {
  history.back();
}
