Algoritmo ejercicio_15_Sesion4_Modulo4
	//Modificar el algoritmo del ejercicio 6, 
	//de forma que, si se teclea un cero, se vuelva a pedir el
	//n�mero por teclado (as� hasta que se teclee un n�mero 
	//mayor que cero) (recuerda la estructura mientras)

	Definir num1 Como Entero;	
	Leer  num1;
	
	Repetir
		Escribir "Por favor, introduzca n�mero v�ldio";
		Leer num1;
	Mientras Que num1== 0
	
	//Mientras num1== 0  hacer
		
		//Escribir "Por favor, introduzca n�mero v�ldio";
		//Leer num1;
		
	//Fin Mientras
	
	Si num1 mod 2 == 0 Entonces
		
		Escribir "El n�mero es par";
		
	SiNo
		
		Escribir "El n�mero es impar";
		
	FinSi
	
FinAlgoritmo