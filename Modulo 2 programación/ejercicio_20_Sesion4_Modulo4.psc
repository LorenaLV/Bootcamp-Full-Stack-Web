Algoritmo ejercicio_20_Sesion5_Modulo4
	
	Definir clave, pass Como Caracter;
	Definir contador Como Entero;
	
	Escribir "Introduzca una clave:";
	Leer clave;
	
	pass = "eureka";
	contador= 0;
	
	Mientras clave <> pass  y contador < 2 Hacer
		
		contador = contador + 1;
		Leer clave;
		
	FinMientras
	
	si clave == pass  Entonces
		
		Escribir "Tu contraseña ha sido correcta";
		
	SiNo
		
		Escribir "Has agotado tu 3 intentos";
	FinSi
	
FinAlgoritmo