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
  
    if (typeof parameter === "boolean"){
        return true;
    }else {
        return false;
    }
}
console.log(funTrueFalse(false));
console.log(funTrueFalse(true));
console.log(funTrueFalse("true"));
console.log(funTrueFalse(3));