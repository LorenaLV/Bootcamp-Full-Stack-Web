Algoritmo ejercicio_29_Sesion7_Modulo4
	
	Definir  n_numero, contador, factorial Como Entero;
	
	Escribir "Escribe el numero";
	Leer n_numero;
	factorial= 1;
	
	Para contador = 1 Hasta n_numero Hacer
		
		//por cada vuelta acumula la multiplicacion
		factorial = factorial * contador;
		
		
	FinPara
	
	Escribir "Factorial de " n_numero " es: ",factorial;
	
FinAlgoritmo