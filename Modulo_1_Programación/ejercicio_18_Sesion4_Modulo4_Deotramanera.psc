Algoritmo ejercicio_18_Sesion4_Modulo4
	
	Definir contador, N, numero_inicial, suma Como Entero;
	
	Escribir "Escribir la cantidad de numeros pares a procesar";
	Leer N;
	
	numero_inicial= N;
	contador= 0;
	suma = 0;
	//Si el numero inicial es impar, lo convierto al siguiente par.
	Si numero_inicial mod 2 <> 0 Entonces
		
		numero_inicial= numero_inicial + 1;
		
	FinSi
	
	Escribir "La suma de " Sin Saltar;
	
	Mientras contador < N Hacer
		
		Escribir numero_inicial, " " Sin Saltar;
		suma= numero_inicial + suma;
		
		//Como nos aseguramos que el primero fuera par,
		//ahora solo tengo que saltar de 2 en 2 veces
		numero_inicial= numero_inicial + 2;
		contador= contador + 1;
		
	FinMientras
	
	Escribir "es: ", suma;
	
FinAlgoritmo

