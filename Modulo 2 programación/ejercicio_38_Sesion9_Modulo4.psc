Algoritmo ejercicio_38_Sesion9_Modulo4
	
	Definir array_1, array_2 ,indice , tamano Como Entero;
	tamano = 5;
	Dimension array_1[tamano], array_2[tamano];
	
	para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		array_1[indice]= indice +1; //AQUI ACCEDES A LA POSICION Y LO INICIALIZAS AL INDICE
		Escribir "El indice es ", indice,": " , array_1[indice];
		
	FinPara
	Escribir "--------------------------------------";
	para indice = 0 Hasta tamano -1 Con Paso 1 Hacer
		
		array_2[indice]= array_1[tamano -1-indice];
		Escribir "El indice es ", indice,": " , array_2[indice];
		
	FinPara
	
FinAlgoritmo