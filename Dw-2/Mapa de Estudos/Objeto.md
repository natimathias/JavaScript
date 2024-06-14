## Objeto
É uma estrutura de dados que contém propriedades e métodos. Essas propriedades são pares de chave/valor, onde cada chave é um identificador único e cada valor pode ser qualquer tipo de dado, incluindo outros objetos, funções e até mesmo arrays. Os métodos são funções que podem ser invocadas para executar ações relacionadas ao objeto ou manipular seus dados. 

### Exemplo:
```javascript
var pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    saudacao: function() {
        return "Olá, meu nome é " + this.nome + " e eu moro em " + this.cidade + ".";
    }
};

console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Cidade:", pessoa.cidade);

console.log(pessoa.saudacao());
```

### Exercício:
Exercício para praticar a utilização dos objetos.

```javascript
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "prata",
    detalhes: function() {
        return "Carro: " + this.marca + " " + this.modelo + ", Ano: " + this.ano + ", Cor: " + this.cor;
    }
};

console.log(carro.detalhes());

carro.marca = "Honda";
carro.modelo = "Civic";
carro.ano = 2018;
carro.cor = "preto";

console.log(carro.detalhes());
```