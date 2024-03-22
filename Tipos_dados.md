## Tipos de Dados
Referem-se à classificação dos valores que podem ser armazenados e manipulados por um programa. Esses tipos de dados determinam como os valores podem ser interpretados e quais operações podem ser realizadas com eles.

Alguns tipos de dados:
- Number: Representa valores numéricos, como inteiros e números decimais.

- String: Representa sequências de caracteres, como texto.

- Boolean: Representa valores lógicos verdadeiro ou falso.

- Null: Representa a ausência intencional de qualquer valor ou objeto.

- Undefined: Representa um valor não definido. Geralmente é o valor atribuído a uma variável que ainda não foi inicializada.

- Object: Representa coleções de dados e funcionalidades relacionadas, organizadas como pares chave/valor. Os objetos podem ser objetos predefinidos, como Math ou Date, ou objetos definidos pelo usuário.

- Array: Representa uma coleção ordenada de valores, onde cada valor é identificado por um índice numérico.

- Function: Representa um bloco de código que pode ser chamado, opcionalmente, com parâmetros, para realizar uma tarefa específica.

- Symbol: Representa um valor único e imutável usado como chave em objetos do tipo Map ou como identificador de propriedades de objetos.

- BigInt: Representa números inteiros de precisão arbitrária.

### Exemplo:
```javascript
// Number
var idade = 30;
var altura = 1.75;

// String
var nome = "João";
var mensagem = "Olá, mundo!";

// Boolean
var ativo = true;
var isAdmin = false;

// Null
var valorNulo = null;

// Undefined
var valorIndefinido;

// Object
var pessoa = {
    nome: "Maria",
    idade: 25,
    altura: 1.65
};

// Array
var frutas = ["maçã", "banana", "laranja"];

// Function
function somar(a, b) {
    return a + b;
}

// Exibindo os valores das variáveis
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Nome:", nome);
console.log("Mensagem:", mensagem);
console.log("Ativo:", ativo);
console.log("isAdmin:", isAdmin);
console.log("Valor Nulo:", valorNulo);
console.log("Valor Indefinido:", valorIndefinido);
console.log("Pessoa:", pessoa);
console.log("Frutas:", frutas);
console.log("Resultado da soma:", somar(5, 3));
```

### Exercício:
Exercício para praticar os diferentes tipos de dados.

```javascript
var nome = "João";
var idade = 25;
var temCachorro = true;
var frutas = ["maçã", "banana", "laranja"];
var endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
};

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Tem Cachorro:", temCachorro);
console.log("Frutas Favoritas:", frutas);
console.log("Endereço:", endereco);
```