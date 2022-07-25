/*2. Crear constructor de objeto Book*/
function Book(id ,title ,author ,sales ,price){
    this.id= id,
    this.title = title,
    this.author = author,
    this.sales = sales,
    this.price = price
}
//Data initialization
let booksArray = [
    new Book(1,"The selfish Gene" ,"Richard Dawkins" ,740120 ,12),
    new Book(2,"The God Delusion" ,"Richard Dawkins" ,610120 ,15),
    new Book(3,"La nueva mente del emperador" ,"Roger Penrose" ,120000 ,17),
    new Book(4,"Sapien: A Brief History Of Humankind" ,"Yuval Noah Harari" ,918013 ,20),
    new Book(5,"The selfish Gene" ,"Richard Dawkins" ,740120 ,12),
    new Book(6,"The God Delusion" ,"Richard Dawkins" ,610120 ,15),
    new Book(7,"La nueva mente del emperador" ,"Roger Penrose" ,120000 ,17),
    new Book(8,"Sapien: A Brief History Of Humankind" ,"Yuval Noah Harari" ,918013 ,20),
    new Book(9,"The selfish Gene" ,"Richard Dawkins" ,740120 ,12),
    new Book(10,"The God Delusion" ,"Richard Dawkins" ,610120 ,15)
];

//Selector
const bookTbody = document.getElementById("books-body");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const btnSave = document.getElementById("btnSave");

//Se crea una función para crear una nueva fila en la tabla
function updateTable() {
    bookTbody.innerHTML = "";

    booksArray.forEach(book =>{ 
       //Le añades el bloque entero más lo que tuvieras en la tabla
       //Y si pones un solo = te pone el ultimo porque irá machacando lo anterior
        bookTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class ="btn btn-danger" id ="${book.id}">Remove</button>	
            </td>

        </tr>`;    
    });   
}
//Hemos puesto el evento al body de la tabla
bookTbody.onclick = e =>{
    if(e.target.tagName === "BUTTON"){
        booksArray = booksArray.filter(book => book.id != e.target.id);
        updateTable();
    }         
};
//Llamamos a la función para que aparezca la tabla entera
updateTable();

//Añadimos un evento al botón para añadir un nuevo libro
btnSave.addEventListener("click", e =>{
    e.preventDefault();
    console.log(titleInput.value);
});






//Versión 2
/*function updateTable() {
    //Vaciamos el tbody por completo
    bookTbody.innerHTML = "";
    
    //Generamos de nuevo todas las filas
    booksArray.forEach(book =>{
        const tr = document.createElement("tr");
        for(const propertyName in book){
            const value = book[propertyName];
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);    
        }
        //Creo el boton y le añado las clases
        const newBtn = document.createElement("button");
        newBtn.classList.add("btn", "btn-danger");
        newBtn.id = book.id;
        newBtn.textContent = "Remove";
        //Le doy un evento a cada boton 
        newBtn.addEventListener("click" , e =>{
            booksArray = booksArray.filter(book => book.id != e.target.id);
            updateTable();
        });
        //El boton lo añadimos al DOM
        const td = document.createElement("td");
        tr.appendChild(td);
        td.appendChild(newBtn);        
        bookTbody.appendChild(tr);
    });   
}
updateTable();*/