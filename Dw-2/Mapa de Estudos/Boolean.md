## Boleano
É um tipo de dado que pode ter um de dois valores: verdadeiro (true) ou falso (false). Esse tipo de dado é usado para representar estados lógicos, como o resultado de uma comparação ou o estado de uma condição.

### Exemplo:
```javascript
var maiorDeIdade = true;
var possuiCarteiraDeMotorista = false;

if (maiorDeIdade && possuiCarteiraDeMotorista) {
    console.log("Você pode dirigir legalmente.");
} else {
    console.log("Você não pode dirigir legalmente.");
}
```

### Exercício:
Faça um programa de cadastro  de usuários e precisa verificar se um usuário pode acessar determinada funcionalidade com base nessas condições: o usuário está logado,o usuário possui permissões de administrador.
```javascript
var usuarioLogado = true;
var eAdmin = false;

if (usuarioLogado && eAdmin) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}
```