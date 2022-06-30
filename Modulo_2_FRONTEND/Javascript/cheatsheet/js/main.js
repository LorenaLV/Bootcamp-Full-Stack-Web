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

