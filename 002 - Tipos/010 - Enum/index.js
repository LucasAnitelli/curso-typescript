var EMes;
(function (EMes) {
    EMes["JAN"] = "Janeiro";
    EMes["FEV"] = "Fevereiro";
    EMes["MAR"] = "Marco";
})(EMes || (EMes = {}));
var pessoa = {
    nome: "Lucas",
    mesAniversario: EMes.MAR
};
if (pessoa.mesAniversario === EMes.MAR) {
    console.log(pessoa);
}
