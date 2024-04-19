const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoContagem = "caracteres"

function handleBtnContar(evento){
    // console.log(evento.target) // target - captura o evento que está sendo selecionado, captura apenas elemento html
    if (tipoContagem == "caracteres"){
        evento.target.innerText = "Contar Palavras"
        tipoContagem = "palavras"
    } else {
        evento.target.innerText = "Contar Caracteres"
        tipoContagem = "caracteres"
    }
    
}

const handleInputTexto = (evento) => {
    console.log(evento.target.value)
}

btnContar.addEventListener("click", handleBtnContar) //Generico, serve para qualquer evento
// btnContar.onclick = handleBtnContar // serve apenas para o evento de onclick
inputTexto.addEventListener("input", handleInputTexto)