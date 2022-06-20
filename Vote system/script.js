var illustrations = [
  { name: "Light", votes: 0 },
  { name: "Heal", votes: 0 },
  { name: "Ivy", votes: 0},
  { name: "Mermaid", votes: 0 }
];
  
// Stem uitbrengen op een tekening
function vote(index) {
  // Controleer of illustration als index wel bestaat
  if (index < illustrations.length) {
    // Ophogen van de stemmen
    illustrations[index].votes += 1;
    // Ervoor zorgen dat het aantal gelijk wordt geupdate op de pagina
    query = "vote-for-" + illustrations[index].name;
    document.getElementById(query).innerText = illustrations[index].votes;
  }
}
  
// Tonen van afbeelding op groot formaat
function preview(index) {
  // Controleer of illustration als index wel bestaat
  if (index < illustrations.length) {
    // Verberg alle afbeeldingen, behalve die geselecteerd was
    illustrations.forEach(function(item) {
      query = "illustration-" + item.name;
      element = document.getElementById(query);
      // Wisselen van css class zodat het verborgen wordt
      element.classList.remove("display-b");
      element.classList.add("display-n");
      // Tenzij het juist getoond moet worden
      if (item.name == illustrations[index].name) {
        element.classList.remove("display-n");
        element.classList.add("display-b");
      }
    });
  }
}