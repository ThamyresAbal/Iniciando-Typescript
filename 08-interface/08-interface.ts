interface ObjectValue{
    category:String
    product?:string
}
/* 
function show({category,product}: {category:string, product:string}){
    console.log(category)
    console.log(product)
} */


//tipando com a interface
function show({category,product}: ObjectValue){
    console.log(category)
    console.log(product)
}
show({category:"Categoria"});

let obj: ObjectValue = { category:"Categoria 1", product:"Produto 1"};


// sou obrigada a implentar os elementos da interface 
// mesmo que sejam atributos ou assinaturas de métodos, regras de negócio 
class Product implements ObjectValue{
    category: String;
    //product:string
}
let product = new Product();
product.category = "Categoria";
console.log(product.category)
