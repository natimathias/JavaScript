function funcaoAssincrona(sucesso = true){
    // console.log("Função assíncrona")
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (sucesso)
                resolve("Operação concluída com sucesso!")
            else
                reject(new Error("Erro na operação"))
        }, 2000)

    });
}

async function executaFuncaoAssincrona(){
    try{
        const resposta = await funcaoAssincrona(false)
        console.log(resposta)
    } catch (erro){
        console.log("Deu ruim.Tente novamente mais tarde!")
        console.log(erro)
    }
}

executaFuncaoAssincrona()