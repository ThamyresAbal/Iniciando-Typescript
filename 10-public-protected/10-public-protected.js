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
var Animal2 = /** @class */ (function () {
    function Animal2(name, color) {
        this.name = name;
        this.color = color;
    }
    //acesso dentro do mesmo arquivo ou pasta importada ou instancia
    Animal2.prototype.show = function () {
        console.log("--------------- " + this.name + " ---------------");
        this.andar();
        this.comer();
        this.correr();
    };
    Animal2.prototype.andar = function () {
        console.log("O \u001B[36m andar \u001B[0m do(a) " + this.name + " e sua cor \u00E9 " + this.color + ". Est\u00E1 " + this.verificaSono(this.sono));
    };
    Animal2.prototype.comer = function () {
        console.log("O \u001B[36m comer \u001B[0m do(a) " + this.name + " e sua cor \u00E9 " + this.color + " ");
    };
    Animal2.prototype.correr = function () {
        console.log("O \u001B[36m correr \u001B[0m do(a) " + this.name + " e sua cor \u00E9 " + this.color + " \n");
    };
    Animal2.prototype.verificaSono = function (isSono) {
        //console.log("entrei")
        if (isSono) {
            return "com sono";
        }
        else {
            return "sem sono";
        }
        //return isSono;
    };
    return Animal2;
}());
var Calopsita = /** @class */ (function (_super) {
    __extends(Calopsita, _super);
    function Calopsita() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //a titulo de estudo
        _this.penas = true;
        return _this;
    }
    Calopsita.prototype.show = function () {
        _super.prototype.show.call(this);
        this.verificaPenas(this.penas);
    };
    Calopsita.prototype.verificaPenas = function (novasPenas) {
        // novasPenas = this.penas;
        if (novasPenas) {
            return console.log("\x1b[36m Atributo privado verdadeiro --- Novas penas crescendo.\x1b[0m \n ");
        }
        else {
            return console.log("\x1b[36mAtributo privado falso --- Não tenho novas penas. \x1b[0m\n ");
        }
    };
    return Calopsita;
}(Animal2));
var Grilo = /** @class */ (function (_super) {
    __extends(Grilo, _super);
    function Grilo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //a titulo de estudo
        _this.salta = 2;
        return _this;
    }
    Grilo.prototype.show = function () {
        _super.prototype.show.call(this);
        this.verificaMovimento(this.salta);
    };
    Grilo.prototype.verificaMovimento = function (salta) {
        if (salta > 0) {
            return console.log("\x1b[36m Atributo privado verdadeiro --- SALTEI.\x1b[0m \n ");
        }
        else {
            return console.log("\x1b[36mAtributo privado falso melhor --- NÃO ME MEXER. \x1b[0m\n ");
        }
    };
    return Grilo;
}(Animal2));
var meuBicho = new Calopsita("CALOPSITA", "AZUL");
//poderia ter passado pelo consrutor, mas titulo de estudo coloquei aqui
meuBicho.sono = true;
meuBicho.show();
var meuBicho2 = new Grilo("GRILO", "ROSA"); //se tivesse passado public pelo construtor seria o tereiro argumento "true or false"
//poderia ter passado pelo consrutor, mas titulo de estudo coloquei aqui
meuBicho.sono = false;
meuBicho2.show();
