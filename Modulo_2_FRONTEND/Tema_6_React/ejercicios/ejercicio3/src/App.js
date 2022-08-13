import { useState } from "react";
import './App.css';
import ContactList from './components/ContactList';
import NewContactForm from './components/NewContactForm';


function App() {

  const initialContactsState = [
    {name: "Juan", lastName: "Gonzalez", address:"Calle PuertoVanus", city:"Malaga", cp:29001, tlf:678001122},
    {name: "Maria", lastName: "Perez", address:"La Plaza Mina", city:"Sevilla", cp:34550, tlf:635901100},
    {name: "Alba", lastName: "Martinez", address:"Avd, Tolox", city:"Madrid", cp:11200, tlf:623002277},
  ];

  //Vamos a crear un estado donde el valor inicial sea el array de contactos, en este caso es initialState.
  //contacts es mi variable para acceder a ella y setContacts para modificarla
  const [contacts, setContacts] = useState(initialContactsState);

  

  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
      <ContactList contacts = {contacts}/>
      <h2 className="my-4">Nuevo contacto</h2>
      <NewContactForm />
    </div>
  );
}

export default App;
