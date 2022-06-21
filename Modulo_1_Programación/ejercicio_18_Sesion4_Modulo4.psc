Algoritmo ejercicio_18_Sesion4_Modulo4
	
	Definir  cantidad, suma, contador, n_pares Como Entero;
	Leer cantidad;
	contador = cantidad;
	//contador es mi numero incial
	suma= 0;
	n_pares= 0;
	Mientras n_pares < cantidad Hacer
		
		contador = contador +1;
		SI contador mod 2 == 0 Entonces
			
			n_pares = n_pares + 1;
			Escribir contador;
			suma = contador + suma;
			
		FinSi
		
	FinMientras
	
	Escribir "La suma total es: " suma;
	
	
FinAlgoritmo