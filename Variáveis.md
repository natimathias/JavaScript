# VARIÁVEIS

As variáveissão fundamentais para armazenar e manipular dados dentro de um programa. Ao contrário de algumas outras linguagens de programação, em JavaScript, as variáveis não precisam ser declaradas com um tipo específico. Temos vários tipos de variáveis, como:

- Declaração de Variáveis
- Atribuição de valores
- Inicialização
- Reatribuição de valores
- Tipagem dinâmica

### Exemplo de código:

```javascript
// Declaração e inicialização de variáveis usando var
var numeroVar = 10;
numeroVar = 20; // Reatribuição permitida

// Declaração e inicialização de variáveis usando let
let numeroLet = 5;
numeroLet = 15; // Reatribuição permitida

// Declaração e inicialização de variáveis usando const
const numeroConst = 7;
// númeroConst = 14; // Isso gerará um erro, pois você não pode reatribuir uma constante

// Escopo de variáveis
function exemploEscopo() {
    var variavelVar = "Variável var";
    let variavelLet = "Variável let";
    const variavelConst = "Variável const";

    console.log(variavelVar); // Variável var
    console.log(variavelLet); // Variável let
    console.log(variavelConst); // Variável const
}

exemploEscopo();

// console.log(variavelVar); // Isso gerará um erro, pois variavelVar está fora do escopo
// console.log(variavelLet); // Isso gerará um erro, pois variavelLet está fora do escopo
// console.log(variavelConst); // Isso gerará um erro, pois variavelConst está fora do escopo
```

### Exercício para fixação:

```javascript
```
  