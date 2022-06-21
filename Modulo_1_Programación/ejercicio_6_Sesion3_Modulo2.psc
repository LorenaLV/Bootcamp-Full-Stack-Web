Algoritmo ejercicio_6_Sesion2_Modulo2
	
	Definir num1 Como Entero;
	Definir total Como Entero;
	Leer  num1;
	total= num1 mod 2;
	
	Si num1 == 0 Entonces
		
		Escribir "Es nulo";
		
	SiNo
		Si total == 0 Entonces
			
			Escribir "Es par";
			
		SiNo
			
			Escribir "Es impar";
			
		FinSi
		
	FinSi
	
FinAlgoritmo