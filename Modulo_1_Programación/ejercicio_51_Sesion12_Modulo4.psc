Algoritmo ejercicio_51_Sesion12_Modulo4
	
	Definir num1, indice Como Entero;
	Definir es_primo Como Logico;
	
	Escribir "Dime un numero";
	Leer num1;
	indice = 2;
	es_primo = Verdadero;
	
	para indice= 2 hasta num1 -1 Con Paso 1 Hacer
		
		si num1 mod indice == 0 Entonces
			
			es_primo= Falso;
			
		FinSi
	FinPara
	
	si es_primo Entonces
		
		Escribir num1 " Es primo";
	sino 	
		Escribir num1 " No es primo";
	FinSi
	
FinAlgoritmo
