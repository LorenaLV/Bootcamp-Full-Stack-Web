Algoritmo ejercicio_48_Sesion11_Modulo4
		
	Definir nombres, array, aux Como Caracter;
	Definir tamano,contador,i, j Como Entero;
	
	contador = 0;
	tamano = 100;
	i= 0;
	j= 0;
	Dimension array[tamano];
	
	Repetir
		Escribir "Dime el nombre";
		Leer nombres;
		
		si nombres <> "" Entonces
			array[contador] = nombres;
			contador = contador +1;
		FinSi
		
	Mientras Que nombres <> ""
	
	para i = 0 hasta contador-1 Hacer
		Escribir array[i] " " Sin Saltar ;
	FinPara
	Escribir " " ;
	
	para i = 0 hasta contador-2 Hacer
		para j= 0 Hasta contador -2 hacer 
			
			si array[j] > array[j +1] Entonces
				aux = array[j];
				array[j] = array[j+1];
				array[j+1] = aux;
			FinSi
			
		FinPara
	FinPara
	
	Escribir " ";
	
	para i = 0 hasta contador-1 Hacer
		Escribir array[i] " " Sin Saltar ;
	FinPara
	Escribir " " ;
	

FinAlgoritmo