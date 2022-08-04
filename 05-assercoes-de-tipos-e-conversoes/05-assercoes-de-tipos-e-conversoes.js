//convertendo tipo ANY (qualquer coisa) em outro tipo
var meu_nome = "um passo, um soco, um roud de cada vez";
meu_nome.length;
// inserindo informações aos objetos em qualquer parte do código
var obj = {
    name: "typescript"
};
obj.texto = "escola de script";
//ou mais elegante
obj.texto = "testando...uma linguagem mais humana";
console.log(obj);
console.log(obj.name);
//convertendo numero em string
console.log("convertendo numero em string ");
var num = 2;
var numString = num + " ";
console.log(typeof numString);
//convertendo string em numero
console.log("convertendo string em numero ");
var str = "252525";
var strNum = +str;
console.log(typeof strNum);
