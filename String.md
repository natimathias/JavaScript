## String
```String``` (ou "cadeia de caracteres" em português) é um tipo de dado que representa uma sequência de caracteres. Uma string pode conter letras, números, símbolos e até mesmo espaços em branco. As strings são delimitadas por aspas simples (' '), aspas duplas (" "), ou acento grave (``).

### Exemplo:
```javascript
var texto1 = "Olá, ";
var texto2 = "mundo!";
var saudacao = texto1 + texto2; 

console.log(saudacao); 
```

### Exercício:
Crie uma mensagem de boas-vindas personalizada para os usuários. O programa deve solicitar ao usuário que insira seu nome e sua cidade e, em seguida, exibir uma mensagem de boas-vindas com base nas informações fornecidas.
- Crie um prompt para solicitar ao usuário que insira seu nome.
- Armazene o nome fornecido pelo usuário em uma variável.
- Crie outro prompt para solicitar ao usuário que insira o nome de sua cidade.
- Armazene o nome da cidade fornecido pelo usuário em outra variável.
- Crie uma mensagem de boas-vindas personalizada usando os valores das variáveis de nome e cidade.
- Exiba a mensagem de boas-vindas no console.

```javascript
var nomeUsuario = prompt("Digite seu nome:");

var cidadeUsuario = prompt("Digite o nome de sua cidade:");

var mensagemBoasVindas = "Olá, " + nomeUsuario + "! Bem-vindo(a) a " + cidadeUsuario + "!";

console.log(mensagemBoasVindas);
```