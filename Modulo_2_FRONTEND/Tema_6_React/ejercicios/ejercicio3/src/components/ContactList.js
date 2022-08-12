//Hemos puesto contacts como props para la desestructuracion
export default function ContactList({contacts}) {
  return (
    <>
      {contacts.map(contact =>{
        return (  
          <ul className= "list-group">
            <li className= "list-group-item-active w-50 m-auto">{contact.id}</li>
            <li className= "list-group-item">{contact.name}</li>
            <li className= "list-group-item">{contact.lastName}</li>
            <li className= "list-group-item">{contact.address}</li>
            <li className= "list-group-item">{contact.city}</li>
            <li className= "list-group-item">{contact.cp}</li>
            <li className= "list-group-item">{contact.tlf}</li>
          </ul>
        );
      })}
    </>
  )
}

