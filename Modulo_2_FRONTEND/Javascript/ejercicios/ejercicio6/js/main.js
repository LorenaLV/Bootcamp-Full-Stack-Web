/*Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
con el array que nos llegue, iremos rellenando nuestra ul con
<li> con los primeros 20 elementos*/

const url1 = "https://jsonplaceholder.typicode.com/comments";
const ulList = document.querySelector(".ulList");

function newList(array) {
    //con slice divide el array y hace una copia sin modificar el original
    const newArray = array.slice(0,20);
    newArray.forEach(obj => {
        ulList.innerHTML += `<li>${obj.name}</li>`
    });
}

fetch(url1)
    .then(response => {
        if(!response.ok){
            throw Error("Hay algún problema con la respuesta: " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        newList(data);
    })
    .catch(error =>console.log(error));

//Apartado 2
const url2 = "https://jsonplaceholder.typicode.com/posts";
const containerPost = document.querySelector(".containerPost");

function newPost(arrayPost) {
    arrayPost.slice(0,20).forEach(objPost =>{
        containerPost.innerHTML += `
        <h2>${objPost.title}</h2>
        <p>${objPost.body}</p>`
    }); 
}

fetch(url2)
    .then(response => {
        if(!response.ok){
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        newPost(data);
    })
    .catch(error => console.log(error));