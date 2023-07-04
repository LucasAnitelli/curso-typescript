enum EMes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
  MAR = "Marco",
}

const pessoa: { nome: string, mesAniversario: string } = {
  nome: "Lucas",
  mesAniversario: EMes.MAR
}

if (pessoa.mesAniversario === EMes.MAR) {
  console.log(pessoa);
}