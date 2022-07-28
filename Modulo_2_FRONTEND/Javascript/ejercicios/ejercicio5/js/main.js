/*Crea nuestra clase book*/
class Book {
    constructor(id, title, author, sales, price) {
        this.id = id,
        this.title = title,
        this.author = author,
        this.sales = sales,
        this.price = price;
    }
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

/*Creamos un nuevo array para que al filtrar no se pierda el original */
let displayedBooks = booksArray;



//Selectors
const bookTbody = document.getElementById("books-body");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const btnSave = document.getElementById("btnSave");

function updateTable() {
    bookTbody.innerHTML = "";

    displayedBooks.forEach(book =>{ 

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
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }         
};
//Llamamos a la función para que aparezca la tabla entera
updateTable();


//Ejercicio 5
let filterInput = document.querySelector("#filterInput");


/*si pongo displayedBooks = displayedBooks.filter al buscar en 
el input te sale los que coincida en la tabla pero displayedBooks
cambia y se sobre escribe y pierde todos los que no coincidieran con la
palabra que hayas puesto en el input. Si borras letras va a filtrar
a partir de los que le quede porque ha sido modificado y no puede
volver a la lista entera de la tabla . Por eso siempre se quiere partir
del completo(booksArray) y va cambiando todo el rato displayedBooks*/

filterInput.addEventListener("input", e =>{
    /*Version 1 teniendo en cuenta las Mayúsculas (case sensitive) */
    displayedBooks = booksArray.filter(book => book.title.includes(e.target.value));
    
    /*Version 2 teniendo en cuenta las minúsculas*/
    displayedBooks = booksArray.filter(book => {
        return book.title.includes(e.target.value)
    });
    
    updateTable();
});

