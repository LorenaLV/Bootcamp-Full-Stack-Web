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



//Se crea una función para crear una nueva fila en la tabla
function updateTable() {
    //Vaciamos el tbody por completo
    bookTbody.innerHTML = "";
    
    //Generamos de nuevo todas las filas
    booksArray.forEach(book =>{
        const tr = document.createElement("tr");
        bookTbody.appendChild(tr);
        for(const propertyName in book){
            const value = book[propertyName];
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
            if(propertyName === "price"){
                //Creamos el boton y lo añadimos a td
                const btn = document.createElement("button");
                btn.classList.add("btn btn-danger");
                btn.textContent = "Remove";
                td.appendChild(btn);
            }
        }
        
    })

    
       
}
updateTable();

