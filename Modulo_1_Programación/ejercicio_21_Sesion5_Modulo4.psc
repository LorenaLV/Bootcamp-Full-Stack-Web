Algoritmo ejercicio_21_Sesion5_Modulo4
	
	Definir pedir_num , contador, suma, maximo, minimo Como Entero;
	Definir  media Como real;
	Escribir "Introduzca un numero";
	Leer pedir_num;
	
	contador= 0;
	suma = 0;
	
	Mientras pedir_num <> 0 Hacer
		//calculo de maximo
		Si  contador == 0 O pedir_num > maximo Entonces
			
			Escribir "El nuevo maximo es:" pedir_num;
			maximo = pedir_num;
			
		FinSi
		
		//calculo de minimo
		Si contador == 0 O pedir_num < minimo Entonces
			
			minimo= pedir_num;
			
		FinSi
		
		//calculo de la media
		contador= contador +1;
		suma = pedir_num + suma;
		
		//pide otro numero
		Leer pedir_num;
		
	FinMientras
	
	Si contador == 0 Entonces
		
		Escribir "Has tecleado 0";
	SiNo
		media = suma/contador;
		Escribir "Su media es: " media;
		
		Escribir "El maximo es: " maximo, " y el minimo es: " minimo;
	FinSi
	
	
	
	
FinAlgoritmo