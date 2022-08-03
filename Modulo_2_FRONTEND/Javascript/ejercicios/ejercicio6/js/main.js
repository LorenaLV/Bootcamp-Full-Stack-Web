/*Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
con el array que nos llegue, iremos rellenando nuestra ul con
<li> con los primeros 20 elementos*/

const url1 = "https://jsonplaceholder.typicode.com/comments";
const ulList = document.querySelector(".ulList");

function newList(array) {
    //con slice divide el array y hace una copia sin modificar el original
    const newArr = array.slice(0,20);
    newArr.forEach(obj => {
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

//Apartado 2 al principio
/*const url2 = "https://jsonplaceholder.typicode.com/posts";
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
    .catch(error => console.log(error));*/

 
/*6.2 Post - Paginación del lado del cliente */

//Constantes
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Variables
let posts = []; /*Se pone vacio para que se carge con data en el fetch*/
let currentPage = 1;


//Selectores
const postsDiv = document.querySelector(".containerPost");
document.querySelectorAll(".previousBtn").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Utilidades
function fillDiv() {
    const newPagePosts = paginate(posts ,PAGE_SIZE ,currentPage);
    
    postsDiv.innerHTML = "";//Me quita los que hubiera antes y me pone los 20 siguientes
    
    newPagePosts.forEach(post => {
        postsDiv.innerHTML += `
        <h2>${post.id} ${post.title}</h2>
        <p>${post.body}</p>`
    });
}

//Se crea la función para los botones
function changePage(event) {
    if(event.target.className === "previousBtn" && currentPage > 1){
        currentPage--;
    }else if(event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
        currentPage++;
    }
    fillDiv();
}

//Hacer fetch
fetch(POSTS_URL)
.then(response => response.json())
.then(data =>{
    posts = [...data]; /*se rellena posts con data para que los datos esten disponibles fuera del fetch */
    fillDiv();
});

function paginate (array, page_size, page_number) {    
    return array.slice((page_number - 1) * page_size ,page_number * page_size);
}


//6.3 - Login y paginación desde el servidor
//Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

//Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersLi = document.querySelector("#usersLi");
document.querySelector("#loginBtn").addEventListener("click",login); 

function login(event) {
    event.preventDefault();
    const userInfo = {
    email: emailInput.value,
    password: passwordInput.value
   }
   const config = {
        method: "POST",
        headers: {
            /*Es la forma que le estamos diciendo al servidor que le enviamos json*/
            "Content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
    }
    fetch(LOGIN_URL, config)
        .then(response => response.json())
        .then(data => data.error ? alert(data.error) : fetchAllUsers());
}

async function fetchAllUsers() {
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then(data => console.log(data))

    let response = await fetch(USERS_URL);
    const data = await response.json();/*Tengo toda la info del servidor aqui*/

    let users = [];

    for(let page = 1; page <= data.total_pages; page++){
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();/*aqui guarda los datos de verdad*/
        users = users.concat(newData.data);
        //users = [...users,...newData];
    }
    usersLi.innerHTML = "";
    users.forEach(user => usersLi.innerHTML += `<li>${user.email}</li>`);
}

//Alternativa para recuperar todas las páginas de una API utilizando .then()
//con una función recursiva
/*let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(newData =>{
        users = users.concat(newData.data);

        if(newData.page < newData.total_pages){
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page +1}`);
        }else  {
            usersLi.innerHTML = "";
            users.forEach(user => usersLi.innerHTML += `<li>${user.email}</li>`);
        }
    })
}*/