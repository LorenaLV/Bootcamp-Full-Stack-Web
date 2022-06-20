Algoritmo ejercicio_24_Sesion6_Modulo4
	
	Definir nombre Como Caracter;
	Definir problema, teoria, practica, nota_final Como real;
	
	//Pide el nombre del alumno
	Escribir "Introduzca tu nombre";
	Leer nombre;
	
	Mientras nombre == "" Hacer
		
		Escribir "Su nombre esta vacio, por favor introduzcalo correcto";
		Leer nombre;
		
	FinMientras
	//hace un bucle para pedirte el nombre, hasta que no este vacio
	Mientras nombre <> "" Hacer
		
		//Pide las notas del alumno
		Escribir "Introduzca tus notas";
		Leer problema, teoria, practica;
		
		//Hace un si y comprueba si sus notas son por debajo de 0 o mayor que 10
		Si  (problema < 0 y problema > 10) y (teoria < 0 y teoria >10) y (practica < 0 y practica >10) Entonces
			
			Escribir "Error algunas de tus notas son incorrectas";
			Escribir "Vuelve a introducir tu nombre";
			Leer nombre;
			
		SiNo
			problema = problema * 0.5;
			teoria = problema * 0.4;
			practica = practica * 0.1;
			
			nota_final= problema + teoria + practica /3;
			
			Escribir "Tu nota fina es: " nota_final;
			
			
		FinSi
		
		Escribir "Siguiente alumno, introduzca tu nombre";
		Leer nombre;
	FinMientras


FinAlgoritmo
