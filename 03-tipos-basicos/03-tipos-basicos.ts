//boolean
let success: boolean = false //explicito
//success ="texto" nao funciona pois já foi tipado acima como bolean não como string

//numeros
let _num: 10; // posso mudar para outro tipo dentro do código
let mun: number = 56; // prevalece esse pois foi tipado com number
let num: number = 0xfa;

// string
let texto = "vamos testar";
let name2: string = "ops";

//concatenação
//deselegante
texto = " escola de typescript - " + name2;

//elegante usando o template string do es6 - use crase
texto = `escola de typescript - ${name2}`

//Array

let arraySimples = ["a", "b", "c", 4, true]; //posso misturar tipos
let arrayStrings: Array<string> = ["a", "b", "c",]; // depois de tipado somente propriedades daquele tipo

//Enum
enum estado_civil { solteira, casada, divorciada };
let meu_estado_civil: estado_civil = estado_civil.casada;
if (meu_estado_civil == estado_civil.casada) {
    console.log("Casada")
}
enum estado_civil1 { Solteira = "festa", Casada = "compromisso", Divorciada = "fim" };
let meu_estado_civil1: estado_civil1 = estado_civil1.Casada;
if (meu_estado_civil1 == estado_civil1.Casada) {
    console.log(meu_estado_civil1)
}

