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
console.log(str.indexOf("futuro")); /* IndexOf,va a buscar en str la 
primera vez que aparezca el string que yo le estoy pasando y el indice*/
