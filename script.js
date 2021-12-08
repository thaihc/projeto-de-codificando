//1- Localizar
var mensagem = document.querySelector("#mensagem");
var mensagemFinal = document.querySelector("#mensagemFinal");
var selecao = document.querySelector("#selecao");
var passo = document.querySelector(".passo");
var incremento = document.querySelector("#escolha-passo");
var code = document.querySelector("#radio-codificar");
var decode = document.querySelector("#radio-decodificar");
var botao = document.querySelector(".but");

// 2- Fazer aparecer a escolha do passo ao selecionar a Cifra de César
selecao.addEventListener("change", function () {
  if (selecao.value == "cesar") {
    passo.style.display = "block";
  } else {
    passo.style.display = "none";
  }
});

// 3- Fazer a troca do nome no botão codificar/decodificar!
code.addEventListener("click", function () {
  botao.innerText = "Codificar Mensagem!";
});

decode.addEventListener("click", function () {
  botao.innerText = "Decodificar Mensagem!";
});

// 4- Atividade que liga os Radio buttons para codificar ou decodificar
botao.addEventListener("click", function (event) {
  if (code.checked && selecao.value == "cesar") {
    mensagemFinal.value = codeCesar(mensagem.value, parseInt(incremento.value));
  } else if (decode.checked && selecao.value == "cesar") {
    mensagemFinal.value = decodeCesar(
      mensagem.value,
      parseInt(incremento.value)
    );
  } else if (code.checked && selecao.value == "bs64") {
    mensagemFinal.innerText = codeBase64(mensagem.value);
  } else if (decode.checked && selecao.value == "bs64") {
    mensagemFinal.innerText = decodeBase64(mensagem.value);
  }
  event.preventDefault();
});

// 5- Função para codificar em Cifra de César
function codeCesar(msg, passo) {
  var resultC = "";
  var codeC = 0;
  for (var i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
      codeC = ((msg.charCodeAt(i) - 65 + passo) % 26) + 65;
    } else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
      codeC = ((msg.charCodeAt(i) - 97 + passo) % 26) + 97;
    } else if (msg.charCodeAt(i) === 32) {
      codeC = 32;
    }
    resultC += String.fromCharCode(codeC);
  }
  return resultC.toLowerCase();
}

// 5- Função para decodificar em Cifra de César
function decodeCesar(msg, passo) {
  var resultD = "";
  var decodeC = 0;
  for (var i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
      if (msg.charCodeAt(i) - 65 - passo < 0) {
        decodeC = (((msg.charCodeAt(i) - 65) - passo + 26) % 26) + 65;
      } else {
        decodeC = (((msg.charCodeAt(i) - 65) - passo) % 26) + 65;
      }
    } else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
      decodeC = ((msg.charCodeAt(i) - 97 - passo) % 26) + 97;
    } else if (msg.charCodeAt(i) === 32) {
      decodeC = 32;
    }
    resultD += String.fromCharCode(decodeC);
  }
  return resultD.toLowerCase();
}

// 4- Função para codificar em Base64
function codeBase64(msg) {
  return btoa(msg);
}

// 5- Função para decodificar em Base64

function decodeBase64(msg) {
  return atob(msg);
}
