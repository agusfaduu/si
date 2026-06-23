const posiciones = [
  { left: 20, top: 20 },
  { left: 200, top: 20 },
  { left: 456, top: 41 },
  { left: 681, top: 85 },
  { left: 993, top: 39 },
  { left: 1460, top: 193 },
  { left: 1573, top: 14 },
  { left: 1280, top: 20 },
  { left: 630, top: 3 },
  { left: 1104, top: 93 },
  { left: 1146, top: 689 },
  { left: 703, top: 166 },
  { left: 450, top: 238 },
  { left: 820, top: 168 },
  { left: 565, top: 248 },
  { left: 949, top: 124 },
  { left: 921, top: 72 },
  { left: 673, top: 228 },
  { left: 816, top: 228 },
  { left: 1033, top: 228 },
  { left: 1321, top: 664 },
  { left: 228, top: 293 },
  { left: 380, top: 300 },
  { left: 560, top: 300 },
  { left: 818, top: 296 },
  { left: 920, top: 300 },
  { left: 1398, top: 297 },
  { left: 1773, top: 184 },
  { left: 1035, top: 317 },
  { left: 1317, top: 455 },
  { left: 1190, top: 395 },
  { left: 565, top: 370 },
  { left: 377, top: 427 },
  { left: 921, top: 388 },
  { left: 980, top: 387 },
  { left: 307, top: 290 },
  { left: 666, top: 390 },
  { left: 752, top: 390 },
  { left: 1370, top: 471 },
  { left: 415, top: 458 },
  { left: 20, top: 580 },
  { left: 264, top: 328 },
  { left: 989, top: 493 },
  { left: 668, top: 455 },
  { left: 711, top: 457 },
  { left: 818, top: 452 },
  { left: 869, top: 456 },
  { left: 1237, top: 546 },
  { left: 1460, top: 580 },
  { left: 764, top: 506 },
  { left: 20, top: 720 },
  { left: 207, top: 446 },
  { left: 919, top: 524 },
  { left: 1009, top: 649 },
  { left: 1074, top: 695 },
  { left: 869, top: 562 },
  { left: 558, top: 573 },
  { left: 957, top: 611 },
  { left: 1244, top: 674 },
  { left: 818, top: 614 },
  { left: 1352, top: 695 },
  { left: 1123, top: 733 },
  { left: 1166, top: 730 },
  { left: 232, top: 661 },
  { left: 740, top: 860 }
];

document.querySelectorAll(".foto").forEach((foto, i) => {
  const pos = posiciones[i];
  if (!pos) return;

  foto.style.left = pos.left + "px";
  foto.style.top = pos.top + "px";

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
