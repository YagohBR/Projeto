const abrirMenu = document.getElementById("abrirMenu");
const menuLateral = document.getElementById("menuLateral");

abrirMenu.addEventListener("click", () => {
  if (menuLateral.style.left === "0px") {
    menuLateral.style.left = "-250px";
  } else {
    menuLateral.style.left = "0px";
  }
});
