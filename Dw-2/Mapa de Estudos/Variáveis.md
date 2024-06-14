# VARIÁVEIS

As variáveissão fundamentais para armazenar e manipular dados dentro de um programa. Ao contrário de algumas outras linguagens de programação, em JavaScript, as variáveis não precisam ser declaradas com um tipo específico. Temos vários tipos de variáveis, como:

- Declaração de Variáveis
- Atribuição de valores
- Inicialização
- Reatribuição de valores
- Tipagem dinâmica

### Exemplo:

```javascript
var numeroVar = 10;
numeroVar = 20; 

let numeroLet = 5;
numeroLet = 15; 

const numeroConst = 7;

function exemploEscopo() {
    var variavelVar = "Variável var";
    let variavelLet = "Variável let";
    const variavelConst = "Variável const";

    console.log(variavelVar); 
    console.log(variavelLet); 
    console.log(variavelConst); 
}

exemploEscopo();
```

### Exercício:
Crie uma função que receba como parâmetro a quantidade de novos produtos, a quantidade de produtos vendidos, se a quantidade atual de produtos em estoque é suficiente para atender a uma determinada quantidade solicitada.

```javascript
var nomeLoja = "Minha Loja de Produtos";

const quantidadeMaximaEstoque = 100;

let quantidadeAtualEstoque = 50;

quantidadeAtualEstoque += 10; 
quantidadeAtualEstoque -= 5;  

console.log("Nome da Loja:", nomeLoja);
console.log("Quantidade Máxima de Produtos em Estoque:", quantidadeMaximaEstoque);
console.log("Quantidade Atual de Produtos em Estoque:", quantidadeAtualEstoque);
```
  