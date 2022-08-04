//muito parecido com java mesmo
var Animal = /** @class */ (function () {
    //name:string;
    //color:string;
    //só a tituo de aprendizado
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        //console.log("texto de teste")
    }
    return Animal;
}());
var myAnimal = new Animal("Gato", "rosa");
console.log(myAnimal.name);
console.log(myAnimal.color);
