// novo padrão es6
var soma = function (x, y) {
    return x + y;
};
var num = soma(5, 8);
console.log("Fun\u00E7\u00E3o soma - " + num);
//mesma função na forma reduzida
var funcaoReduzida = function (x, y) { return x + y; };
var num2 = soma(15, 90);
console.log("Fun\u00E7\u00E3o soma reduzida - " + num2);
//outra forma
var funcao = function (name) {
    return "testando let em fun\u00E7\u00E3o  - " + name;
};
var str = funcao("Não é que funciona mesmo! =D");
console.log(str);
//fução mais usual e mais reduzida ainda... apenas uma linha e sem tipagem
var funcaoMaisReduzidaAinda = function (name) { return "funcao Mais Reduzida Ainda Agora o neg\u00F3cio est\u00E1 ficando bom! - " + name; };
var teste = funcaoMaisReduzidaAinda("Jamais esqueça do ponto e vírgula");
console.log(teste);
// função com parametros com padrao
var funcaoComDefault = function (name, sobrenome) {
    if (sobrenome === void 0) { sobrenome = "Aff    "; }
    return "funcao com parametro padrao  - " + (name + sobrenome);
};
var str2 = funcaoComDefault("Um dia descubro pra que isso serve! ¬¬ ");
var str3 = funcaoComDefault("se atente a ordem dos parameros para não passar errado! ");
console.log(str2 + str3);
///função com parametros opcionais
var funcaoComOpcao = function (name, sobrenome) {
    return "funcao com parametro opcional  - " + (name + sobrenome);
};
var str4 = funcaoComOpcao("Não estou com vontade de passar o sobrenome ^^ ");
var str5 = funcaoComOpcao("eita! não é que funciona?! ");
console.log(str4 + str5);
