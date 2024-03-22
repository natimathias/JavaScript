## Indefinido
"Undefined" é um valor especial que indica que uma variável foi declarada, mas ainda não foi atribuída a um valor. Em outras palavras, quando uma variável é declarada, mas não é inicializada com um valor específico, ela tem o valor "undefined" por padrão.
O valor "undefined" é um tipo de dado primitivo em JavaScript e representa a ausência de um valor definido. Isso pode ocorrer quando uma variável é declarada, mas não recebeu nenhum valor ainda, ou quando uma propriedade de um objeto é acessada, mas não existe.

### Exemplo:
```javascript
var nome;
console.log(nome); // Saída: undefined

nome = "João";
console.log(nome); // Saída: João
```

### Exercício:
Desenvolva um sistema de gerenciamento de funcionários e precisa verificar se as informações de endereço de um funcionário estão disponíveis. Para isso, você tem um objeto que representa os dados de um funcionário, incluindo o nome, a idade e o endereço.

```javascript
var funcionario = {
    nome: "João",
    idade: 35,
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    }
};

if (funcionario.endereco !== undefined) {
    console.log("Endereço completo:");
    console.log("Rua:", funcionario.endereco.rua);
    console.log("Cidade:", funcionario.endereco.cidade);
    console.log("Estado:", funcionario.endereco.estado);
} else {
    console.log("Endereço não disponível");
}
```