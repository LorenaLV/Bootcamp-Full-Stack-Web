//---------------USO DE JS EXTERNO-------------------------
function saludo(){
    alert("Hola desde un external script");
    console.log("Has hecho click en el externo");
}
/*document.getElementsByTagName("a").item(2).addEventListener("click", saludo);
*/
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
/*console.log(str.replaceAll("Mundo" , "futuro"));*/
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
    },
    //Para utilizar el operador ternario, hemos utilizado la funcion presentarse
    presentarse() {
        console.log(`Me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? 'soy rubio' : 'soy moreno.'} `);
    }
}
person.presentarse();

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

//This 
const person2 = {
    name: "Thomas", 
    talk(){
        //Con this estas haciendo referencia al objeto entero
        //Siempre que tengamos que hacer referencia al objeto en el que estamos
        //ponemos this
        console.log(`Me llamo ${this.name}`);
        
    }
}

console.clear();
//---------------------ARRAYS---------------------------
let selectedColors = ["red" , "blue"] //array de string
console.log(selectedColors, selectedColors.length, typeof selectedColors);

//Añadir elementos a la array, si no exite lo crea
selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);

//Añadir elementos nuevos al final del array
selectedColors.push("violet", "white");
console.log(selectedColors, selectedColors.length);

//Con pop quita el ultimo elemento del array
let removeItem = selectedColors.pop(); //POP te devuelve algo y lo puedes guardar el valor en una variable
console.log(selectedColors, selectedColors.length);

//Añadir elementos nuevos al principio del array
selectedColors.unshift("white");
console.log(selectedColors, selectedColors.length);

//Con shift quita el primer elemento del array
selectedColors.shift();
console.log(selectedColors, selectedColors.length);

//Ordena alfabeticamente
selectedColors.sort();
console.log(selectedColors, selectedColors.length);

//Busca el elemento que yo le diga () y me da el indice de ese elemento
console.log(selectedColors[selectedColors.indexOf("red") +1]);

//indexOf te dice la posicion del elemento (indice)
console.log("El rojo esta en el indice", selectedColors.indexOf("red"));

//Indice de inicio y indice de fin y te devuelve los elementos del medio
console.log(selectedColors.slice(1,3));

//Borra desde el punto en el que le digamos y llegue hasta el final
//El 1 es donde empieza a querer borrar y el 3 es la cantidad que quieres borrar
console.log(selectedColors.splice(1,1));
console.log("Los elementos borrados son:", selectedColors.splice(1,2));
console.log("El array final se ha quedado así:", selectedColors);

console.clear();
/*EJERCICIO: Crear un objeto niño que tenga las propiedades nombre, altura, genero
y amigos. Amigos estará inicialmente vacío y añadiremos
posteriormente 3 elementos con los nombres. Despues, añadiremos una
extra al inicio.
*/
let ninio = {
    nombre:"Javier",
    altura: 1.10,
    genero:"hombre",
    amigos:[],
    loseFriends() {
        this.amigos.pop();
    }
}

ninio.amigos.push("Maria", "Pepe","Jesus");
//Con push si anteriormente hay un elemento no se lo carga
console.log(ninio);

ninio.amigos.unshift("Thomas");
console.log(ninio);

ninio.loseFriends();
console.log(ninio);

console.clear();
//---------------------CONDICIONALES------------------------
//IF-ELSE
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber){
    console.log("Hey, tienes que introducir el mismo tipo");
}

// == es igual en el valor, === es igual en valor y en el tipo
if (randomNumber === guessedNumber) {   
    console.log("Has acertado el numero");
} else if (randomNumber > guessedNumber) {
    console.log("El numero secreto es mayor");
} else {
    console.log("El numero secreto es menor");
} 

//Ternary operator
let variable = 12 < 10 ? "El primero es menor" : "es mayor";
console.log(variable);
//es un if else corto, si 12 es menor que 10 entonces haz eso sino, es mayor

//SWITCH
let option = 3;
switch (option) {
    case 1:
        //Bloque de código para valor 1
        console.log("Option vale 1");
        break;
    case 2:
        //Bloque de código para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        //Bloque de código para valor 3
        console.log("Option vale 3");
        break;
    default: //De otro modo
        console.log("otra opción");
        break;       
}


console.clear();
//---------------------FUNCIONES------------------------
//NOMBRADAS:
function greet (name, lastname) {
    console.log(`Hola ${name} ${lastname}, ¿Que tal?`);
}
greet();
greet("Marcos", "Aure");

//Ejercicio: que devuelva el cuadrado de un número que recibe por parámetro
function square (num1) {
    let square = num1 * num1;
    return square;
}

console.log(square(7));

/*Las funciones de primera clase, significa que se pueden 
guardar en un variables, se puede introducir por parámetro a
otra función*/

//ANONIMA: (JS permite hacer funciones sin nombre)
let numbersArray = [5 , 51 , 1, 15 ,2];
console.log(numbersArray);
numbersArray.sort();//Me lo ordena según ASCII
console.log(numbersArray);

function orderNumbers (a, b) {
    if (a < b){
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}
//numbersArray.sort(orderNumbers);

//No se puede llamar a la función porque no tiene nombre
numbersArray.sort(function (a, b){return a - b});

console.log(typeof orderNumbers, typeof function (a, b){return a - b});

console.log(numbersArray);

console.clear();
//ARROW FUNCTIONS:
/*
    --Son anónimas.
    --Entre parentesis se pone todos los argumentos de esa función.
    --A la derecha es lo que devuelve la función, sin poner return.
*/
const perimeteOfSquare = (side) => side *4;
console.log(perimeteOfSquare(5));

console.log(typeof function() {});
console.log(typeof (() => {}));