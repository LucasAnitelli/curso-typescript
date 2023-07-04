/*
 As interfaces TypeScript definem os contratos em seu código. 
 Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
  nome: string,
  idade: number,
  readonly cpf: number,
  enabled(): boolean,
}

let pessoa: IPessoa = {
  nome: "Lucas",
  idade: 23,
  cpf: 11111111111,
  enabled: () => {
    return true;
  }
}

class Lucas implements IPessoa {
  nome: string = "Lucas";
  idade: number = 23;
  readonly cpf: number = 11111111;

  enabled(): boolean {
    return true;
  }
}

class Amanda implements IPessoa {
  nome: string = "Amanda";
  idade: number = 24;
  readonly cpf: number = 11111111;

  enabled(): boolean {
    return true;
  }
}

