Funcion return = si_existe(array,tamano,num_aleatorio)
	Definir return Como Logico;
	Definir j Como Entero;
	
	return = falso;
	
	para j = 0 Hasta tamano -1 Con Paso 1 Hacer
		si array[j]  == num_aleatorio Entonces
			return = Verdadero;
		FinSi
	FinPara
	
FinFuncion

Algoritmo ejercicio_40_Sesion9_Modulo4
	//Generar un array de 20 elementos con números 
	//aleatorios no repetidos entre sí.
	Definir array, i,tamano,num_aleatorio Como Entero;
	tamano = 20;
	Dimension array[tamano];
	
	para i = 0 hasta tamano -1 Hacer
		
		Repetir
			num_aleatorio = Aleatorio(1,20);
		Mientras Que si_existe(array,i,num_aleatorio);
		
		array[i]= num_aleatorio;
		Escribir array[i] " " Sin Saltar;
	FinPara
	
FinAlgoritmo
