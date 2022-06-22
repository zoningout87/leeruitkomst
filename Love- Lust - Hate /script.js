var shown = false;

document.addEventListener('scroll', function(event) {
  // Door css rotatie X gebruiken ipv Y
  var horizontal = window.scrollX;
  // Als voorbij het einde gescrolled wordt, toon melding
  if (horizontal >= document.body.scrollHeight) {
    if (shown == false) {
      alert('Einde pagina!');
      // Voorkom onnodige meldingen na 1e keer tonen
      shown = true;
    }
  }
  // Indien ver genoeg terug gescrolled, reset zodat het weer getoond wordt
  if (horizontal <= document.body.scrollHeight - 40) {
    shown = false
  }
});
