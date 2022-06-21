Algoritmo ejercicio_36_Sesion9_Modulo4
	
	Definir array_1, array_2,tamano, indice, multiplicacion Como Entero;
	tamano = 10;
	Dimension array_1[tamano], array_2[tamano];
	
	Para indice = 0 Hasta tamano-1 Con Paso 1 Hacer
		
		array_1[indice] =Aleatorio(1,20);
		array_2[indice] =Aleatorio(1,20);
		multiplicacion= array_1[indice] * array_2[indice];
		Escribir "Indice ", indice,": ",array_1[indice], " * ",array_2[indice]," = " multiplicacion;
		
	FinPara

FinAlgoritmo