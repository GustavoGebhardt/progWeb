var valor = 3;
var texto = document.getElementById("valorTexto")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")

function autualizar(){
  texto.innerHTML = valor;
}

function removerCor(){
  btn1.style.borderColor = "black"
  btn2.style.borderColor = "black"
  btn3.style.borderColor = "black"
}

function adicionar(){
  valor += 1;
  autualizar()
  removerCor()
  btn3.style.borderColor = "blue"
}

function remover(){
  valor -= 1;
  autualizar()
  removerCor()
  btn1.style.borderColor = "blue"
}

function reiniciar(){
  valor = 0;
  autualizar()
  removerCor()
  btn2.style.borderColor = "blue"
}