function setScale() {
  const scaleX = window.innerWidth / 1920;
  const scaleY = window.innerHeight / 1080;

  // usamos el menor para mantener proporción
  const scale = Math.min(scaleX, scaleY);

  document.documentElement.style.setProperty("--scale", scale);
}

window.addEventListener("resize", setScale);
setScale();


document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("btn1").onclick = () => {
    window.location.href = "tableros/tablero1.html";
  };

  document.getElementById("btn2").onclick = () => {
    window.location.href = "tableros/tablero2.html";
  };

  document.getElementById("btn3").onclick = () => {
    window.location.href = "tableros/tablero4.html";
  };

  const modelo = document.getElementById("modelo");

  modelo.removeAttribute("auto-rotate");

  modelo.addEventListener("mouseenter", () => {
    modelo.setAttribute("auto-rotate", "");
  });

  modelo.addEventListener("mouseleave", () => {
    modelo.removeAttribute("auto-rotate");
  });

  modelo.addEventListener("click", () => {
    window.location.href = "tableros/introduccion.html";
  });

});
