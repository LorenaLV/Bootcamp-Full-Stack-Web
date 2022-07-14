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
    } //return stringVoid ? false: true;
    /*
    se pone la variable sin hacer ninguna validación
    stringVoid es de tipo string, se puede evaluar dentro
    de condiciones (valores falsy 0, "" [] {} NaN)
    if (stringVoid){
        return true
    }else { 
        return false
    } */
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
for (i = 0; i <= stringArray.length -1; i++) {
    console.log(stringArray[i]);
}
//for of
for (i of stringArray) {
    console.log(i);
}
//forEach
stringArray.forEach(function (index) {
    console.log(stringArray[index]);
})

/*APARTADO 18: Crea una función que reciba un string y un 
número N y devuelva el string original repetido N veces.
*/
//const repeatString = (repetirString, repetirN) => repetirString.repeat(repetirN);
function repeatString(repetirString, repetirN) {
    const repetirCadena = repetirString.repeat(repetirN);
    return repetirCadena;
}
console.log(repeatString("hola mundo ",2));

/*APARTADO 19: Crea una función que recibe un objeto con 
dos campos, votos positivos y votos negativos y que devuelva
la cuenta final. */
function getVoteCount (obj) {
    return obj.upVotes - obj.downVotes
}
//console.log(getVoteCount({upVotes:20, downVotes:10}));
const votes = {upVotes:35, downVotes: 15};
console.log(getVoteCount(votes));

/*APARTADO 20: Crea una función que recibe un array de tipos 
de datos mezclados y que devuelva otro array con el tipo
de cada uno de los elementos. */
function getTypes (typeArrays) {
    const otroArrays = [];
    for (i of typeArrays) {
        otroArrays.push(typeof i);
    }
    return otroArrays;
}
console.log(getTypes(["hola",undefined,3, {}]));

/*APARTADO 21: Función que dado un array de números con formato 
string devuelva un array con los números ya parseados */
function getParsedNumbers(parsedArray) {
    const arrayParsed = [];
    for(i of parsedArray){
        arrayParsed.push(Number(i));
    }
    return arrayParsed;
}
console.log(getParsedNumbers(["2.5","3","8"]));

/*APARTADO 22: Crea una función de flecha que devuelva “Positivo” 
si el número que recibe por argumento es mayor o igual que 
cero y “Negativo” en caso contrario. Usa el operador ternario.
*/
const fnFlecha = nu1 => nu1 >= 0 ? "Positivo" : "Negativo";
console.log(fnFlecha(-3));

/*APARTADO 23: Crea una función que dado un array cualquiera
y un índice, borre el elemento guardado en ese índice */
function borrarNum (arr1,indx) {
    arr1.splice(indx,1);
    return arr1;
}
console.log(borrarNum(["tres","ocho","palo","bola"],1));

/*APARTADO 24: Usando la función del apartado anterior, 
crea otra función que dado un array de números y un número a
filtrar, devuelva un array borrando todos las apariciones de 
dicho número. */
function filterNumber(arr1,numberToFilter) {
    arr1.forEach((element, index) => {
        if(element === numberToFilter) {
            borrarNum(arr1,index);
        }
    });
}
const arrayFiltered = [1,5,6,7,5];
filterNumber(arrayFiltered, 5);
console.log(arrayFiltered);

/*APARTADO 25: Crea dos funciones que recibirán un objeto, la 
primera devolverá un array con los nombres de todas sus
propiedades. La segunda devolverá un array con los valores 
de dichas propiedades. Investigar los métodos keys y values 
del prototipo de Object.*/
function objArrayValue(obj1) {
    const resultado = Object.values(obj1);
    return resultado;
}
console.log(objArrayValue({name:"hola", edad:3}));

function objArrayKeys(obj1) {
    const resultado = Object.keys(obj1);
    return resultado;
}
console.log(objArrayKeys({name:"Maria", edad:10}));

/*APARTADO 26: Crea una función que invierta un string.*/
const stringReverse = cadena => {
    let nuevaCadena = "";
    for (let x = cadena.length - 1; x >= 0; x--) {
        nuevaCadena += cadena[x]; //va a concatenar lo que tuviera nuevaCadena
    }
    return nuevaCadena;
}
console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));

/*APARTADO 27: Crea una función que compare strings sin 
tener en cuenta las mayúsculas / minúsculas. */
function compareString (strg1, strg2) {
    if (strg1.toLowerCase() === strg2.toLowerCase()){
        return true;
    } else {
        return false;
    }
} 
console.log(compareString("HOLOOA", "HOLA"));

/*APARTADO 28: Crea una función que convierta en mayúscula 
sólo la primera letra de cada palabra de un string dado. El
apartado 11 será de ayuda. Investigar cómo unir un array de 
strings en un único string. */
function capitalize(str) {
    const convertir = str.split(" ");
    for(let i = 0; i <= convertir.length-1; i++){
        const word = convertir[i];
        const initial = word[0];
        convertir[i] = initial.toUpperCase() + word.substring(1);
    }
    return convertir.join(" ");
}
console.log(capitalize("hola mundo"));

/*APARTADO 29: Crea una función en una única línea que reciba 
un valor lógico y devuelva el opuesto. */
const logicoContrario = boolean => !boolean;// me va a devolver lo contrario
console.log(logicoContrario(true));
console.log(logicoContrario(false));