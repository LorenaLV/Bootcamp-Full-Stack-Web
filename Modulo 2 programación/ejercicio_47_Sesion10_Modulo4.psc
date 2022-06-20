Algoritmo ejercicio_47_Sesion10_Modulo4
	
	Definir array1, num_aleatorio, tamano,i, j,aux Como Entero;
	tamano = 5;
	Dimension array1[tamano];
	
	Escribir "Estado inicial: ";
	para i = 0 Hasta tamano -1 Hacer
		
		num_aleatorio = Aleatorio(1,100);
		array1[i] = num_aleatorio;
		Escribir array1[i], " " Sin Saltar;
	FinPara
	
	Escribir " ";
	
	para j = 0 hasta tamano - 2 Hacer
		para i = 0 Hasta tamano -2 Hacer
			si array1[i] > array1[i +1] Entonces
				aux = array1[i];
				array1[i] = array1[i +1];
				array1[i +1] = aux;
			FinSi
		FinPara
	FinPara
	
	
	Escribir "Estado actual: ";
	Para i = 0 Hasta tamano -1 Hacer
		Escribir array1[i], " " Sin Saltar;
	FinPara
	
FinAlgoritmo