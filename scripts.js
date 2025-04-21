// Sélectionner les liens et le body
const darkModeLink = document.getElementById('dark-mode-link');
const lightModeLink = document.getElementById('light-mode-link');
const body = document.body;

// Vérifier le thème enregistré dans localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
}

// Gestionnaire pour activer le mode sombre
darkModeLink.addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien
  body.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
});

// Gestionnaire pour activer le mode clair
lightModeLink.addEventListener('click', (e) => {
  e.preventDefault(); // Empêche le comportement par défaut du lien
  body.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
});


// PSEUDO MARQUEE
const text = "...Egregore......work in progress...";
const displayElement = document.getElementById("display-text");
let index = 0; // Position actuelle
const sliceSize = 15; // Taille de la tranche
const speed = 200; // Temps entre chaque étape

function typeText() {
  // Calcul de l'index suivant avec modulo
  const currentIndex = index % text.length;

  // Affiche la tranche actuelle
  if (currentIndex + sliceSize > text.length) {
    // Si la tranche dépasse la fin, concatène le début et la fin
    displayElement.textContent =
      text.substring(currentIndex, text.length) +
      text.substring(0, (currentIndex + sliceSize) - text.length);
  } else {
    // Sinon, affiche la tranche normale
    displayElement.textContent = text.substring(currentIndex, currentIndex + sliceSize);
  }

  // Avance l'index
  index++;

  // Relance l'animation
  setTimeout(typeText, speed);
}

typeText();

// LANDING PAGE

document.addEventListener("DOMContentLoaded", () => {
  const asciiContainer = document.getElementById("ascii-art");
  const lines = asciiContainer.innerText.split("\n");

  asciiContainer.innerHTML = ""; // on efface le contenu brut

  lines.forEach(line => {
    const lineDiv = document.createElement("div");

    [...line].forEach(char => {
      const span = document.createElement("span");
      span.textContent = char === " " ? " " : char;
      if (char !== " ") {
        span.classList.add("ascii-char");
      }
      lineDiv.appendChild(span);
    });

    asciiContainer.appendChild(lineDiv);
  });
});


