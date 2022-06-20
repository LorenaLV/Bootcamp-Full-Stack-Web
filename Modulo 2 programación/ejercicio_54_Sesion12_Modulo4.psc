Funcion return = numeros_primos (num1)
	
	Definir indice Como Entero;
	Definir return,es_primo Como Logico;
	
	es_primo = verdadero;
	
	para indice= 2 hasta num1 -1 Con Paso 1 Hacer
		
		si num1 mod indice == 0 Entonces
			
			es_primo= Falso;
			
		FinSi
	FinPara
	
	return = es_primo;
	
FinFuncion

Algoritmo ejercicio_54_Sesion12_Modulo4
	
	Definir num1,i,contador Como Entero;
	Definir condicion_primos Como Logico;
	
	contador = 0;
	
	Escribir "Dime un numero";
	Leer num1;
	
	para i = 2 Hasta num1 Hacer
		
		condicion_primos = numeros_primos(i);
		si condicion_primos  Entonces
			
			contador = contador +1;
			Escribir "El numero " i, " es primo";
			
		FinSi
	FinPara
	
	Escribir "Antes de " num1 " (incluyendo N ) hay " contador, " primos";
FinAlgoritmo
