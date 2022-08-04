//treino de escopo de variavel
function showWithVar() {
    var text = " var -> iniciei variavel e continuei ocupando espaço";
    if (true) {
        var text = " var -> mudei meu valor por que ainda existo em memória";
    }
    console.log(text);
}
function showWithLet() {
    var text = "let -> iniciei variavel, não troco meu valor por nada";
    if (true) {
        var text_1 = "não existo em memória e nem fora desse if, galera";
    }
    console.log(text);
}
showWithVar();
showWithLet();
