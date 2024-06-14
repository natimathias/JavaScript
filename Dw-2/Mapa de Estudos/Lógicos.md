## Lógicos
São utilizados para combinar expressões condicionais e produzir um resultado com base nessas combinações. 

Principais tipos de operadores lógicos:
- And (&&): Retorna ```true``` se ambas as condições forem verdadeiras, caso contrário retorna ```false```.

- Or (||): Retorna ```true``` se apenas uma condição for verdadeira, retorna ```false``` se ambas forem falsas.

- Not (!): Se a condição for verdadeira retorna ```false```, e se a condição for false retorna ```true```.

### Exemplo:
```javascript
x = 5
y = 12

console.log(!(x > 7))
```

### Exercício:
Desenvolva um sistema de login para um site e precisa implementar uma verificação dupla do nome de usuário e da senha. O usuário só deve ser autenticado se ambos os campos estiverem corretos.
```javascript
let usuario = "admin";
let senha = "123456";

if (usuario === "admin" && senha === "123456") {
    console.log("Usuário autenticado com sucesso!");
} else {
    console.log("Autenticação falhou. Verifique o nome de usuário e senha.");
}
```