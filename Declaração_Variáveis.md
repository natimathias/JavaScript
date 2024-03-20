## DECLARAÇÃO DE VARIÁVEIS

Podemos declarar uma variável usando as palavras-chaves var, let ou const.

### Var

- Var: é uma das formas mais antigas em JavaScript e tem algumas características únicas em relação ao escopo. 

### Exemplo: 
```javascript
var idade; // Declaração da variável idade
var nome = "João"; // Declaração e inicialização da variável nome
var salario, departamento; // Declaração de múltiplas variáveis em uma linha
```

### Exercício:

### Let

- Let: Declara uma variável local no escopo do bloco atual, não precisa declarar valor de início.

### Exemplo:

```javascript
let idade; // Declaração da variável idade
let nome = "Maria"; // Declaração e inicialização da variável nome
let salario, departamento; // Declaração de múltiplas variáveis em uma linha
```

### Exercício:


### Const

- Const:  é usada para declarar constantes. Uma vez que uma constante é atribuída, seu valor não pode ser alterado. Portanto, é recomendada usar const para variáveis cujo valor não deve ser alterado ao longo do tempo.

### Exemplo:

```javascript
// Declaração de variáveis usando const
const idade = 30; // Declaração e inicialização da variável idade
const nome = "Maria"; // Declaração e inicialização da variável nome
const salario = 5000, departamento = "RH"; // Declaração de múltiplas variáveis em uma linha

// Exibição dos valores das variáveis
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Salário:", salario);
console.log("Departamento:", departamento);

// Tentativa de reatribuição de valores (Isso irá gerar um erro)
// idade = 35;
// salario = 6000;
// departamento = "TI";
```

### Exercício:
