import { Fragment } from "react";
import PropType from "prop-types";

export default function FirstComponents(props) {
  
  //console.log(props, typeof props);
  //console.log(props.title);
  
  //Eventos
  const myFunction = function (bookID){
    return function (event) {
      console.log(bookID, event.target);
    }
  };

  return (
    <Fragment>
        <h3>{props.title}</h3>
        <small>{props.date ? props.date : "No hay fecha"}</small>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button onClick={myFunction(5)}>Click me!</button>
    </Fragment>
  )
}
// export default FirstComponents; Alternativa
// Solo se puede un export por archivo

//Esto son para poner valores por defecto si no le pasamos ese props
FirstComponents.defaultProps = {
  title: "Sin titulo",
  date: "Sin fecha",
  producto: []
}

//Para especificar los tipo de datos de los props
FirstComponents.propTypes = {
  title: PropType.string.isRequired,
  date: PropType.string,
  producto:PropType.array
}


function SecondComponents() {
  return (
    //Esta es la forma corta utilizando el fragment sin importarlo arriba
    <>
      <h2>Soy otro componente</h2>
    </>
  )
}

function ThirdComponent() {
  return (
    <div>
      <h2>Soy otro componente más</h2>
    </div>
  )
}

export {SecondComponents, ThirdComponent};