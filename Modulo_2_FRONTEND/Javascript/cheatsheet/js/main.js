//---------------USO DE JS EXTERNO-------------------------
function saludo(){
    alert("Hola desde un external script");
    console.log("Has hecho click en el externo");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//---------------DEPURACION / LOGGING-----------------------
//alert("Mensaje");
//console.log("Mensaje"); para saber que esta pasando en un momento determinado.

//---------------VARIABLES-----------------------
/*var -> function scope (tiene un ambito scope de la funcion 
en la que este, cuando acaba la función es cuando muere)*/
//let / const -> block scope

function saludar(){
    console.log("Inicial: ", contador);

    //comprobar con var y con let y ver diferencias
    for (var contador = 0; contador < 3; contador++){
        console.log(contador);
    }
    /*dará not defined porque las variables (let) que nacen en un bloque
    (Todo lo que este dentro de unas {}), en un for, una funcion, etc, estas nacen y mueren ahi*/
    console.log("Final: ", contador);
}
saludar();

console.clear();
//Inicialización
let day;
day = 5;

let monthName = "Octubre"; //Definimos e inicializamos a la vez

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //Avanzada

// Const -> block scope
const x = 1;
//const y; // no te deja solo definirlo
/* x = 2; TypeError: invalid assignment to const 'x' */

console.clear();
//---------------TIPOS DE DATOS---------------------------
//TIPOS PRIMITIVOS:
let str = String("I'm another string");
let str2 = "I'm another string";  //Recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log( undef,typeof undef); 
/* sale undefined, es cuando una variable no esta 
inicializada,esta definida pero no tiene valor y tanto su 
valor como su tipo es undefined */

let selectedColor = null; //Para limpiar una variable y quitarle el valor que tuviera antes
console.log(selectedColor,typeof selectedColor);
/*tipo real sería un objeto*/

console.clear();
//TIPOS OBJETOS:
array =  Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array2, typeof array);

console.log(typeof new Date("2022-07-01")); //te da objetos
console.log(typeof new Error("Mensaje de error"));

console.clear();
//---------------STRINGS--------------------------------
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente")); /* IndexOf,va a buscar en str la 
primera vez que aparezca el string que yo le estoy pasando y el indice*/
console.log("La ultima ocurrencia de 'u' esta en el indice", str.lastIndexOf("u"));

console.log(str.substring(1,3));

console.log("Hola mundo".concat(". Adios mundo"));
console.log("Hola mundo" + ". Adios mundo"); //Equivalente a concat
str = str + ", Adios mundo";
str += ", Adios mundo";

console.log(str);
console.log(str.replace("futuro" , "Mundo"));
console.log(str.replaceAll("Mundo" , "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(Object(String("Hola"))); //Aqui te imprime el prototype string

console.log(`El dia de mi cumpleaños es ${day}.`);//String template, se define con las comillas dobladas
console.log("El dia de mi cumpleaños es" , day, "." );

console.clear();
//PARSING/ casting (Cambiar el tipo de datos)
let number = Number("1000s"); 
//Lo parsea a numero, si le das otra cosa sale "NaN" (Not a number) no genera error
console.log(number, typeof number);

number = Number("1000"); 
console.log(number, typeof number);

number += "1000"; //Entiende que es una concatenación, no una suma
console.log(number , typeof number);

console.log("1" + 1, "1" - 1);//Peculariedad de JS


console.clear();
//----------------------OBJECTS---------------------------
//Un objeto se crea con la llave
let person = {
    //Propiedades
    name: "John", 
    age: 30,
    blonde: false,
    walk: function () {
        //como se hacia antes (Pre-ES6)
        console.log("Hey, estoy saltando ahora mismo");
    },
    jump() {
        //como se hace ahora (ES6)
        console.log("Hey, estoy saltando");
    }
}

//Acceso por punto / Dot notation
console.log(person); //imprimir el objeto
console.log(`Se llama  ${person.name} y tiene ${person.age} años`); 
//Todo lo que haya dentro de `` se convierte a string

person.name = "Jane"; //modificando la propiedad
console.log(person);
console.log(`Se llama  ${person.name} y tiene ${person.age} años`);

//Acceso por corchete / Brackets notation
let propertyName = "age"; 
console.log(person[propertyName]);

//Ampliación / Añadir propiedades a tu objeto
person.children = ["Martha","Peter"];
console.log(person);
console.log(person.children[0], person.children[1]);

//Llamar a los metodos de los objetos / acciones de los objetos
person.jump();
person.walk();

console.log(typeof {}, typeof [], typeof "");