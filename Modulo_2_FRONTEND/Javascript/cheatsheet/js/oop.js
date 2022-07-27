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

let mySUV = new SUV ("Audi", "Q3", 2017);