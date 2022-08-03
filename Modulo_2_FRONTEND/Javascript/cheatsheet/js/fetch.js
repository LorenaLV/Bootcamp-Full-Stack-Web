const url = "https://jsonplaceholder.typicode.com/users";

function printNames1(array) {
    array.forEach(obj => {
        for(property in obj){
            //console.log(property);
        }
    });
}
const printNames = array => array.forEach(user => console.log(user.name));
const printCity = array => array.forEach(user => console.log(user.city));
const printLat = array => array.forEach(user => console.log(user.address.geo.lat));

//fetch(url).then(r => r.json()).then(data => console.log(data));


/*El metodo "then" se aplica solo a promesas, el codigo se 
va a ejecutar cuando la promesa sea resuelta. Todo then necesita
una función callback (promesa en cuanto te resuelvas, quiero que
me ejecute lo que hay adentro)*/
fetch(url)
    .then(response => {
        if(!response.ok ){
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();/*Te devuelve otra promesa */
    })
    .then(data => {
        printNames1(data);
        printNames(data);
        printCity(data);
        printLat(data);
        /*Hay que hacer otro then para que te devuelva los datos*/
    })
    .catch(error =>console.log(error));


//Async / await - Alternativa a then
/*Con la palabra reservado await, lo que estoy haciendo sobre
una promesa, es esperar a que se resuelva y bloquear el código
ahí a proposito*/

/*Cada vez que pongas un fetch en el código va a hacer una 
petición al servidor diferente, (pidiendo los datos 2 veces)*/

async function requestURL(URL) {
    /*Con await lo bloquea a proposito, y response no es una
    promesa, sino que, es la respuesta */
    console.log(2);
    const response = await fetch(url);
    const data = await response.json();

    printNames(data);
    printCity(data);
    printLat(data);
  
    console.log(4);    
}
console.log(1);
requestURL(url);
console.log(3);


//Petición con método HTTP POST en lugar de GET
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

//Este objeto es el que vamos a enviar
const newPost = {
    title: "mi título",
    body: "El cuerpo de publicación"
}

const http = {
    /*Las propiedades siempre se tienen que llamar así */
    method: "POST",
    headers: {
        /*como tiene un - se pone en string, también pasa con el 5 */
        "Content-type": "application/json"
    },
    /*Esta propiedad será la que se envie */
    body: JSON.stringify(newPost)/*Esto convierte el objeto en json */
};

fetch(POST_URL, http)
    .then(response => response.json()).then(data => console.log(data));