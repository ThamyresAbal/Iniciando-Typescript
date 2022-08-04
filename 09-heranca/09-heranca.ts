//regras de negocio
interface AnimalInterface {
    show();
    correr();
    andar();
    comer();
}

class Animal implements AnimalInterface {
    /*   name: string;
        color: string; */
    constructor(public name: string, public color: string) { }
    show() {
        console.log(`--------------- ${this.name} ---------------`);
        this.andar();
        this.comer();
        this.correr();
    }
    andar() {
        console.log(`O \x1b[36m andar \x1b[0m do(a) ${this.name} e sua cor é ${this.color}`);
    }
    comer() {
        console.log(`O \x1b[36m comer \x1b[0m do(a) ${this.name} e sua cor é ${this.color} `);
    }
    correr() {
        console.log(`O \x1b[36m correr \x1b[0m do(a) ${this.name} e sua cor é ${this.color} \n`);
    }
}
class Gato extends Animal {
    tamanho: number;

    show() {
        //console.log(`--------------- ${super.name} ---------------`);
        super.show();
        /* super.comer();
            super.andar();
            super.correr(); */
    }
}

class Vaca extends Animal {
    tamanho: number;

    show() {
        super.show();
        /*  super.comer();
            super.andar();
            super.correr(); */
    }
}

let _myAnimal = new Gato("GATO", "AZUL");
/* _myAnimal.name = "GATO"
_myAnimal.color = "AZUL" */
//console.log("GATO");
meuBicho.show();

let _myAnimal2 = new Vaca("VACA", "ROSA");
/* _myAnimal2.name = "VACA"
_myAnimal2.color = "ROSA" */
//console.log("--------------- VACA ---------------");
_myAnimal2.show();
