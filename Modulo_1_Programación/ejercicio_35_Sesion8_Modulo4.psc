Algoritmo ejercicio_35_Sesion8_Modulo4
	
	Definir mi_array, tamano, indice, num_aleatorio, suma Como Entero;
	Leer tamano;
	Dimension mi_array[tamano];
	suma = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		num_aleatorio = Aleatorio(0,9);
		mi_array[indice] = num_aleatorio;
		
	FinPara
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "El indice es ", indice ," y su valor es " mi_array[indice];
		suma = suma + mi_array[indice];
		
	FinPara
	
	Escribir "";
	
	Escribir "La suma total del array es: " suma;	
	
FinAlgoritmo