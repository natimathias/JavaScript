## DECLARAÇÃO DE VARIÁVEIS

Podemos declarar uma variável usando as palavras-chaves ```var```, ```let``` ou ```const```.

### Var

- Var: é uma das formas mais antigas em JavaScript e tem algumas características únicas em relação ao escopo. 

### Exemplo: 
```javascript
var idade; // Declaração da variável idade
var nome = "João"; // Declaração e inicialização da variável nome
var salario, departamento; // Declaração de múltiplas variáveis em uma linha
```

### Exercício: 
Faça um programa que armazena o nome de um usuário inserido em um formulário.
```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício com variável var</title>
</head>
<body>
    <h1>Formulário de Boas-Vindas</h1>

    <form id="formUsuario">
        <label for="nome">Digite seu nome:</label>
        <input type="text" id="nome" name="nome">
        <button type="submit">Enviar</button>
    </form>

    <div id="mensagemBoasVindas"></div>

    <script>
        var nomeUsuario;

        document.getElementById("formUsuario").addEventListener("submit", function(event) {

            event.preventDefault();

            nomeUsuario = document.getElementById("nome").value;
            
            var mensagem = "Olá, " + nomeUsuario + "! Seja bem-vindo!";
            document.getElementById("mensagemBoasVindas").textContent = mensagem;
        });
    </script>
</body>
</html>
```
### Let

- Let: Declara uma variável local no escopo do bloco atual, não precisa declarar valor de início.

### Exemplo:

```javascript
let idade; // Declaração da variável idade
let nome = "Maria"; // Declaração e inicialização da variável nome
let salario, departamento; // Declaração de múltiplas variáveis em uma linha
```

### Exercício:
Conte o número de vezes que um usuário clica em um botão. 

```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício com variável let</title>
</head>
<body>
    <h1>Contador de Cliques</h1>

    <p>Clique no botão abaixo para aumentar o contador:</p>
    <button id="botao">Clique Aqui</button>

    <p>Contagem de Cliques: <span id="contador">0</span></p>

    <script>
        let contadorCliques = 0;

        const botao = document.getElementById("botao");

        botao.addEventListener("click", function() {
            contadorCliques++;

            document.getElementById("contador").textContent = contadorCliques;
        });
    </script>
</body>
</html>
```

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
Armazene informações sobre um produto em uma loja.

```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício com variável const</title>
</head>
<body>
    <h1>Detalhes do Produto</h1>

    <div id="detalhes-produto">
        <p><strong>Nome:</strong> <span id="nome-produto"></span></p>
        <p><strong>Preço:</strong> R$ <span id="preco-produto"></span></p>
        <p><strong>Categoria:</strong> <span id="categoria-produto"></span></p>
    </div>

    <script>
        const produto = {
            nome: "Notebook",
            preco: 2999.99,
            categoria: "Eletrônicos"
        };

        document.getElementById("nome-produto").textContent = produto.nome;
        document.getElementById("preco-produto").textContent = produto.preco.toFixed(2);
        document.getElementById("categoria-produto").textContent = produto.categoria;
    </script>
</body>
</html>
```