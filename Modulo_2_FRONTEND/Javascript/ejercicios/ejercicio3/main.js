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
//console.log("Generacion del array", employees);

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
employees.sort( function (empl1, empl2) {
    return empl1.rendimiento - empl2.rendimiento
});
//console.log("Generacion del array", employees);

/*APARTADO 3: Ordenar el array por salario e imprimirlo. 
Usar una función de flecha */
employees.sort((empl1, empl2) => empl1.salario - empl2.salario);
//console.log("Generacion del array", employees);

/*APARTADO 4: Ordenar el array por el número de empleado de forma 
decreciente. El número de empleado sólo estará dentro del 
string Cargo. Usar una función nombrada como callback.*/
employees.sort(function (empl1, empl2) {
    return empl2.cargo.slice(9)- empl1.cargo.slice(9);
    return empl2.cargo.replace("Empleado ", "")- empl1.cargo.replace("Empleado ", "")
    return empl2.cargo.split(" ")[1]- empl1.cargo.split(" ")[1];//Alternativa  
});
//console.log("Generacion del array", employees);

/*APARTADO 5:Usando filter: imprimir el cargo y salario de 
los que cobren más de 2500€. */
employees
    .filter(empl1 => empl1.salario > 2500)
    .forEach(employ => console.log(employ.cargo, employ.salario));
/*Con el filter me devuelve un array nuevo filtrado con la condición que le digamos
y luego aplicamos un forEach para que te imprima el cargo y salario */



/*APARTADO 6: Usando map: subir el sueldo un 25% a los que 
cobren menos de 1500€ y volver a hacer el punto 5. */
employees.map(empl => {
    if(empl.salario < 1500) {
        empl.salario = empl.salario * 1.25;
    }
    return empl;   
});
//console.log("Generacion del array", employees);



/*APARTADO 7: Usando reduce: Obtener el coste total de todos 
los sueldos para la empresa teniendo en cuenta que a la 
empresa le cuesta tener un empleado su sueldo más un 15% 
por impuestos. */
let totalCost = employees.reduce((salarySum, empl) => salarySum + (empl.salario * 1.15), 0);
//console.log(totalCost);



/*APARTADO 8: Usar el método o métodos (reduce / map / filter 
/ sort) que determinemos oportuno e imprimir en cada apartado:
• Despedir a los que tengan un rendimiento menor a 0.3.*/
let employeers = employees.filter(empl => empl.rendimiento >= 0.3);
console.log("8.1: Despedir a los que tienen rendimiento 0.3: ",employeers);
/*100 empleado no se pone porque antes hemos filtrado y 
serían menos empleados  con .length te da todo lo que hay 
en ese momento en employees*/




//• Calcular el sueldo medio de la empresa.
let salarybase = employees.reduce((salarySum, empl) => salarySum + empl.salario, 0) / employees.length;
console.log("La media de la empresa es: ",salarybase);




//Subir el sueldo de los que tengan un rendimiento superior a 0.7.
// employees.map(empl =>{
//     if(empl.rendimiento > 0.7){
//         empl.salario = empl.salario * 1.25;
//     }
//     return empl;
// });

employees.forEach(empl => {
    if(empl.rendimiento > 0.7){
        empl.salario = empl.salario * 1.25;
        console.log("Subir el sueldo de : ", empl.cargo);
    }
})

console.log("Subir el sueldo de los que tenga rendimiento 0.7 ",employees);