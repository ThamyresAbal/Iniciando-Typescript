//regras de negocio
interface AnimalInterface2 {
    //show();
    correr();
    andar();
    comer();
}
class Animal2 implements AnimalInterface2 {
    // a titulo de estudo.
    // na pratica todos os métodos seriam privados
    // da pra acessar pelo construtor
    public sono: boolean;

    constructor(public name: string, public color: string) { }

    //acesso dentro do mesmo arquivo ou pasta importada
    protected show() {
        console.log(`--------------- ${this.name} ---------------`);
        this.andar();
        this.comer();
        this.correr();
    }
    andar() {
        console.log(
            `O \x1b[36m andar \x1b[0m do(a) ${this.name} e sua cor é ${this.color
            }. Está ${this.verificaSono(this.sono)}`
        );
    }
    comer() {
        console.log(
            `O \x1b[36m comer \x1b[0m do(a) ${this.name} e sua cor é ${this.color} `
        );
    }
    correr() {
        console.log(
            `O \x1b[36m correr \x1b[0m do(a) ${this.name} e sua cor é ${this.color} \n`
        );
    }
    protected verificaSono(isSono: boolean) {
        //console.log("entrei")
        if (isSono) {
            return "com sono";
        } else {
            return "sem sono";
        }
        //return isSono;
    }
}
class Calopsita extends Animal2 {
    //a titulo de estudo
    private penas:boolean = true;

    show() {
        super.show();
        this.verificaPenas(this.penas);
    }
    private verificaPenas(novasPenas: boolean) {
        // novasPenas = this.penas;
        if (novasPenas) {
            return console.log("\x1b[36m Atributo privado verdadeiro --- Novas penas crescendo.\x1b[0m \n ");
        } else {
            return console.log("\x1b[36mAtributo privado falso --- Não tenho novas penas. \x1b[0m\n ");
        }
    }
}

class Grilo extends Animal2 {
    //a titulo de estudo
    private salta:number = 2;
    show() {
        super.show();
        this.verificaMovimento(this.salta)
    }
    private verificaMovimento(salta: number) {
        if (salta > 0 ) {
            return console.log("\x1b[36m Atributo privado verdadeiro --- SALTEI.\x1b[0m \n ");
        } else {
            return console.log("\x1b[36mAtributo privado falso melhor --- NÃO ME MEXER. \x1b[0m\n ");
        }
    }
}

let meuBicho = new Calopsita("CALOPSITA", "AZUL");
//poderia ter passado pelo consrutor, mas titulo de estudo coloquei aqui
meuBicho.sono = true;
meuBicho.show();

let meuBicho2 = new Grilo("GRILO", "ROSA"); //se tivesse passado public pelo construtor seria o tereiro argumento "true or false"
//poderia ter passado pelo consrutor, mas titulo de estudo coloquei aqui
meuBicho.sono = false;
meuBicho2.show();
