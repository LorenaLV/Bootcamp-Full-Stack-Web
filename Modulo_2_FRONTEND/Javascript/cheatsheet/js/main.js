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
/*Const, en js, las constantes no nos dejan reinicializar pero 
si pueden mutar, en js no existe los datos que no pueden cambiar*/

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
person.presentarse();//Metodos de objetos

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

//Object Construtor Using Functions
function Car (brand,color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function () {
        return `This ${this.color} ${this.brand} weight ${this.weight}` +
        ` kilos and car reach up to ${this.topSpeed} kms/h`;
    }
}

const car1 = new Car("Mercedes", "red", 2000, 200);
const car2 = new Car("Volvo", "blanco", 2500, 280);
const car3 = new Car("Volkswagen", "blue", 1500, 175);
console.log(car1,car2,car3);

console.log(car2.weight);
console.log(car3.getDescription());
console.log(car1 instanceof Car);

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
//Paso a paso:
let perimeteOfSquare = function (side) {
    return side *4; //función anónima
} 
perimeteOfSquare = function (side) {return side *4;} //una única línea. 
perimeteOfSquare = (side) => {return side *4;} //sustituyo función por flecha. 
perimeteOfSquare = (side) => side *4; //si solo quiero devolver algo quito llaves y return
perimeteOfSquare = side => side *4;//Si solo tiene un param, podemos quitar paréntesis.
console.log(perimeteOfSquare(5));

//console.log(typeof function() {});
//console.log(typeof (() => {}));

//Como transformar una func anónima en func flecha
/*numbersArray.sort(function (a, b){return a - b});
let arrows = (a, b) => a - b;
numbersArray.sort(arrows);*/

console.clear();
//---------------------BUCLES------------------------
// BUCLE FOR:
for (let i = 0; i <= 10; i++ ){
    console.log(`Indice: ${i}`);
    //i muere al acabar el bucle, es un scope de bloque
}

// EJERCICIO: Definir y rellenar un array con el indice i
let numArray = [];

// for (let i = 0; i <= 10; i++ ){
//     numArray[i] = i;
//     console.log(`El array: numArray[${i}] = ${i}`);
// }
// console.log(numArray);

for (let i = 0; i <= 10; i++ ){
  numArray.push(i);
}
console.log(numArray);

// BUCLE WHILE:
let contador = 0;
while (contador <= 10){
    console.log(contador);
    contador ++;
}

// BUCLE FOR EACH:
console.log(numbersArray);
numbersArray.forEach(function (value, index){
    console.log(`Indice ${index}: ${value}`);
    /*Mi funcion que he creado es llamada para cada uno 
    de los elementos con los argumentos del propio elemento
    y su indice
    value: siempre va a ser el elemento
    index: siempre va a ser el indice tu array
    array: siempre va ser el array en sí*/
});

numbersArray.forEach((item, index) => console.log(`Indice ${index}: ${item}`));

let otherArray = [];
numbersArray.forEach(item => otherArray.push(item));
console.log(otherArray);

// FOR OF:
for (let item of numbersArray){
    //OF se pone para cualquier tipo de iterable ej:"A B C"
    console.log(item);
}

// CONTINUE:
for (let i = 0; i < 5; i++){
    if (i === 3 || i === 2){
        continue; //salta a la siguiente iteración
    }
   console.log("Using continue", i);
}

// BREAK:
let i = 0;
let k;
mainloop: while (true) {
    console.log("Outer loop" , i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop" , k);
        k++;
        if (i === 5 && k === 5){
            break mainloop; 
            // Con break sin especificar etiqueta, rompe el bucle en el que esté   
        }else if (k === 5){
            break;
        }
    }
    /*Podemos poner etiquetas a los bucles para saber el que
    queremos romper */
}

console.clear();
//---------------DOM (Document Object Model)------------------
//Basic
console.log(document);
console.log(document.domain);
document.title += " DOM";

//Selectors
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent"); //HTMLCollection
const parent1 = parents[0];
const parent2 = parents[1];
console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelector("div#grandparent>.parent>div.child#child-4");
console.log(element);

let element1 = document.querySelectorAll(".grandparent div");
console.log(element1);

//parent1.style.backgroundColor = "#ddd";
//para cambiar la propiedad hay que ponerla con las reglas camel case
const changeBackground = (element, color) => element.style.backgroundColor = color;
changeBackground(children[0],"#333");
changeBackground(parent2, "red");
changeBackground(parent2.children[1], "blue");

//Seleccionar el abuelo, y que, simplemente tengamos los hijos seleccionados
changeBackground(children[0].parentNode.parentNode, "#ddd");

/*Selecciona el hermano anterior*/
changeBackground(parent1.children[1].previousElementSibling, "#ddd");
//grandParent.children[1].previousElementSibling.lastElementChild

//Properties:
//children[0].innerHTML = "child 1 v2";
console.log(children[0].innerHTML); //innerHTML es el html con todo, sus etiquetas y su contenido
console.log(children[0].textContent);//textContent obbia las etiquetas, solo coge texto

console.clear();
/*classlist te da una lista con todas las clases*/
console.log("CLaslist: ", parent1.classList);

/*Remove: te quita la clase que tenga el parent1*/
parent1.classList.remove("bg-dark");
console.log("CLaslist: ", parent1.classList);
/*Add: te añade la clase que pongas al parent1*/
parent1.classList.add("bg-red");
console.log("CLaslist: ", parent1.classList);
/*toggle: si no tiene clase te lo añade y si tiene clase te lo quita */
parent1.classList.toggle("bg-red");

/*Se puede añadir atributos a cualquier elemento y a cualquier
atributo de html, si exite, no te lo crea y si no existe te lo crea*/
parent1.setAttribute("name", "nombre-del-parent-1");
//parent1.id = "name"; se accede a todos los atributos de html

console.clear();
// Create / Remove elements
let myDiv = document.createElement("div");//se crea elemento
myDiv.id = "new div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);// MISMO nodo con dos nombre diferentes
parent1.appendChild(myDiv);

myDiv2 = myDiv.cloneNode(true);/*Creamos un nuevo nodo a partir del original
Si le pasamos true, hacemos una copia profunda y copia la etiqueta
div con todos sus hijos, si es false solo copia el padre*/
parent2.appendChild(myDiv2);
myDiv2.textContent = "child 5";

myDiv.remove();//Te elimina el nodo completo

let myDiv3 = myDiv.cloneNode(true);
parent2.before(myDiv3);
parent2.after(myDiv.cloneNode(true)); //Te lo clona y crea despues

/*EJERCICIO: Crear una funcion que me devuelva un nodo nuevo y que reciba etiqueta e id*/
function createNode (tag, id){
    let mydiv4 = document.createElement(tag);
    mydiv4.id = id;
    return mydiv4;
}

let nuevoNodo = createNode("div", "newNodo4");
parent1.appendChild(nuevoNodo);

let link = createNode("a", "newLink");
link.textContent = "Enlace new";
link.setAttribute("href", "https://www.google.com/");
grandParent.appendChild(link);

//--------------------------EVENTOS------------------------
const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function(event){
    console.log(event.target);
    // con target podemos saber que elemento ha disparado el evento
    console.log(event.target.tagName);

    if(event.ctrlKey){
        document.body.classList.toggle("bg-red");
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Alt: ${event.altKey}.  Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput = document.querySelector("#emailInput");
//Aqui no hace falta [0] porque es solo un selector y te devuelve un unico elemento

emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);
function inputListener(e) {
   
    console.log("Tipo de evento:", e.type); 
    
    
    // if(e.type === "focus"){
    //     e.target.classList.add("bg-red");

    // } else if (e.type === "blur") {
    //     e.target.classList.remove("bg-red");
    // }
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value;
    //propiedad value: va a ser el valor de lo que tiene el input
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

function coords (e) {
    const h1 = document.querySelectorAll("h1")[3];
    h1.textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}
document.body.addEventListener("mousemove", coords);




//Array.from(family).forEach(item => console.log(item));
/*He parseado family para que me devuelva un array y 
ya pueda utilizar foreach, para que, me imprima por ejemplo
todos los div*/

// for (let familyMember of family){
//     console.log(familyMember);
//     /*Con el of HTMCollection se puede iterar, no hace falta
//     que sea un array, ya que, no es un array y es otra cosa que se
//     puede iterar, saldrá lo mismo */
// }
