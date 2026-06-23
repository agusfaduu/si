function setScale() {
  const baseWidth = 1920;
  const scale = window.innerWidth / baseWidth;

  document.documentElement.style.setProperty("--scale", scale);
}

window.addEventListener("resize", setScale);
setScale();

const posiciones = [
  { left: 167, top: 134 },
  { left: 9, top: 4 },
  { left: 1340, top: -82 },
  { left: 625, top: 3 },
  { left: 1043, top: -20 },
  { left: 1218, top: 320 },
  { left: 636, top: 121 },
  { left: 833, top: 125 },
  { left: 148, top: 224 },
  { left: 445, top: 308 },
  { left: 190, top: 627 },
  { left: 523, top: 343 },
  { left: 810, top: 344 },
  { left: 1684, top: 199 },
  { left: 1686, top: 333 },
  { left: 804, top: 376 },
  { left: 531, top: 401 },
  { left: 762, top: 402 },
  { left: 1437, top: 536 },
  { left: 527, top: 487 },
  { left: 454, top: 531 },
  { left: 536, top: 523 },
  { left: 1025, top: 796 },
  { left: 1792, top: 527 },
  { left: 1280, top: 666 },
  { left: 1803, top: 580 },
  { left: 1677, top: 443 },
  { left: 275, top: 534 },
  { left: 1803, top: 462 },
  { left: 352, top: 408 },
  { left: 593, top: 614 },
  { left: 41, top: 252 },
  { left: 319, top: 10 },
  { left: 595, top: 693 },
  { left: 1356, top: 609 },
  { left: 1294, top: 543 },
  { left: 1555, top: 634 },
  { left: 390, top: 440 },
  { left: 1229, top: 540 },
  { left: 1509, top: 20 },
  { left: 1419, top: 718 }
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
