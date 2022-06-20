Funcion return = promedio(array , tamano)
	//el parametro array se le puede dar el nombre que quiera 
	//solo va a existir aqui en la funcion
	Definir indice, contador Como Entero;
	Definir return Como Real;
	contador = 0;
	
	para indice = 0 hasta tamano -1 Hacer
		//Escribir array[indice] " " Sin Saltar;
		contador = contador + array[indice];
	FinPara
	return = contador/tamano;
	
FinFuncion

Algoritmo ejercicio_53_Sesion12_Modulo4
	
	Definir array,num, tamano, indice Como Entero;
	
	Escribir "introduce el tamaño del ARRAY";
	Leer tamano;
	
	Dimension array[tamano];
	
	para indice = 0 hasta tamano -1 Hacer
		
		Escribir "Dime un numero";
		Leer num;
		array[indice] = num;
		
	FinPara
	Escribir "-------------------------------------------------";
	
	Escribir "El promedio de este ARRAY es: ", promedio(array, tamano);
	
FinAlgoritmo
