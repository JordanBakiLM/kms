// ======================================
// 🌊 LUMIÈRE AU TOUCHER
// ======================================

const light =
document.getElementById("light");

document.addEventListener("mousemove",(e)=>{

  light.style.left =
  e.clientX + "px";

  light.style.top =
  e.clientY + "px";

});

// Mobile touch

document.addEventListener("touchmove",(e)=>{

  light.style.left =
  e.touches[0].clientX + "px";

  light.style.top =
  e.touches[0].clientY + "px";

});
