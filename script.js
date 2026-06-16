document.getElementById("btn1").onclick = () => {
  window.location.href = "tableros/tablero1.html";
};

document.getElementById("btn2").onclick = () => {
  window.location.href = "tableros/tablero2.html";
};

document.getElementById("btn3").onclick = () => {
  window.location.href = "tableros/tablero3.html";
};

const modelo = document.getElementById("modelo");

// no rota por defecto
modelo.removeAttribute("auto-rotate");

// rota solo cuando el mouse está encima
modelo.addEventListener("mouseenter", () => {
  modelo.setAttribute("auto-rotate", "");
});

// se detiene cuando sale el mouse
modelo.addEventListener("mouseleave", () => {
  modelo.removeAttribute("auto-rotate");
});

// click → introducción
modelo.addEventListener("click", () => {
  window.location.href = "tableros/introduccion.html";
});
