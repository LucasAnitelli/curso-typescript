class Pessoa {
  public readonly nome: string = "Lucas Anitelli";
}

let pessoa = new Pessoa();

console.log(pessoa.nome);
pessoa.nome = "Amanda";
console.log(pessoa.nome);