## DECLARAÇÃO DE VARIÁVEIS

Podemos declarar uma variável usando as palavras-chaves ```var```, ```let``` ou ```const```.

### Var

- ```Var```: é uma das formas mais antigas em JavaScript e tem algumas características únicas em relação ao escopo. 

### Exemplo: 
```javascript
var idade; 
var nome = "João"; 
var salario, departamento; 
```

### Exercício: 
Crie um programa que conta e exibe a quantidade de números pares dentro de um determinado intervalo.
```javascript
var contadorPares = 0;

for (var i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
        contadorPares++; 
    }
}

console.log("A quantidade de números pares de 1 a 200 é:", contadorPares);

```
### Let

- ```Let```: Declara uma variável local no escopo do bloco atual, não precisa declarar valor de início.

### Exemplo:

```javascript
let idade;
let nome = "Maria"; 
let salario, departamento;
```

### Exercício:
Crie um programa que define a idade do usuário e verifica se ele é maior de idade.

```javascript
let idade = 36

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

### Const

- ```Const```:  é usada para declarar constantes. Uma vez que uma constante é atribuída, seu valor não pode ser alterado. Portanto, é recomendada usar const para variáveis cujo valor não deve ser alterado ao longo do tempo.

### Exemplo:

```javascript
const idade = 30; 
const nome = "Maria"; 
const salario = 5000, departamento = "RH";

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Salário:", salario);
console.log("Departamento:", departamento);
```

### Exercício:
Crie um programa que calcula a área de um retângulo.

```javascript
const largura = 15
const altura = 20

const areaRetangulo = largura * altura;

console.log("A área do retângulo é:", areaRetangulo + "m²");
```