/*APARTADO 1: Define e inicializa un array con 5 elementos 
string en una sola línea*/
let stringArray = ["hola","tabla","color","numero","letra"];
console.log(stringArray);

/*APARTADO 2: Define un array inicialmente vacío. Añade tres elementos de 
tipo number posteriormente. Elimina por completo el primero 
y añade dos nuevos números al inicio. En cada paso, imprime 
la longitud y el array entero por consola utilizando un 
string template del tipo: `Longitud: ${}`. */
const nArray = [];
nArray.push(1, 2, 3);//Añado 3 elementos nuevos
console.log(`La Longitud de este array es: ${nArray.length} y su contenido es:${nArray}`);
nArray.shift();//Elimina el primer elemento
console.log(`La Longitud de este array es: ${nArray.length} y su contenido es:${nArray}`);
nArray.unshift(8,3);//Añado dos elementos nuevos al inicio
console.log(`La Longitud de este array es: ${nArray.length} y su contenido es:${nArray}`);

/*APARTADO 3: Escribe una función nombrada que devuelva true
si el argumento dado es de tipo boolean y false en caso 
contrario*/
function funTrueFalse (parameter){ 
    return typeof parameter === "boolean";
}
console.log(funTrueFalse(false));
console.log(funTrueFalse(true));
console.log(funTrueFalse("true"));
console.log(funTrueFalse(3));

/*APARTADO 4: Escribe una función que devuelva la longitud 
de un string recibido por argumento*/
const longitudString = value => value.length;
console.log(longitudString("hola mundo"));

/*APARTADO 5: Crea una función de flecha que reciba una 
cantidad de minutos y lo devuelva convertido en segundos*/
const cantidadSegundos = minutos => minutos * 60;
console.log(`${cantidadSegundos(2)} segundos`);

/*APARTADO 6: Crea una función que reciba un número y 
devuelva el siguiente número par. (Si él es par, lo 
devolverá directamente)*/
const npar = function (valuePar) {
    if (valuePar % 2 == 0) {
        return valuePar;
    }else {
        return valuePar + 1;
    }
}
//const value = 5; CON OPERADOR TERNARIO
//const npar = value % 2 == 0 ? value : value + 1;
console.log(npar(5));
console.log(npar(0));
console.log(npar(4));

/*APARTADO 7: Crea una función que reciba una edad y 
devuelva la cantidad de días que esa persona ha vivido. 
Puedes obviar los años bisiestos. */
function dayLive (edad){
    return edad * 365;
}
console.log(`He vivido ${dayLive(0)} días`);

/*APARTADO 8: Crea una función que reciba un array y 
devuelva su último elemento. Prueba tu función con varios 
arrays de diferentes longitudes. */
function longArray (ultimoElement) {
    let long = ultimoElement.length - 1;
    return ultimoElement[long];
}
console.log(longArray([1,2,3,4]));
console.log(longArray([1,2]));
console.log(longArray([1]));
console.log(longArray(["h", "p"]));

/*APARTADO 9: Un granjero necesita contar la cantidad de 
patas de los animales en sus diferentes granjas muy frecuentemente, 
pero tiene tres especies: pollos (2 patas), vacas (4 patas) 
y cerdos (4 patas). Tu función recibirá la cantidad de 
animales en ese orden y devolverá la cantidad de patas 
totales */
function countlegs (pollos, vacas, cerdos) {
    let po = pollos * 2;
    let va = vacas * 4;
    let ce = cerdos * 4;
    let resultado = po + va + ce;
    return resultado;
}
//const countlegs = (pollos, vacas, cerdos) => pollos*2 + vacas*4 + cerdos*4;
console.log(`Total de ${countlegs(2,2,2)} patas`);

/*APARTADO 10: Crea una función que determine si dos datos 
recibidos por argumentos son del mismo tipo. */
function mismoTipo (dato1, dato2) {
    if (typeof dato1 === typeof dato2 ) {
        return "Son iguales";
    }else {
        return "No son iguales";
    }
}
//const mismoTipo = typeof "3" === typeof "2" ? "Son iguales" : "No son iguales";
console.log(mismoTipo("hola","hola"));
console.log(mismoTipo("h","hola"));
console.log(mismoTipo(3,"hola"));
console.log(mismoTipo(2,5));

/*APARTADO 11: Crea una función que reciba un string con una
frase y devuelva un array donde cada elemento será una
palabra de la frase original. Investigar método existente 
de los strings para este fin */
function fraseOriginal (str) {
    return str.split(" ");
}
const str2 = "Hola esto es una frase"
console.log(fraseOriginal(str2));

/*APARTADO 12: Inicializa dos objetos, address1 y address2 
con las propiedades: provincia, ciudad, municipio, código
postal, calle, número, planta, y número de puerta. */
const address1 = {
    provincia: "Cádiz",
    ciudad: "San Fernando",
    municipio: "Torreón",
    codigoPostal: 11100,
    calle: "Calle palos",
    numero: 2,
    planta: "1º",
    nPuerta: 3
}
const address2 = {
    provincia: "Sevilla",
    ciudad: "trebujena",
    municipio: "tolox",
    codigoPostal: 29030,
    calle: "Calle hormigillas",
    numero: 2,
    planta: "5º",
    nPuerta: 6
}
console.log(address2);

/*APARTADO 13: Crea una función que se llame parseDomain() que
reciba por argumento un string y devuelva un objeto con dos 
propiedades: domain y tld */
function parseDomain (stringDominio) {
    const strDomino = stringDominio.split(".")
    const dominio = {
        domain: strDomino[0],
        tld: strDomino[1]
    }
    return dominio;
}

console.log(parseDomain("codespaceacademy.com"));

/*APARTADO 14: Nos han prohibido el uso del operador de igualdad 
estricta (===), pero queremos poder seguir utilizando
dicha esa funcionalidad. Crea una función que devuelva true 
si dos números tienen el mismo valor y el mismo tipo de dato. 
Debemos usar el operador lógico “&&” */
function fnIgualdad (n1, n2) {
    if (typeof n1 == typeof n2 && n1 == n2) {
        return true
    }else {
        return false
    }
}
console.log(fnIgualdad("5",5));
console.log(fnIgualdad(5, 5));

/*APARTADO 15: Crea una función que reciba dos strings y 
devuelva true si tienen la misma longitud y false en caso
contrario */
function stringLongitud (string1, string2) {
    const array1 = string1.length;
    const array2 = string2.length;
    return array1 === array2;
}
console.log(stringLongitud("hola", "hola"));
console.log(stringLongitud("hola", "mundoNuevo"));
//const stringLongitud = (string1, string2) => string1.length === string2.length;

/*APARTADO 16: Crea una función que reciba un string y 
determine si está vacío sin utilizar la propiedad length. */
function stringVacio (stringVoid) {
    if (stringVoid === "" || stringVoid === " ") {
        return "Este string esta vacio";
    }else {
        return "No esta vacio";
    }
}
console.log(stringVacio(" "));
console.log(stringVacio(""));
console.log(stringVacio("Hola"));

/*APARTADO 17: Imprimir elemento a elemento el array del 
apartado 1 de cuatro formas diferentes:
• while
• for
• for of
• forEach.
*/
//While
let i = 0;
while (i <= stringArray.length -1) {
    console.log(stringArray[i]);
    i ++;
}
//for
