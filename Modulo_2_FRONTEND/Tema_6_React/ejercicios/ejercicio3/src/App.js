import './App.css';
import ContactList from './components/ContactList';
import NewContactForm from './components/NewContactForm';

function App() {

  const contacts = [
    {id:"Contacto-1", name: "Juan", lastName: "Gonzalez", address:"PuertoVanus", city:"Malaga", cp:29001, tlf:678001122},
    {id: "Contacto-2", name: "Maria", lastName: "Perez", address:"PlazaMina", city:"Sevilla", cp:34550, tlf:635901100},
    {id: "Contacto-2", name: "Alba", lastName: "Martinez", address:"Tolox", city:"Madrid", cp:11200, tlf:623002277},
  ];

  return (
    <div className="App">
      <ContactList contacts = {contacts}/>
      <NewContactForm />
    </div>
  );
}

export default App;
