//1- Localizar:

var mensagem = document.querySelector("#mensagem");
var mensagemFinal = document.querySelector("#mensagemFinal");
var selecao = document.querySelector("#selecao");
var passo = document.querySelector(".passo");
var incremento = document.querySelector("#escolha-passo");
var code = document.querySelector("#radio-codificar");
var decode = document.querySelector("#radio-decodificar");
var botao = document.querySelector(".but");

// 2- Fazer aparecer a escolha do passo ao selecionar a Cifra de César:

selecao.addEventListener("change", function () {
  if (selecao.value == "cesar") {
    passo.style.display = "block";
  } else {
    passo.style.display = "none";
  }
});

// 3- Fazer a troca do nome no botão codificar/decodificar!:

code.addEventListener("click", function () {
  botao.innerText = "Codificar Mensagem!";
});

decode.addEventListener("click", function () {
  botao.innerText = "Decodificar Mensagem!";
});

// 4- Atividade que liga os Radio buttons para codificar ou decodificar:

botao.addEventListener("click", function (event) {
  event.preventDefault();
  if (code.checked && selecao.value == "cesar") {
    mensagemFinal.value = codeCesar(mensagem.value, parseInt(incremento.value));
  } else if (decode.checked && selecao.value == "cesar") {
    mensagemFinal.value = decodeCesar(
      mensagem.value.split(""),
      parseInt(incremento.value)
    );
  } else if (code.checked && selecao.value == "bs64") {
    mensagemFinal.value = codeBase64(mensagem.value);
  } else if (decode.checked && selecao.value == "bs64") {
    mensagemFinal.value = decodeBase64(mensagem.value);
  }
});

// 5- Função para codificar em Cifra de César:

function codeCesar(msg, passo) {
  var resultD = [];
  var decodeC;
  for (var i = 0; i < msg.length; i++) {
    if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
      decodeC = ((msg[i].charCodeAt() - 65 + passo) % 26) + 65;
      resultD.push(String.fromCharCode(decodeC));
    } else if (msg[i].charCodeAt() >= 97 && msg[i].charCodeAt() <= 122) {
      decodeC = ((msg[i].charCodeAt() - 97 + passo) % 26) + 97;
      resultD.push(String.fromCharCode(decodeC));
    } else {
      resultD.push(msg[i]);
    }
  }
  return resultD.join("");
}

// 6- Função para decodificar em Cifra de César:

function decodeCesar(msg, passo) {
  var resultD = [];
  var decodeC;
  for (var i = 0; i < msg.length; i++) {
    if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
      decodeC = ((msg[i].charCodeAt() - 90 - passo) % 26) + 90;
      resultD.push(String.fromCharCode(decodeC));
    } else if (msg[i].charCodeAt() >= 97 && msg[i].charCodeAt() <= 122) {
      decodeC = ((msg[i].charCodeAt() - 122 - passo) % 26) + 122;
      resultD.push(String.fromCharCode(decodeC));
    } else {
      resultD.push(msg[i]);
    }
  }
  return resultD.join("");
}

// 7- Função para codificar em Base64:

function codeBase64(msgm) {
  return btoa(msgm);
}

// 8- Função para decodificar em Base64:

function decodeBase64(msg) {
  return atob(msg);
}
