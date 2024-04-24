const input = document.querySelector("input")

input.addEventListener("keyup", function(e){
  e.preventDefault()

  let valor = input.value

  if(parseInt(valor) % 2 == 0){
    document.querySelector("h1").innerHTML = "Par"
  }else{
    document.querySelector("h1").innerHTML = "Impar"
  }
})