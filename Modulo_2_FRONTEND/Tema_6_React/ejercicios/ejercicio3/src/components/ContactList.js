//Hemos puesto contacts como props para la desestructuracion
export default function ContactList({contacts}) {
  return (
    <div className="row">
      {contacts.map((contact, index) =>{
        return (
          <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3">
            <li className="list-group-item active">Contacto {index + 1}</li>
            <li className="list-group-item">{contact.name}</li>
            <li className="list-group-item">{contact.lastName}</li>
            <li className="list-group-item">{contact.tlf}</li>
            <li className="list-group-item">{contact.address}, {contact.cp} ,{contact.city}</li>
          </ul> 
        );
      })}
    </div>
  )
}

