/* APARTADO 1: Partimos de un HTML con un div vacío. 
Con JS, añadir dos elementos p con un texto dentro.
*/
const elementParent = document.getElementsByClassName("container-1")[0];

let elementParrafo1 = document.createElement("p");
elementParrafo1.textContent = "Parrafo 1: Lorem ipsum";

let elementParrafo2 = document.createElement("p");
elementParrafo2.textContent = "Parrafo 2: Lorem ipsum";

elementParent.appendChild(elementParrafo1);
elementParent.appendChild(elementParrafo2);
//Si queremos anexar multiples elementos, ponemos append
//elementParent.append(elementParrafo1, elementParrafo2);

/*APARTADO 2: Al pulsar un botón, cambiar el color del fondo del cuerpo 
de HTML.
 */
//button.addEventListener("click", () => document.body.style.backgroundColor = "red"); ALTERNATIVO
const boton = document.getElementsByTagName("button")[0];
boton.addEventListener("click", function (){
    document.body.classList.toggle("body");
})

/*APARTADO 3: Partimos de un HTML con una lista de 3 URLs 
(texto) de imágenes y un element img. Al hacer click en
cada URL, cambiará la imagen a la que contenga dicha URL*/
const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

//versión simplificada 2
const list = document.querySelector("ul");

//const changeImage = (e) => image.src = e.target.textContent;

list.addEventListener ("click", changeImage);


/*APARTADO 4: Añadir un input de tipo texto y un botón. 
Al pulsar el botón debe escribirse el texto del input en un 
párrafo.4.2 Añadir un nuevo input pero esta vez cambiará el 
texto con cada pulsación de tecla del usuario.*/
const textInput = document.querySelector("#inputText");
const btnTexto = document.querySelector(".btn1");
const p1 = document.querySelector(".crearParrafo");

btnTexto.addEventListener("click", () => {
    p1.textContent = textInput.value;
    textInput.value = "";

});

//APARTADO 4.2
const p2 = document.querySelector(".crearParrafo2");
const inputPress = document.querySelector("#inputPressTecla");
//Con el evento input, da igual si el texto viene del raton, de un copia y pega etc
inputPress.addEventListener("input", () => p2.textContent = inputPress.value);

/*APARTADO 5: De forma similar al anterior, pero para un 
textarea y validará si lo introducido es mayor de 15 
caracteres */
const textarea = document.getElementById("textareaToValidate");
let conteo = 0;
textarea.addEventListener("input", e => {
    if(e.target.value.length > 15){
        //value te devuelve un string y luego utiliza length para contarlo 
        e.target.style.color = "red";
    }else {
        e.target.style.color = "green";
    }
    //OPERADOR TERNARIO
    //e.target.style.color = e.target.value.length > 15 ? "red" : "green";
});

/*APARTADO 6: Añadir un input de tipo texto con leyenda: 
“Escribir un número par”. Añadir un botón. Al pulsar el 
botón nos validará si el número es par o no. En caso 
negativo, cambiar los bordes del input a rojo.
Para revertir el estado de una propiedad, podemos utilizar 
el valor “revert” o dejarla vacío. */
const evenInput = document.getElementById("evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () =>{
    if(evenInput.value % 2 === 0){
        evenInput.style.border = "";
    }else {
        evenInput.style.border = "2px solid red";
    }
});

/*APARTADO 7: Partiendo de una lista ul, crear 10 li con un texto 
indicando el número del elemento (“Elemento X”)usando un 
bucle for */
let ul = document.querySelector(".liElementos");
for (let i = 1; i<= 10; i++) {
    let liTexto = document.createElement("li");
    liTexto.textContent = `Elemento ${i}`;
    ul.appendChild(liTexto);
}

/*APARTADO 8: Crear un enlace y un botón. Si pulso el enlace 
se me abre la URL en la misma página. Si pulso primero el
botón y luego el enlace, se me abre en una nueva pestaña */
const btnEnlace = document.querySelector(".btnEnlace");
const link = document.querySelector("a");

btnEnlace.addEventListener("click", () => {
    link.target = "_blank";
    //Aqui target es un atributo de los enlaces en el html
});

/*APARTADO 9: Añadir un párrafo y un select con 5 opciones de 
colores: negro, blanco, rojo, amarillo, verde y azul. Al
seleccionar un color del select, cambiar el color del 
párrafo. */
const parrafoColor = document.querySelector(".parrafoColor");
const selectColores = document.getElementById("colors");
selectColores.addEventListener("change", e =>{
    parrafoColor.style.color = e.target.value;
});

/*APARTADO 10: Incluir un botón que al pulsarlo genere un 
número aleatorio y mantenga en una lista actualiza el número
de elementos que se han generado, los que son pares y los 
que son impares */
const btnAleatorio = document.querySelector(".btnAleatorio");
const numAleatorio = document.getElementById("numberRandom");
const numtotales = document.getElementById("numberTotal");
const numImpar = document.getElementById("numberImpar");
const numPar = document.getElementById("numberPar");

btnAleatorio.addEventListener("click", ()=> {;
    let aleatori = Math.random() *100;
    let random = Math.floor(aleatori);

    numAleatorio.textContent = random;
    numtotales.textContent = parseInt(numtotales.textContent) + 1;

    random % 2 === 0 ? numPar.textContent++ : numImpar.textContent++;
    //esto es un ifelse operador ternario
});

/*APARTADO 11: Construir una lista que tenga números. Añadir 
un input donde poder añadir números y un botón. Al pulsar
el botón, si el número ya existe en la lista, mostrar un 
mensaje de error, si no existe, lo añadirá al principio.*/
const listaNumeros = document.querySelector(".listNumber");
console.log(listaNumeros);