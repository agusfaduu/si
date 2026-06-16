const posiciones = [
  { left: 229, top: 290 },
  { left: 513, top: 67 },
  { left: 613, top: 53 },
  { left: 715, top: 70 },
  { left: 871, top: 72 },
  { left: 958, top: 67 },
  { left: 953, top: 154 },
  { left: 119, top: 440 },
  { left: 560, top: 142 },
  { left: 871, top: 229 },
  { left: 700, top: 292 },
  { left: 794, top: 289 },
  { left: 1150, top: 210 },
  { left: 522, top: 300 },
  { left: 576, top: 374 },
  { left: 348, top: 389 },
  { left: 432, top: 449 },
  { left: 792, top: 458 },
  { left: 823, top: 460 },
  { left: 1484, top: 388 },
  { left: 434, top: 499 },
  { left: 523, top: 500 },
  { left: 560, top: 500 },
  { left: 593, top: 499 },
  { left: 1577, top: 472 },
  { left: 1517, top: 470 },
  { left: 825, top: 514 },
  { left: 839, top: 513 },
  { left: 1073, top: 512 },
  { left: 1597, top: 498 },
  { left: 1040, top: 737 },
  { left: 1641, top: 532 },
  { left: 1707, top: 531 },
  { left: 1371, top: 250 },
  { left: 1295, top: 579 },
  { left: 828, top: 722 },
  { left: 766, top: 692 },
  { left: 594, top: 628 },
  { left: 1179, top: 420 },
  { left: 1244, top: 334 },
  { left: 1199, top: 432 },
  { left: 1269, top: 541 }
];

document.querySelectorAll(".foto").forEach((foto, i) => {
  foto.style.left = posiciones[i].left + "px";
  foto.style.top = posiciones[i].top + "px";

  let moviendo = false;
  let offsetX = 0;
  let offsetY = 0;

  foto.addEventListener("mousedown", (e) => {
    moviendo = true;

    offsetX = e.clientX - foto.offsetLeft;
    offsetY = e.clientY - foto.offsetTop;

    foto.style.zIndex = Date.now();
  });

  document.addEventListener("mousemove", (e) => {
    if (!moviendo) return;

    foto.style.left = (e.clientX - offsetX) + "px";
    foto.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    moviendo = false;
  });
});
