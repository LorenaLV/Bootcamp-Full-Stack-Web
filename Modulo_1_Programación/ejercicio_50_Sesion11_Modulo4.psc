Algoritmo ejercicio_50_Sesion11_Modulo4
	
	Definir frase, letra Como Caracter;
	Definir indice, contador Como Entero;
	
	Escribir "Escribe una frase";
	Leer frase;
	
	Escribir "Escribe la letra que quieres que cuente";
	Leer letra;
	
	contador = 0;
	
	para indice = 0 hasta longitud(frase)-1 Hacer
		
		si Mayusculas(Subcadena(frase, indice,indice)) == Mayusculas(letra) Entonces
			
			contador = contador +1;
			
		FinSi
	FinPara
	
	Escribir "La letra " letra " aparece " contador " veces";
	
FinAlgoritmo
