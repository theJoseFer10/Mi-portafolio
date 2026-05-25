// Efecto de escritura tipo terminal
const textToType =
  "Desarrollador Front-End enfocado en la creación de herramientas eficientes. Entusiasta de Linux y el análisis de datos.";
const typewriterElement = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    typewriterElement.textContent += textToType.charAt(index);
    index++;
    // Velocidad de escritura aleatoria para mayor realismo
    setTimeout(typeWriter, Math.random() * 50 + 30);
  }
}

// Iniciar la animación cuando cargue la página
window.onload = () => {
  setTimeout(typeWriter, 500);
};
