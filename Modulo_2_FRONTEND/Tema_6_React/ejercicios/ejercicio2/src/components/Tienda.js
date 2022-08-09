import Lista from "./Lista"; /*No hemos puesto components en la ruta porque esta al mismo nivel*/

export default function Tienda() {
    const tienda = {
      electronica:[
        {id: 27, name: "Televisor", marca: "LG", modelo: "XP7302", precio: 399},
        {id: 28, name: "Equipo Hi-Fi", marca: "Samsung", modelo: "VF235", precio: 179},
        {id: 29, name: "Televisor", marca: "Sony", modelo: "Bravia-173", precio: 498},
      ],
      alimentacion: [
        {id: 30, name: "Galletas", marca: "María" , precio: 0.90},
        {id: 31, name: "Ensalada", marca: "Imizurra" , precio: 1.30},
        {id: 32, name: "Patatas", marca: "McKain", precio: 0.90},
        {id: 33, name: "Pasta", marca: "Gallo", precio: 0.90},
      ],
      mascotas: [
        {id: 34, name: "Croquetas para gato", marca: "Purina" , precio: 4.90},
        {id: 35, name: "Arena de gato", marca: "Limpior", precio: 1.10},
      ]
    };

  return (
    <div>
      <Lista categoria = "Electronica" productos= {tienda.electronica}/>
      <Lista categoria = "Alimentación" productos= {tienda.alimentacion}/>
      <Lista categoria = "Mascotas" productos= {tienda.mascotas}/>
    </div>
  )
}
