const posiciones = [
  { left: 232, top: 114 },
  { left: 1175, top: 68 },
  { left: 1255, top: 20 },
  { left: 1022, top: 47 },
  { left: 601, top: 282 },
  { left: 697, top: 236 },
  { left: 759, top: 278 },
  { left: 852, top: 80 },
  { left: 992, top: 223 },
  { left: 445, top: 308 },
  { left: 532, top: 55 },
  { left: 1577, top: 153 },
  { left: 1093, top: 70 },
  { left: 520, top: 399 },
  { left: 693, top: 372 },
  { left: 361, top: 590 },
  { left: 232, top: 228 },
  { left: 762, top: 402 },
  { left: 1067, top: 348 },
  { left: 693, top: 419 },
  { left: 601, top: 429 },
  { left: 1537, top: 469 },
  { left: 1025, top: 796 },
  { left: 914, top: 403 },
  { left: 1280, top: 666 },
  { left: 763, top: 479 },
  { left: 1225, top: 157 },
  { left: 303, top: 534 },
  { left: 1068, top: 447 },
  { left: 751, top: 654 },
  { left: 912, top: 486 },
  { left: 1342, top: 356 },
  { left: 1329, top: 536 },
  { left: 994, top: 506 },
  { left: 1181, top: 764 },
  { left: 1069, top: 535 },
  { left: 1431, top: 504 },
  { left: 390, top: 440 },
  { left: 1229, top: 540 },
  { left: 1033, top: 727 },
  { left: 1300, top: 717 },
  { left: 1259, top: 355 },
  { left: 330, top: 685 },
  { left: 1172, top: 415 },
  { left: 606, top: 705 },
  { left: 942, top: 641 },
  { left: 1351, top: 770 }
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
