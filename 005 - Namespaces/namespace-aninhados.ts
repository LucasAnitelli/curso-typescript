/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa {
  export namespace Lucas {
    const data = 1 + 1;
    export let nome = "Lucas";

    export const calc = () => {
      return data;
    }
  }

  export namespace Amanda {
    const data = 1 + 1;
    export let nome = "Amanda";

    export const calc = () => {
      return data;
    }
  }
}

console.log(Pessoa.Amanda.nome);
console.log(Pessoa.Lucas.nome);