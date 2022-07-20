//Constructor
function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    }
}
//Rellenar el array con varios usuarios
const users = [
    new User("Fran", "Gómez", "Fernandez" ,"fgomez@gmail.com", 33, "Málaga"),
    new User("Lucia", "Garcia", "Ruiz" ,"lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado" ,"mnuñez@gmail.com", 18, "Albacete")
];

//Selectors
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

//Rellenamos el select con el nombre de usuario
users.forEach(user =>{
    const nombre = user.name;//obtenemos el nombre de cada objecto
    const options = document.createElement("option");
    options.textContent = nombre;
    select.appendChild(options);
})

function fillList(user1) {
    list.innerHTML= ""; //Se carga todo lo que tenia antes
    //iteramos sobre todas las key del objeto con el for..In
    for(const propertyName in user1){
        const value = user1[propertyName];
        /*console.log(`key: ${key}, value: ${users[0][key]}`);
        accedemos al primer objeto y si no sabemos el nombre de la propiedad
        accedemos por []*/
        if(typeof value !== "function"){
            const newLi = document.createElement("li");
            newLi.innerHTML = `<b>${propertyName} :</b> ${value}`;
            newLi.classList.add("list-group-item");//Añadimos la clase de bootstrap
            list.appendChild(newLi);
        }     
    }
}
/*
for (const key of Object.Key(users[0])){
y ya se puede utilizar el of para el objeto en concreto
}
*/
//Estado inicial
fillList(users[0]); //Esto es para que aparezca el primer usuario siempre y no salga vacia

function processProduct(e) {
    const selectUsers = users.find(user => user.name === select.value);  
    if(e.target.id === "incrementButton"){
        selectUsers.incrementProducts();
    }else {
        selectUsers.emptyProducts();
    }
    fillList(selectUsers);
}

//Añadir listeners necesarios
select.addEventListener("change", e =>{
    const selectUsers = users.find(user => user.name === select.value);  
    /*find se le pasa una funcion nuestra, y lo unico que tiene
    que devolver o él espera es true o false en función de la
    condicion que le pongamos*/       
    fillList(selectUsers);
});

incrementButton.addEventListener("click",processProduct);
emptyButton.addEventListener("click",processProduct);

