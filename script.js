// 1- Fazer aparecer a escolha do passo ao selecionar cifra de César

var selecao = document.querySelector("#selecao");
var passo = document.querySelector(".passo");

selecao.addEventListener("change", function () {
  console.log("Teste");
  if (selecao.value == "cesar") {
    passo.style.display = "block";
  } else {
    passo.style.display = "none";
  }
});
// 2- Função para codificar em Cifra de César
// 3- Função para decodificar em Cifra de César
// 4- Função para codificar em Base64
// 5- Função para decodificar em Base64
// 6- Atividade que liga os Radio buttons para codificar ou decodificar
// 7- Fazer a troca do nome no botão codificar/decodificar!
