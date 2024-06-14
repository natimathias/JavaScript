const inputTexto= document.querySelector("[input-texto]")
const btnContar= document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipoContagem = "Caracteres";


function handleBtnContar(evento){
    if(tipoContagem == "Caracteres"){
        evento.target.innerText = 'Contar Caracteres';
        tipoContagem = "Palavras";
      
    }else{
        evento.target.innerText ='Contar Palavras';
        tipoContagem = "Caracteres";
    }  
    handleInputTexto();
}


function handleInputTexto(evento){
    const texto =inputTexto.value  
    if(tipoContagem == "Caracteres"){
        divContador.innerText = texto.length + ' caracteres'

    }else{
        const countWords = texto.trim().split(" ").filter(Boolean);
        divContador.innerText = countWords.length + " palavras";       
    }
}

btnContar.addEventListener("click", handleBtnContar)
inputTexto.addEventListener("input",handleInputTexto)



