const form = document.querySelector("form")

form.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    e.preventDefault()

    const dadosForm = new FormData(form)
    let valor = dadosForm.get("numero")
  
    if(parseInt(valor) % 2 == 0){
      document.querySelector("h1").innerHTML = "Par"
    }else{
      document.querySelector("h1").innerHTML = "Impar"
    }
  }
})

/*
form.addEventListener("submit", function(e){

  e.preventDefault()

  const dadosForm = new FormData(form)
  let valor = dadosForm.get("numero")

  if(parseInt(valor) % 2 == 0){
    document.querySelector("h1").innerHTML = "par"
  } else{
    document.querySelector("h1").innerHTML = "impar"
  }
})
*/