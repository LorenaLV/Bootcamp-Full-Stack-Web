Algoritmo ejercicio_30_Sesion7_Modulo4
	
	Definir filas, columnas, vuelta_fila, contador Como Entero;
	Escribir "Dime el numero de filas";
	Leer filas;
	vuelta_fila= 1;
	
	//APARTADO A)
	Para vuelta_fila = 1 Hasta filas Hacer
		
		Para columnas = 1 Hasta vuelta_fila Hacer
			Escribir columnas  Sin Saltar;
		FinPara
		
		Escribir " ";
		
	FinPara
	
	Escribir "-------------------------------------------";
	//APARTADO B)
	Para vuelta_fila = 1 Hasta filas Hacer
		
		Para columnas = 1 Hasta vuelta_fila Hacer
			Escribir vuelta_fila Sin Saltar;
		FinPara
		
		Escribir " ";
		
	FinPara
	
	Escribir "-------------------------------------------";
	
	contador= 1;
	//APARTADO C)
	Para vuelta_fila = 1 Hasta filas Hacer
		
		Para columnas = 1 Hasta vuelta_fila Hacer
			
			Escribir contador, " "Sin Saltar;
			contador= contador + 1;
		FinPara
		
		Escribir " ";
		
	FinPara
	
	
	
FinAlgoritmo