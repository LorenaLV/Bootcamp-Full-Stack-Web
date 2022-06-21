Algoritmo ejercicio_41_Sesion9_Modulo4
	
	Definir contador1,array_1, tamano, indice,num_array, contador, suma, suma1 Como Entero;
	Definir promedio, promedio1 Como Real;
	
	Escribir "Dime el tamaño del array";
	Leer tamano;
	Dimension array_1[tamano];
	contador= 0;
	suma = 0;
	suma1 = 0;
	contador1= 0;
	
	para indice = 0 Hasta tamano -1 Hacer
		
		num_array = Aleatorio(-15,15);
		array_1[indice]=num_array;
		Escribir array_1[indice];
		
		Si array_1[indice] >= 0 Entonces
			
			suma = suma + array_1[indice];
			contador= contador + 1;
			
		FinSi
		suma1 = array_1[indice] +suma1 ;
		
	FinPara
	
	promedio = suma /contador;
	promedio1 = suma1 /tamano;
	
	Escribir " APARTADO A) "; 
	Escribir "Hay ", contador " numeros mayores que 0";
	Escribir "APARTADO B) " ;
	Escribir "El promedio de los positivos es ", promedio;
	Escribir "APARTADO C) " ;
	Escribir "El promedio de todos los es ", promedio1;
	
FinAlgoritmo