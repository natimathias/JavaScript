## Comparação
São utilizados para comparar dois valores e determinar a relação entre eles. Eles retornam um valor booleano (verdadeiro ou falso) com base no resultado da comparação. 

Tipos de operadores de comparação:
- Igualdade (==)
- Desigualdade (!=)
- Maior que (>)
- Menor que(<)
- Maior ou igual a (>=)
- Menor ou igual a (<=)

### Exemplo:
```javascript
x = 5
y = 12

console.log(x < y)
```

### Exercício:
Faça um programa que verifica se a senha inserida pelo usuário atende aos critérios de segurança.
Verifique se a senha inserida pelo usuário tem pelo menos 8 caracteres e inclui pelo menos um caractere especial (!, @, #, $, %, &, *).
```javascript
let senha = "MinhaSenha@123";

let possuiTamanhoSuficiente = senha.length >= 8;

let possuiCaractereEspecial = /[!@#$%&*]/.test(senha);

if (possuiTamanhoSuficiente && possuiCaractereEspecial) {
    console.log("A senha atende aos critérios de segurança.");
} else {
    console.log("A senha não atende aos critérios de segurança.");
}
```