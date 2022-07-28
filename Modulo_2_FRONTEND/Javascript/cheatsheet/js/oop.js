console.clear();

//Antes del ES5
function Car(brand ,model ,year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
}
let myCar = new Car ("Ford", "Mustang", 1990);
let myCar2 = new Car ("Audi", "gz", 2015);

myCar2.getAge();

console.log(myCar, myCar2);

//Esto no actualiza las instancias, esta no es la forma de hacerlo
Car.getHP = function () {
    console.log("This car has 300 horsepower");
}

/*Las propiedades de los objetos si las cambias o no existen 
te las crea. En este caso solo modifica la instacia myCar*/
myCar.getHP = function () {
    console.log("This car has 300 horsepower");
}

//Aqui afecta a todos los objetos 
Car.prototype.getHP = function () {
    console.log("This car has 400 horsepower");
}

//Nivel de Abstracción - va desde lo más concreto primero
myCar.getHP(); /*La instacia myCar ha encontrado getHP en su instancia */
myCar2.getHP();/*La instacia myCar2 ha encontrado getHP desde la superclase Car */


function SUV(brand ,model ,year, width, height) {
    Car.call(this, brand ,model ,year);
    this.width = width;
    this.height = height;
}
SUV.prototype = Object(Car.prototype); //Aqui ya existe 
let mySUV = new SUV ("Audi", "Q3", 2017, 2200, 2000);
console.log(mySUV);

mySUV.getAge();
mySUV.getHP();//No existe da error ni esta en su instancia, ni en el prototype



console.clear();
//---------------------------ES6--------------------------
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    //Aqui solo se espera funcion no hace falta poner la palabra "FUNCTION"
    getSumary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    getType (){
        console.log("I'm a normal book");
    }
}

//Los métodos no estan en la instancia, solo en la clase 
const book1 = new Book ("Metarmorphosis" ,"Franz Kafka" ,1915);
console.log(book1);

//SubClasses (Herencia)
class Magazine extends Book {

    /*Se pone el constructor para ampliar la información. Hace lo que ya
    tiene el libro y ademas lo que yo quiera */
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }

    getType(){
        //super.getType(); llama a Book y no lo sobreescribe, solo amplia el contenido
        console.log("I'm a magazine");
    }
}

//Instanciamos una revista
const mag1 = new Magazine("Super Pop" ,"Algún loco" ,2015);
mag1.getSumary();

//Esto es polimorfismo, algo con el mismo nombre puede hacer cosas diferentes
mag1.getType();
book1.getType();

//Otro ejemplo de polimorfismo
class Animal {
    constructor(type ,name ,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    makeSound(){
        console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
    }

    static compareAnimals(animal1 ,animal2){
        return animal1.type === animal2.type;
    }/*No necesito el this, no necesito ninguna instancia nueva */
}

class Cat extends Animal{
    //El name viene de cuando yo lo instancie afuera
    constructor(name){
        super("cat" , name ,"miau");
    }
}

class Dog extends Animal{
    constructor(name){
        super("dog" , name ,"woof");
    }
}

const conBotas = new Cat("con botas"); /*No ha especificado ni el tipo
ni el sonido porque ya se lo ha pasado en el super("cat" , name ,"miau");*/

const dylan = new Dog("Dylan");
const danko = new Dog("Danko");

conBotas.makeSound();
dylan.makeSound();
danko.makeSound();

//No se puede llamar a la función compareAnimals así danko.compareAnimals();
console.log(Animal.compareAnimals(dylan ,danko));
