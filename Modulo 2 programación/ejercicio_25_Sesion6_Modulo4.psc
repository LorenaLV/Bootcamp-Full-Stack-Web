Algoritmo ejercicio_25_Sesion6_Modulo4
	
	Definir columnas , filas, lados Como Entero;
	Escribir "Dime el numero de lados";
	Leer lados;
	
	Para filas = 1 Hasta lados Con Paso 1 Hacer
		
		Para columnas = 1 Hasta lados Con Paso 1 Hacer
			
			Si (filas == 1 o filas >= lados) o (columnas==1 o columnas ==lados) Entonces
				
				Escribir "* " Sin Saltar;
			SiNo
				
				Escribir "  " Sin Saltar;
				
			FinSi
			
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo