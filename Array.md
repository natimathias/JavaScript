## Array
É uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Os valores dentro de um array são organizados em uma sequência ordenada, onde cada valor é associado a um único índice. 

### Exemplo:
```javascript
var numeros = [5,8,9,7]
console.log(numeros[1])
```

### Exercício:
Crie um programa que armazena uma lista de cores e exibe cada cor na lista.

```javascript
let cores = ["vermelho", "azul", "verde", "amarelo", "roxo"];

console.log("Lista de Cores:");
for (let cor of cores) {
    console.log(cor);
}
```