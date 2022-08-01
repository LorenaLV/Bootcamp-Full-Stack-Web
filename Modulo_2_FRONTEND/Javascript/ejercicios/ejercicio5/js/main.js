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

/*Creamos un nuevo array(una copia bien hecha) para que al filtrar no se pierda el original */
let displayedBooks = [...booksArray];
//o let displayedBooks = Array.from(booksArray);


//Selectors
const bookTbody = document.getElementById("books-body");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const btnSave = document.getElementById("btnSave");

const tfoot = document.querySelector("tfoot");

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
    const totalPrice = displayedBooks.reduce((sum, book) => sum + book.price, 0);
    tfoot.textContent =`Precio total: ${totalPrice}`;
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

btnSave.addEventListener("click", e =>{
    e.preventDefault(); 
    
    const newID = booksArray[booksArray.length - 1].id + 1;
    const newBook = new Book(newID, titleInput.value, authorInput.value, salesInput.value, priceInput.value);
    
    /*Se lo añadimos al original para que este array tenga 
    todo siempre */
    booksArray.push(newBook);
    
    /*Se lo añadimos también al nuevo para verlo por pantalla, 
    porque si no, no vemos el cambio en pantalla */
    displayedBooks.push(newBook);   
    updateTable();

   btnSave.parentNode.reset();
});


//Ejercicio 5
let filterInput = document.querySelector("#filterInput");
let priceHeader = document.querySelector("#priceHeader");

let ascendingOrder = true;

/*si pongo displayedBooks = displayedBooks.filter(), al buscar en 
el input te sale los que coincida en la tabla pero displayedBooks
cambia y se sobreescribe y pierde todos los que no coincidieran con la
palabra que hayas puesto en el input. Si borras letras va a filtrar
a partir de los que le quede porque ha sido modificado y no puede
volver a la lista entera de la tabla. Por eso siempre se quiere partir
del completo(booksArray) y va cambiando todo el rato displayedBooks*/

//APARTADO 2
filterInput.addEventListener("input", e =>{
    /*Versión 1 - Teniendo en cuenta las Mayúsculas (case sensitive) */
    displayedBooks = booksArray.filter(book => book.title.includes(e.target.value));
    //Para tener en cuenta otro campo, incluimos en la condición lo siguiente:
    //  || book.author.includes(e.target.value);


    /*Versión 2 - Sin tener en cuenta las mayúsculas*/
    displayedBooks = booksArray.filter(book => {
        const upperTitle = book.title.toUpperCase(); //El titulo convertido a mayúscula
        const upperInputValue = e.target.value.toUpperCase();
        
        return upperTitle.includes(upperInputValue);
    });
    
    updateTable();
});

//APARTADO 3
priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;
    
    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;";

    displayedBooks.sort((book1 , book2) => {
        return ascendingOrder ? book1.price - book2.price : book2.price - book1.price;
    });
    updateTable();
});


