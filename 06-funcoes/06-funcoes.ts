// novo padrão es6
const soma = function (x: number, y: number): number {
    return x + y;
};
let num: number = soma(5, 8);
console.log(`Função soma - ${num}`);

//mesma função na forma reduzida
const funcaoReduzida = (x: number, y: number): number => x + y;
let num2: number = soma(15, 90);
console.log(`Função soma reduzida - ${num2}`);

//outra forma
let funcao = (name: string) => {
    return `testando let em função  - ${name}`;
};
let str: string = funcao("Não é que funciona mesmo! =D");
console.log(str);

//fução mais usual e mais reduzida ainda... apenas uma linha e sem tipagem
let funcaoMaisReduzidaAinda = (name) =>
    `funcao Mais Reduzida Ainda Agora o negócio está ficando bom! - ${name}`;
let teste: string = funcaoMaisReduzidaAinda(
    "Jamais esqueça do ponto e vírgula"
);
console.log(teste);

// função com parametros com padrao
let funcaoComDefault = (name: string, sobrenome = "Aff    ") => {
    return `funcao com parametro padrao  - ${name + sobrenome}`;
};
let str2: string = funcaoComDefault("Um dia descubro pra que isso serve! ¬¬ ");
let str3: string = funcaoComDefault(
    "se atente a ordem dos parameros para não passar errado! "
);
console.log(str2 + str3);

///função com parametros opcionais
let funcaoComOpcao = (name: string, sobrenome?) => {
    return `funcao com parametro opcional  - ${name + sobrenome}`;
};
let str4: string = funcaoComOpcao(
    "Não estou com vontade de passar o sobrenome ^^ "
);
let str5: string = funcaoComOpcao("eita! não é que funciona?! ");
console.log(str4 + str5);
