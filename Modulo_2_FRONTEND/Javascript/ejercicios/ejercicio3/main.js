/*APARTADO 1: Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000*/
let employees = [];
for (let i = 1; i <= 100; i++){
    employees.push( {
        cargo: `Empleado ${i}`,
        Rendimiento: Number(Math.random().toFixed(2)),//toFixed para redondear a 2 decimales
        Salario: Math.floor(Math.random() * (4000 -1250) + 1250)
    });
}
console.log("Generacion del array", employees);

//APARTADO 1.1 Con un constructor
function Employee(cargo ,rendimiento, salario) {
    this.cargo = cargo,
    this.rendimiento = rendimiento,
    this.salario = salario
}
employees = [];
for (let i = 1; i <= 100; i++){
    employees.push(new Employee (
        `Empleado ${i}`, 
        Number(Math.random().toFixed(2)),
        Math.floor(Math.random() * (4000 -1250) + 1250) 
    ));
}
//console.log("Generacion del array", employees);

/*APARTADO 2: Ordenar el array por rendimiento e imprimirlo.
Usar una función anónima como callback. */
employees.sort(function (empl1, empl2) {return empl1.rendimiento - empl2.rendimiento});
//console.log("Generacion del array", employees);

/*APARTADO 3: Ordenar el array por salario e imprimirlo. 
Usar una función de flecha */
employees.sort((empl1, empl2) => empl1.salario - empl2.salario);
console.log("Generacion del array", employees);

/*APARTADO 4: Ordenar el array por el número de empleado de forma 
decreciente. El número de empleado sólo estará dentro del 
string Cargo. Usar una función nombrada como callback.*/
