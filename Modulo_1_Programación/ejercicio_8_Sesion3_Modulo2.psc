Algoritmo ejercicio_8_Sesion2_Modulo2
	//Dado el sueldo de un trabajador, aplique un incremento de sueldo
	//del 15% si el sueldo es inferior a 1000.Imprimir el nuevo sueldo.
		
	Definir sueldo , incremento Como Real;
	
	Escribir "Introduzca tu sueldo:" ;
	Leer sueldo;
	incremento= sueldo * 0.15;
	
	SI sueldo < 1000 Entonces
		
		Escribir "Su sueldo es: " sueldo + incremento;
		
	SiNo
		
		Escribir "Su sueldo es: " sueldo;
		
	FinSi
	
	
FinAlgoritmo