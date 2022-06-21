Algoritmo EJEMPLO_DE_ARRAYS_ORDENACION_SESION10

	Definir array, tamano, aux, indice, j, i Como Entero;
	tamano = 5;
	Dimension  array[tamano];
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//ESTE Para ES EL ESTADO INICIAL DEL ARRAY
	para indice = 0 Hasta tamano -1 Hacer
		Escribir array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
	//ESTE TE ORDENA TODOS LOS NUMEROS
	Para  i = 0 Hasta tamano -2 Hacer
		// ESTE ENVIA EL NUMERO MAYOR AL FINAL
		para j = 0 hasta tamano - 2 Hacer
			si array[j] < array[j + 1] Entonces
				aux = array[j];
				array[j] = array[j +1];
				array[j + 1] = aux;
			FinSi
		FinPara
	FinPara
	//PARA PODER VERLO POR CONSOLA
	para indice = 0 Hasta tamano -1 Hacer
		Escribir array[indice], " " Sin Saltar;
	FinPara
	Escribir "";
	
FinAlgoritmo
