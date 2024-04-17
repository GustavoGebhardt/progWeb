/*
function boasVindas(){
  let nome = document.querySelector("input").value
  alert("Bem vindo, " + nome + "!")
}


let botao = document.querySelector("button");
botao.addEventListener('click', function(e){
  alert("Hello, World!"); 
  e.target.style.backgroundColor = "red";
  e.target.style.color = "white";
})
*/

let botao = document.querySelector("button");
botao.addEventListener('click', function(e){
  let final;
  let valor = document.querySelector("#valor").value
  let texto = document.querySelector("h3")

  if(parseInt(valor) >= 18){
    final = "maior de idade"
    texto.style.color = "green"
  } else{
    final = "menor de idade"
    texto.style.color = "red"
  }

  texto.innerHTML = final
})