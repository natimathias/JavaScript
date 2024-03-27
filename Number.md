## Número
Refere-se a um tipo de dado que representa valores numéricos. Os números são amplamente utilizados em programas para realizar cálculos, contar, representar quantidades, entre outras operações matemáticas.

Temos dois tipos:
- Números Inteiros (Integers): São números sem casas decimais, ou seja, números inteiros positivos ou negativos. Exemplos de números inteiros são: -10, 0, 42, 1000, etc.

- Números de Ponto Flutuante (Floating-Point Numbers): São números que podem ter casas decimais. Eles são representados com um ponto decimal. Exemplos de números de ponto flutuante são: -3.14, 2.71828, 0.5, 100.25, etc.

### Exemplo:
```javascript
var numeroInteiro = 42;
var numeroDecimal = 3.14;

var resultado = numeroInteiro * numeroDecimal;
console.log(resultado); 
```

### Exercício:
Calcule o preço total de uma compra em uma loja online. 
```javascript
var subtotal = 150.50;
var frete = 10.00;

var precoTotal = subtotal + frete;

console.log("O preço total da compra é:", precoTotal.toFixed(2));
```