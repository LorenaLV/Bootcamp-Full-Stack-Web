Algoritmo ejercicio_17_Sesion4_Modulo4
	
	Definir suma, num_vueltas , contador Como Entero;
	Leer num_vueltas;
	
	contador = 1;
	suma= 0;
	
	//contador va a valer 1 y el numero de vueltas las introduce manual
	Mientras contador <= num_vueltas Hacer
		
		Escribir contador;
		suma = contador + suma;
		
		contador = contador +1;
		
	FinMientras
	
	Escribir "La suma total es: " suma;
	
FinAlgoritmo
