const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")

const timer = document.getElementById("timer")

function val(){
  const valor = Math.floor(Math.random() * 3);

  if(valor == 0){
    pedra.style.display = "block"
  }
  else if(valor == 1){
    papel.style.display = "block"
  }
  else if(valor == 2){
    tesoura.style.display = "block"
  }
  timer.style.color = "black"
}

function jogada(){

  timer.style.color = "white"
  setTimeout(() => (val()),3000)
  setTimeout(() => (timer.innerHTML = "1"), 2000)
  setTimeout(() => (timer.innerHTML = "2"), 1000)
}

btn1.addEventListener("click", function(e){

  btn2.style.backgroundColor = "black"
  btn3.style.backgroundColor = "black"
  jogada()
})

btn2.addEventListener("click", function(e){

  btn1.style.backgroundColor = "black"
  btn3.style.backgroundColor = "black"
  jogada()
})

btn3.addEventListener("click", function(e){

  btn2.style.backgroundColor = "black"
  btn1.style.backgroundColor = "black"
  jogada()
})