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
const boton = document.getElementsByTagName("button")[0];
boton.addEventListener("click", function (event){
    document.body.classList.toggle("body");
})

/*APARTADO 3: Partimos de un HTML con una lista de 3 URLs 
(texto) de imágenes y un element img. Al hacer click en
cada URL, cambiará la imagen a la que contenga dicha URL*/
const listaImagenes = document.querySelectorAll("li>span")[0];
console.log(listaImagenes);
const imagenes = document.querySelector("#src");
console.log(imagenes);
function aparecerImagen(listaImagenes) {
    console.log(imagenes.id = listaImagenes.textContent);

    
}
listaImagenes.addEventListener("click",aparecerImagen);

/*APARTADO 7: Partiendo de una lista ul, crear 10 li con un texto 
indicando el número del elemento (“Elemento X”)usando un 
bucle for */
let ul = document.querySelector(".liElementos");
for (let i = 1; i<= 10; i++) {
    let liTexto = document.createElement("li");
    liTexto.textContent = `Elemento ${i}`;
    ul.appendChild(liTexto);
}