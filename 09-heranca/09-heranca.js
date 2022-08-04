var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    /*   name: string;
        color: string; */
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    Animal.prototype.show = function () {
        console.log("--------------- " + this.name + " ---------------");
        this.andar();
        this.comer();
        this.correr();
    };
    Animal.prototype.andar = function () {
        console.log("O \u001B[36m andar \u001B[0m do(a) " + this.name + " e sua cor \u00E9 " + this.color);
    };
    Animal.prototype.comer = function () {
        console.log("O \u001B[36m comer \u001B[0m do(a) " + this.name + " e sua cor \u00E9 " + this.color + " ");
    };
    Animal.prototype.correr = function () {
        console.log("O \u001B[36m correr \u001B[0m do(a) " + this.name + " e sua cor \u00E9 " + this.color + " \n");
    };
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.show = function () {
        //console.log(`--------------- ${super.name} ---------------`);
        _super.prototype.show.call(this);
        /* super.comer();
            super.andar();
            super.correr(); */
    };
    return Gato;
}(Animal));
var Vaca = /** @class */ (function (_super) {
    __extends(Vaca, _super);
    function Vaca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vaca.prototype.show = function () {
        _super.prototype.show.call(this);
        /*  super.comer();
            super.andar();
            super.correr(); */
    };
    return Vaca;
}(Animal));
var _myAnimal = new Gato("GATO", "AZUL");
/* _myAnimal.name = "GATO"
_myAnimal.color = "AZUL" */
//console.log("GATO");
meuBicho.show();
var _myAnimal2 = new Vaca("VACA", "ROSA");
/* _myAnimal2.name = "VACA"
_myAnimal2.color = "ROSA" */
//console.log("--------------- VACA ---------------");
_myAnimal2.show();
