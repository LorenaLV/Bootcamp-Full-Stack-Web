Funcion print_array( array, tamano )
	
	Definir  indice Como Entero;
	para indice = 0 Hasta tamano - 1 Hacer
		Escribir array[indice] " " Sin Saltar;
	FinPara
	Escribir " ";
	
FinFuncion

Algoritmo EJEMPLO_FUNCIONES3
	
	Definir array, array2,tamano, indice Como Entero;
	tamano = 10;
	Dimension array[tamano], array2[3];
	
	para indice = 0 Hasta tamano - 1 Hacer
		array[indice] = Aleatorio(1,100);
	FinPara
	
	array2[0] = 3;
	array2[1] = 2;
	array2[2] = 1;
	
	
	print_array(array, tamano);
	print_array(array2, 3);
	
	
FinAlgoritmo
