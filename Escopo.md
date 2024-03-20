## ESCOPO

Escopo se refere à visibilidade de variáveis e funções dentro de um programa. Quando uma variável ou função é declarada em um determinado escopo, ela só pode ser acessada dentro daquele escopo ou de escopos internos a ele. Os três tipos de escopo são:

- Escopo Global
- Escopo de Função
- Escopo de Bloco

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

### Exercício