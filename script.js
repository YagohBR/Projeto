const abrirMenu = document.getElementById("abrirMenu");
const menuLateral = document.getElementById("menuLateral");

abrirMenu.addEventListener("click", () => {
  if (menuLateral.style.left === "0px") {
    menuLateral.style.left = "-250px";
  } else {
    menuLateral.style.left = "0px";
  }
});

const botaoTema = document.getElementById("alternar-tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
});
