Algoritmo ejercicio_12_Sesion4_Modulo4
	
	Definir numero_sonido, temperatura Como real;
	
	Escribir "Dime el número de sonidos:";
	Leer numero_sonido;	
	temperatura = n/4 + 40;
	
	Si numero_sonido <= 0 Entonces
		
		Escribir "Da error, sonidos 0";
		
	SiNo
		
		Escribir "La temperatura es: " temperatura;
		
	FinSi
	
FinAlgoritmo