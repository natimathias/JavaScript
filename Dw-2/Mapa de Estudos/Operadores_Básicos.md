## Operadores Básicos
São símbolos ou palavras-chave utilizados para realizar operações sobre dados. Eles podem ser usados para realizar cálculos matemáticos, comparações, atribuições e operações lógicas.

Tipos de operadores básicos:
- Aritméticos
- Comparação
- Lógicos
- Typeof

### Exemplo:
```javascript
//Aritméticos
var a = 50
var b = 2

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//Comparação
var a = 50
var b = 2

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//Lógicos
a = 25
b = 9

console.log(a > 4 && b < 7)  //And
console.log(a < 13 || b > 7) // Or
console.log(!(a == 5)) //Not

//Typeof
console.log(typeof 25);  
console.log(typeof "Olá Mundo");  
console.log(typeof true);  
console.log(typeof {name: "Luiza"});  
console.log(typeof [1, 2, 3]);  
console.log(typeof undefined); 
console.log(typeof null);  
console.log(typeof function() {}); 

```
### Exercício:
Exercício simples para fixar.
```javascript
y = 10
z = 420

console.log(y > z)
console.log(y < 4 || z > 32)
console.log(y + z)
console.log(typeof y)
```