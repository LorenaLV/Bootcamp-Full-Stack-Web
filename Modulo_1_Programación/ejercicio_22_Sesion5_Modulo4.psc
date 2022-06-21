Algoritmo ejercicio_22_Sesion5_Modulo4
	
	Definir contador_mult, contador, contador_mult_o, num , limite_superior, num1 Como Entero;
	Leer num;
	leer num1;
	contador = 0;
	contador_mult = 0;
	contador_mult_o = 0;
	limite_superior = 100;
	
	Repetir
		
		
		contador = contador + 1;
		
		Si contador mod num == 0 Entonces
			
			
			Escribir "Este es multiplo de ", num , " ", contador; 
			contador_mult = contador_mult +1;
			
		FinSi
		
		
		Si contador mod num1 == 0 Entonces
			
			Escribir "Este es multiplo de ", num1 , " ", contador;
			contador_mult_o = contador_mult_o +1;
			
		FinSi
		
		
		
	Hasta Que contador == limite_superior;
	
	Escribir "Total multiplo de ", num ": " ,contador_mult;
	Escribir "Total multiplo de ", num1 ":" ,contador_mult_o;
FinAlgoritmo

