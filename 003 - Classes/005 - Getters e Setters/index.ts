/*
  Getters e setters são usados para proteger seus dados, 
  especialmente na criação de classes. 
  
  Para cada instância de variável, um método getter retorna seu valor, 
  enquanto um método setter o define ou atualiza.
*/

class Pessoa {
  protected nome: string = "";
  protected idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

class Lucas extends Pessoa {
  private _profissao: string = "Programador";
  constructor() {
    super("Lucas", 23);
  }

  get profissao() {
    if (this._profissao === "Piloto de aviao") {
      return `Ele nao e mais um programdor, mudou para ${this._profissao}`
    }
    return this._profissao;
  }

  set profissao(valor: string) {
    this._profissao = valor;
  }
}

const lucas = new Lucas();
console.log(lucas.profissao);
lucas.profissao = "Piloto de aviao";
console.log(lucas.profissao);
