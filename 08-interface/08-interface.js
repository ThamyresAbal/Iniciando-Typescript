/*
function show({category,product}: {category:string, product:string}){
    console.log(category)
    console.log(product)
} */
//tipando com a interface
function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
show({ category: "Categoria" });
var obj = { category: "Categoria 1", product: "Produto 1" };
// sou obrigada a implentar os elementos da interface 
// mesmo que sejam atributos ou assinaturas de métodos, regras de negócio 
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product = new Product();
product.category = "Categoria";
console.log(product.category);
