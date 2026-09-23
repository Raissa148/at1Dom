
const caixas = document.querySelectorAll(".caixa");
let indiceAtual = 0;
const btnPrincipal = document.getElementById("btn-principal");
btnPrincipal.addEventListener("click", function () {
  
  if (indiceAtual < caixas.length) {
    caixas[indiceAtual].classList.add("borda-verde");
    indiceAtual++; 
  }
});
const btnSecundario = document.getElementById("btn-secundario");

btnSecundario.addEventListener("click", function () {
  caixas.forEach(function (caixa) {
    caixa.classList.remove("borda-verde");
  });
  indiceAtual = 0;
});