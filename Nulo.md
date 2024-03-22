## Nulo
"Null" é um valor especial que representa a ausência intencional de um valor. Em outras palavras, "null" é atribuído a uma variável ou expressão quando queremos indicar explicitamente que ela não possui nenhum valor válido ou significativo.

Alguns tipos:
- Tipo de Dado Primitivo: "null" é considerado um tipo de dado primitivo em linguagens como JavaScript.
- Atribuição Explícita: Normalmente, "null" é atribuído a uma variável quando queremos indicar que ela não contém nenhum valor válido.
- Comparação de Igualdade: Em JavaScript, "null" é igual apenas a "undefined" e a nenhum outro valor.
- Comparações Estritas: A comparação estrita (com o operador ===) entre "null" e "undefined" retorna verdadeiro.
- Liberando Memória: Em algumas linguagens de programação, atribuir "null" a uma variável pode liberar a memória associada a ela, indicando ao coletor de lixo que a variável não é mais necessária.

### Exemplo:
```javascript
var x = null;
console.log(x); // Saída: null

var y;
console.log(y); // Saída: undefined

console.log(x === y); // Saída: false
console.log(x === null); // Saída: true
console.log(y === undefined); // Saída: true
```

### Exercício:
Desenvolva um sistema de registro de usuários. No entanto, nem todos os usuários fornecem informações opcionais, como número de telefone. Use o valor "null" para representar a ausência de um número de telefone.

```javascript
var usuario = {
    nome: "Maria",
    email: "maria@example.com",
    telefone: null
};
if (usuario.telefone !== null) {
    console.log("Número de telefone:", usuario.telefone);
} else {
    console.log("Número de telefone não fornecido");
}
```