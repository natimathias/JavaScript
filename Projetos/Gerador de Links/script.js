const numero = document.getElementById("input");
const btnLink = document.getElementById("Gerar-Link");
const btnSend = document.getElementById("Copiar-Link");
const mensagem = document.getElementById("mensagem");
const linkTexto = document.getElementById("linkTexto");

const regex = /(\d{2})(\d{5})(\d{4})/;

numero.addEventListener("input", (evento) => {
    console.log(evento.target.value)
    evento.target.value = evento.target.value.replace(/\D/g, "");
    evento.target.value = evento.target.value.replace(regex, "($1) $2-$3");
    if (evento.target.value.length === 15) {
        evento.target.classList.add("telefoneValido");
    } else {
        evento.target.classList.remove("telefoneValido");
    }
});

numero.addEventListener("focus", () =>{
    mensagem.textContent = " "
    linkTexto.textContent = " "
})

function handlebotaoLink() {
    const numeroFormatado = numero.value.replace(/\D/g, ""); //Remove todos os caracteres que não é número 
    if(numeroFormatado.length === 11){
        const link = "https://wa.me/55" + numeroFormatado;
        linkTexto.textContent = link;
        mensagem.textContent = "Clique no link para copiar";
        linkTexto.style.border = "1px solid black";
        linkTexto.style.borderRadius = "5px";
    }else{
        alert("Erro. O número deve conter apenas 11 dígitos!")
    }
}

function handlebotaoSend() {
    const numeroFormatado = numero.value.replace(/\D/g, "");
    if(numeroFormatado.length === 11){
        const linkAbaNova = "https://wa.me/55" + numeroFormatado;
        const win = window.open(linkAbaNova, "_blank");
        win.focus();
    }else{
        alert("Erro. O número deve conter apenas 11 dígitos!")
    }
        
}

linkTexto.addEventListener("click", () => {
    navigator.clipboard.writeText(linkTexto.textContent)
        .then(() => {
            mensagem.textContent = "Link copiado para área de transferência";
        })
        .catch((err) => {
            console.error("Falha ao copiar texto:", err);
        });
});

btnLink.addEventListener("click", handlebotaoLink);
btnSend.addEventListener("click", handlebotaoSend);