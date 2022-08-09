export default function Lista(props) {
  return (
    <>
      <h2>{props.categoria}</h2>
      <ul className = "list-group">
        {/*Ponemos el json para que lo que venga de productos, que es objetos se pueda imprimir en pantalla*/}
        {props.productos.map(product => {
          return (<li key = {product.id} className = "list-group-item">
                      {/*Para que no aparezca el warning en la consola, es porque con el map
                       hay que hacer una cosa. El elemento que este por encima de todo, en este caso el unico
                       que tenemos el <li key = {name + modelo + precio}> esa key tiene que ser unico y tiene que ser cualquier tipo de dato
                       que no se va a repetir*/}
                      {product.id} {product.name} {product.marca}. precio:{product.precio} 
                  </li>)
        })}
      </ul>    
    </>
  )
}

/* DESESTRUCTURACION DE OBJETOS / ASIGNACIÓN AVANZADA
export default function Lista(props) {
  
  const {(categoria, productos)} = props;
  console.log(categoria, productos);

  return (
  <>
    <h2>{categoria}</h2>
    <ul>
      {props.productos.map(({id, name, modelo, precio })=> {
        return (<li>{id} {name} {marca}. precio:{precio} </li>)
      })}
    </ul> 
     
  </>
)
}*/