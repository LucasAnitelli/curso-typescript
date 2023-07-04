const fn = (nome: string, idade?: number) => {
  if (!idade) {
    return `nome: ${nome}/ idade: sem valor definido`;
  }
  return `nome: ${nome}/ idade: ${idade}`;
}

console.log(fn("Lucas", 23));
console.log(fn("Lucas"));

const pessoa: { nome: string, idade?: number } = { nome: "Lucas", idade: 23 };