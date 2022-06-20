Algoritmo ejercicio_39_Sesion9_Modulo4
	
	Definir array_1, array_2, tamano, indice, num_array Como Entero;
	Definir check Como Logico;
	
	Escribir "Dime la longitud de los arrays";
	Leer tamano;
	Dimension array_1[tamano], array_2[tamano];
	check= Verdadero;
	
	Para indice= 0 hasta tamano -1 Hacer
		
		Escribir "Escribe el valor ", indice, " del elemento del array_1";
		Leer num_array;		
		array_1[indice]= num_array;
		
		Escribir "Escribe el valor ", indice, " del elemento del array_2";
		Leer num_array;		
		array_2[indice]= num_array;
		
		//VAN HACER IGUALES HASTA QUE UNO DE ELLOS SEA DIFERENTE Y YA SE SOBREESCRIBE LA VARIABLE CHECK
		si array_1[indice] <> array_2[indice] Entonces
			
			check= falso;
			
		FinSi
		
	FinPara
	
	//ESTO SERIA CREAR VARIABLES LOGICAS 
	Escribir "";
	
	si check Entonces
		
		Escribir "Todos los elementos del array son iguales";
		
	SiNo
		
		Escribir "Los dos arrays son diferentes";
		
	FinSi
FinAlgoritmo