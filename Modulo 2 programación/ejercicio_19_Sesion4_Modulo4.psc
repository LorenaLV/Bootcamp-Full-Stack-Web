Algoritmo ejercicio_19_Sesion4_Modulo4
	
	Definir pedir_num , suma, total, contador Como Entero;
	
	Escribir "Introduzca un numero";
	Leer pedir_num;	
	
	suma= 0;
	contador = 0;
	
	Si  pedir_num >= 0 Entonces
		
		Mientras  pedir_num >= 0  Hacer
			
			contador = contador + 1;
			suma = pedir_num + suma;
			Leer pedir_num;
			
			
		FinMientras
		
		total = suma /contador;
		Escribir "La media es:  " total;
		
	SiNo
		
		Escribir "Has introducido un numero negativo " ;
		
		
	FinSi
	
FinAlgoritmo