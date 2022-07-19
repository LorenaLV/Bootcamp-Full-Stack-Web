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

//iteramos sobre todas las key del objeto con el for..In
for(const propertyName in users[0]){
    const value = users[0][propertyName];
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
/*
for (const key of Object.Key(users[0])){
y ya se puede utilizar el of para el objeto en concreto
}
*/

//Añadir listeners necesarios
select.addEventListener("change", changeUsers);

func