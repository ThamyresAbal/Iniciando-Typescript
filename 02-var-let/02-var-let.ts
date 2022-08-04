//treino de escopo de variavel

function showWithVar() {
    var text = " var -> iniciei variavel e continuei ocupando espaço";
    if (true) {
        var text = " var -> mudei meu valor por que ainda existo em memória";
    }
    console.log(text)
}
function showWithLet() {
    let text = "let -> iniciei variavel, não troco meu valor por nada";
    if (true) {
        let text = "não existo em memória e nem fora desse if, galera";
    }
    console.log(text)
}
showWithVar()
showWithLet()