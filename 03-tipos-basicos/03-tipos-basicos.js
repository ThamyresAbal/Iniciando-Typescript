//boolean
var success = false; //explicito
//success ="texto" nao funciona pois já foi tipado acima como bolean não como string
//numeros
var _num; // posso mudar para outro tipo dentro do código
var mun = 56; // prevalece esse pois foi tipado com number
var num = 0xfa;
// string
var texto = "vamos testar";
var name2 = "ops";
//concatenação
//deselegante
texto = " escola de typescript - " + name2;
//elegante usando o template string do es6 - use crase
texto = "escola de typescript - " + name2;
//Array
var arraySimples = ["a", "b", "c", 4, true]; //posso misturar tipos
var arrayStrings = ["a", "b", "c",]; // depois de tipado somente propriedades daquele tipo
//Enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["solteira"] = 0] = "solteira";
    estado_civil[estado_civil["casada"] = 1] = "casada";
    estado_civil[estado_civil["divorciada"] = 2] = "divorciada";
})(estado_civil || (estado_civil = {}));
;
var meu_estado_civil = estado_civil.casada;
if (meu_estado_civil == estado_civil.casada) {
    console.log("Casada");
}
var estado_civil1;
(function (estado_civil1) {
    estado_civil1["Solteira"] = "festa";
    estado_civil1["Casada"] = "compromisso";
    estado_civil1["Divorciada"] = "fim";
})(estado_civil1 || (estado_civil1 = {}));
;
var meu_estado_civil1 = estado_civil1.Casada;
if (meu_estado_civil1 == estado_civil1.Casada) {
    console.log(meu_estado_civil1);
}
