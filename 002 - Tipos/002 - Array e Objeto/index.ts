// tupla
let array1: [string, string, number, boolean] = ["Lucas Anitelli", "Teste", 123, false];
let array2: Array<string | number | boolean> = [true, "Lucas", 123, "Anitelli"];

console.log(array1);
console.log(array2);

let obj1: { nome: string, sobrenome: string, idade: number, deuBom: boolean } = { nome: "Lucas", sobrenome: "Anitelli", idade: 123, deuBom: true }

console.log(obj1)

let obj2: Array<{ nome: string, sobrenome: string, idade: number, deuBom: boolean }> = [
  { nome: "Lucas", sobrenome: "Anitelli", idade: 123, deuBom: true },
  { nome: "Lucas2", sobrenome: "Anitelli2", idade: 456, deuBom: false },
];