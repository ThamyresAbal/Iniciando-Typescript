//convertendo tipo ANY (qualquer coisa) em outro tipo
let meu_nome: any = "um passo, um soco, um roud de cada vez";

(<string>meu_nome).length;
// inserindo informações aos objetos em qualquer parte do código
let obj = {
  name: "typescript",
};
(<any>obj).texto = "escola de script";
//ou mais elegante
(obj as any).texto = "testando...uma linguagem mais humana";
console.log(obj);
console.log(obj.name);
//convertendo numero em string
console.log("convertendo numero em string ");
let num = 2;
let numString = num + " ";
console.log(typeof numString);
//convertendo string em numero
console.log("convertendo string em numero ");
let str = "252525";
let strNum = +str;
console.log(typeof strNum);
