import { Fragment } from "react";
import PropType from "prop-types";

export default function FirstComponents(props) {
  console.log(props, typeof props);
  console.log(props.title);

  return (
    <Fragment>
        <h3>{props.title}</h3>
        <small>{props.date ? props.date : "No hay fecha"}</small>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum cumque, velit beatae impedit blanditiis repellat nisi eum dolor fuga porro fugit facilis facere atque placeat sequi, nobis architecto animi ratione.</p>
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