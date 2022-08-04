//muito parecido com java mesmo

class Animal {
  //name:string;
  //color:string;

  //só a tituo de aprendizado
  constructor(public name: string, public color: string) {
    //console.log("texto de teste")
  }
}
let myAnimal: Animal = new Animal("Gato", "rosa");
console.log(myAnimal.name);
console.log(myAnimal.color);
