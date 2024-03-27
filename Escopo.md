## ESCOPO

Escopo se refere à visibilidade de variáveis e funções dentro de um programa. Quando uma variável ou função é declarada em um determinado escopo, ela só pode ser acessada dentro daquele escopo ou de escopos internos a ele. Os três tipos de escopo são:

- Escopo Global
- Escopo de Função
- Escopo de Bloco

### Exemplo:
```javascript
// Escopo global
var globalVariable = "Variável global";

function exampleFunction() {
    // Escopo de função
    var functionVariable = "Variável de função";
    console.log(globalVariable); // Acesso à variável global dentro da função
    console.log(functionVariable); // Acesso à variável local da função dentro da função
}

exampleFunction();
console.log(globalVariable); // Acesso à variável global fora da função
//console.log(functionVariable); // Erro: functionVariable is not defined (variável local da função não está acessível fora dela)

// Escopo de bloco (introduzido no ECMAScript 6)
if (true) {
    // Escopo de bloco
    let blockVariable = "Variável de bloco";
    console.log(blockVariable); // Acesso à variável de bloco dentro do bloco
}

//console.log(blockVariable); // Erro: blockVariable is not defined (variável de bloco não está acessível fora do bloco)
```

### Exercício:
Calcule a área de um retângulo com base e altura passadas como parâmetros e calcule o volume de um cubo.

```javascript
var mensagem = "Bem-vindo ao exercício de escopos em JavaScript!";

function calcularAreaRetangulo(base, altura) {
    var area = base * altura;
    return area;
}

function calcularVolumeCubo(lado) {
    var volume = Math.pow(lado, 3); 
    return volume;
}
console.log(mensagem);

var base = 5;
var altura = 10;
console.log("Área do retângulo:", calcularAreaRetangulo(base, altura)); 
var lado = 3;
console.log("Volume do cubo:", calcularVolumeCubo(lado)); 
```

### Escopo Global

- Variáveis declaradas fora de qualquer bloco de código (geralmente no nível superior do código) têm escopo global.
- Elas podem ser acessadas de qualquer lugar no código, dentro de funções, blocos condicionais, loops ou outros blocos de código.
- Variáveis globais são visíveis para todo o programa.

### Exemplo:

```javascript
var nome = "João";

function saudacao() {
    console.log("Olá, " + nome + "!");
}
saudacao();
```

### Exercício:
Crie um programa que utiliza uma variável global como contador e duas funções para aumentar e diminuir esse contador.

```javascript
let contador = 0;

function aumentarContador() {
    contador++;
}

function diminuirContador() {
    contador--;
}

aumentarContador();
aumentarContador();
diminuirContador();
aumentarContador();
diminuirContador();

console.log("O valor final do contador é:", contador);
```

### Escopo de Função
- Variáveis declaradas dentro de uma função têm escopo de função.
- Essas variáveis são acessíveis apenas dentro da função onde foram declaradas.
- Fora da função, essas variáveis não são acessíveis.

### Exemplo:

```javascript
function funcaoExemplo() {
    var localVariable = "Esta é uma variável local";
    console.log(localVariable); 
    }
```
### Exercício:
Crie um programa para calcular o IMC das pessoas.

```javascript
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

const pesoPessoa = 60; 
const alturaPessoa = 1.65; 
const imcPessoa = calcularIMC(pesoPessoa, alturaPessoa);

console.log("O IMC da pessoa é:", imcPessoa);
```

### Escopo de Bloco
- Variáveis declaradas com let e const têm escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco onde foram declaradas.
- Blocos de código podem ser delimitados por chaves {}, como em loops (for, while), instruções condicionais (if, else, switch) e blocos de função.

### Exemplo:
```javascript
if (true) {
    let x = 10; 
    const y = 20; 

    console.log(x); 
    console.log(y);
}
```

### Exercício:
Calcule o perímetro de um retângulo e a área de um círculo.

```javascript

{
    const comprimento = 10;
    const largura = 5;

    const perimetroRetangulo = 2 * (comprimento + largura);

    console.log("O perímetro do retângulo é:", perimetroRetangulo);
}

{
    const PI = 3.14159;

    const raio = 7;

    const areaCirculo = PI * raio * raio;

    console.log("A área do círculo é:", areaCirculo);
}

```