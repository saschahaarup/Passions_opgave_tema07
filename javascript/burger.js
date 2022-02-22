// Burgermenu

function MenuClick() {
  console.log("MenuClick");
  // jeg har her valgt at putte class .click på menufold som er en div med id'et #menufold.
  // Det betyder at den styling der bliver puttet på click, kommmer rundt om både liste-elementer og burger ikonet.
  // Der er blevet behov for at putte class .click på nav også...?

  // document.getElementById("menu_streger").classList.toggle("click");
  document.getElementById("nav").classList.toggle("click");
  document.getElementById("menufold").classList.toggle("click");
}
