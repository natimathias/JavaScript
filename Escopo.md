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
var nome = "João"; // Variável global

function saudacao() {
    console.log("Olá, " + nome + "!");
}

saudacao(); // Saída: Olá, João!
```

### Exercício:
Faça um programa que armazene o nome de um usuário inserido em um formulário. 

```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício com Escopo Global</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            margin-top: 30px;
            color: #007bff;
        }

        form {
            max-width: 300px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 10px;
            color: #333;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }

        #mensagemBoasVindas {
            max-width: 300px;
            margin: 20px auto;
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 4px;
            text-align: center;
            color: #007bff;
        }
    </style>
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

        const formUsuario = document.getElementById("formUsuario");

        formUsuario.addEventListener("submit", function(event) {
            event.preventDefault();

            nomeUsuario = document.getElementById("nome").value;
            
            var mensagem = "Olá, " + nomeUsuario + "! Seja bem-vindo!";
            document.getElementById("mensagemBoasVindas").textContent = mensagem;
        });
    </script>
</body>
</html>
```

### Escopo de Função
- Variáveis declaradas dentro de uma função têm escopo de função.
- Essas variáveis são acessíveis apenas dentro da função onde foram declaradas.
- Fora da função, essas variáveis não são acessíveis.

### Exemplo:

```javascript
function funcaoExemplo() {
    var localVariable = "Esta é uma variável local";
    console.log(localVariable); // A variável localVariable pode ser acessada aqui
}
```
### Exercício:
```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício com Escopo de Função</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        h1 {
            text-align: center;
            margin-top: 20px;
        }

        form {
            max-width: 300px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 10px;
        }

        input[type="number"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }

        #resultado {
            max-width: 300px;
            margin: 20px auto;
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 4px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Calculadora de Média</h1>

    <form id="formNotas">
        <label for="nota1">Digite a primeira nota:</label>
        <input type="number" id="nota1" name="nota1" min="0" max="10" step="0.1">
        <br>
        <label for="nota2">Digite a segunda nota:</label>
        <input type="number" id="nota2" name="nota2" min="0" max="10" step="0.1">
        <br>
        <label for="nota3">Digite a terceira nota:</label>
        <input type="number" id="nota3" name="nota3" min="0" max="10" step="0.1">
        <br>
        <button type="submit">Calcular Média</button>
    </form>

    <div id="resultado"></div>

    <script>
        function calcularMedia(nota1, nota2, nota3) {
            var media = (nota1 + nota2 + nota3) / 3;
            return media.toFixed(1); 
        }

        const formNotas = document.getElementById("formNotas");

        formNotas.addEventListener("submit", function(event) {
            event.preventDefault();

            var nota1 = parseFloat(document.getElementById("nota1").value);
            var nota2 = parseFloat(document.getElementById("nota2").value);
            var nota3 = parseFloat(document.getElementById("nota3").value);

            var media = calcularMedia(nota1, nota2, nota3);
            
            document.getElementById("resultado").textContent = "A média das notas é: " + media;
        });
    </script>
</body>
</html>
```

### Escopo de Bloco
- Variáveis declaradas com let e const têm escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco onde foram declaradas.
- Blocos de código podem ser delimitados por chaves {}, como em loops (for, while), instruções condicionais (if, else, switch) e blocos de função.

### Exemplo:
```javascript
if (true) {
    let x = 10; // Variável com escopo de bloco
    const y = 20; // Outra variável com escopo de bloco

    console.log(x); // Saída: 10
    console.log(y); // Saída: 20
}
```

### Exercício:
Calcule o perímetro de um retângulo e a área de um círculo.

```javascript
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício com Escopo de Bloco Estilizado</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            margin-top: 30px;
            color: #007bff;
        }

        #resultado {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        #resultado p {
            margin-bottom: 10px;
        }

        #resultado p:last-child {
            margin-bottom: 0;
        }
    </style>
</head>
<body>
    <h1>Calculadora Geométrica</h1>

    <div id="resultado">
        <p>O perímetro do retângulo é <span id="perimetroRetangulo"></span>.</p>
        <p>A área do círculo é <span id="areaCirculo"></span>.</p>
    </div>

    <script>
        {
            const comprimento = 10;
            const largura = 5;
            const perimetro = 2 * (comprimento + largura);
            document.getElementById("perimetroRetangulo").textContent = perimetro;
        }

        {
            const raio = 5;
            const area = Math.PI * raio ** 2;
            document.getElementById("areaCirculo").textContent = area.toFixed(2);
        }
    </script>
</body>
</html>
```