
export default function NewContactForm() {
  return (
    <form className="form-group">
      <input className="form control mb-3" type="text" placeholder="Introduce el nombre"/>
      <input className="form control mb-3" type="text" placeholder="Introduce los apellidos"/>
      <input className="form control mb-3" type="text" placeholder="Introduce el telefono"/>
      <input className="form control mb-3" type="text" placeholder="Introduce la dirección"/>
      <input className="form control mb-3" type="text" placeholder="Introduce el codigo postal"/>
      <input className="form control mb-3" type="text" placeholder="Introduce la ciudad"/>
      <input type="submit" className="btn btn-success" value ="Registrar"/>
    </form>
  )
}

