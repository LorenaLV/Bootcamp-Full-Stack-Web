Algoritmo ejercicio_46_Sesion10_Modulo4
	
	Definir a, array, tamano, i, j Como Entero;
	tamano = 3;
	Dimension array[tamano];
	array[0] = 1;
	array[1] = 3;
	array[2] = 5;
	
	para j = 0 hasta tamano -2 Hacer
		para i = 0 Hasta tamano - 2 Hacer
			si array[i] < array[i +1] Entonces
				a = array[i];
				array[i] = array[i +1];
				array[i +1] = a;
				
			FinSi
		FinPara
	FinPara
	
	
	para i = 0 Hasta tamano -1 Hacer
		Escribir array[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	
	
FinAlgoritmo