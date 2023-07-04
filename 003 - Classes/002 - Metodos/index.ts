/*
  Uma classe TypeScript é uma estrutura de programação orientada a objetos 
  que possui um conjunto de propriedades e métodos. 

  A classe é um modelo para criar objetos, permitindo que você defina 
  uma estrutura com propriedades e comportamentos.
*/

class Pessoa {
  nome: string = "";
  idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

const pessoa1 = new Pessoa("Lucas", 23);
console.log(pessoa1.comer("Arroz"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Anitelli", 35);
console.log(pessoa2.comer("Bolo"));
console.log(pessoa2.fezAniversario());