document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // BOTONES
  // =====================
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  if (btn1) {
    btn1.onclick = () => {
      window.location.href = "tableros/tablero1.html";
    };
  }

  if (btn2) {
    btn2.onclick = () => {
      window.location.href = "tableros/tablero2.html";
    };
  }

  if (btn3) {
    btn3.onclick = () => {
      window.location.href = "tableros/tablero3.html";
    };
  }

  // =====================
  // MODELO 3D
  // =====================
  const modelo = document.getElementById("modelo");

  if (!modelo) return;

  // estado inicial sin rotación
  modelo.removeAttribute("auto-rotate");

  let rotando = false;

  // desktop: hover
  modelo.addEventListener("mouseenter", () => {
    modelo.setAttribute("auto-rotate", "");
  });

  modelo.addEventListener("mouseleave", () => {
    modelo.removeAttribute("auto-rotate");
  });

  // click toggle + navegación
  modelo.addEventListener("click", () => {
    rotando = !rotando;

    if (rotando) {
      modelo.setAttribute("auto-rotate", "");
    } else {
      modelo.removeAttribute("auto-rotate");
    }

    window.location.href = "tableros/introduccion.html";
  });

});
