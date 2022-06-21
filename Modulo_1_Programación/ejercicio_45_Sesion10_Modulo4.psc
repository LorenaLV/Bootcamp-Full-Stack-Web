Algoritmo ejercicio_45_Sesion10_Modulo4
	
	Definir array_1,array_2,num_aleatorio, tamano,i,contador, indice_array_2 Como Entero;
	tamano = 10;
	Dimension array_1[tamano], array_2[tamano];
	indice_array_2 = 0;
	
	para i = 0 Hasta tamano - 1 Hacer
		//RELLENAR EL PRIMER ARRAY CON NUMEROS ALEATORIOS
		num_aleatorio = Aleatorio(1,100);
		array_1[i] = num_aleatorio;
		Escribir array_1[i] " " Sin Saltar;
		
		//RELLENAR EL SEGUNDO ARRAY
		si array_1[i] mod 2 == 0 y array_1[i] > 25 Entonces
			array_2[indice_array_2] = array_1[i];
			indice_array_2 = indice_array_2 +1;
			
		FinSi
		
	FinPara
	
	Escribir "";
	
	para i = 0 Hasta indice_array_2 -1 Hacer
		Escribir array_2[i] " " Sin Saltar;
	FinPara
	Escribir "";
	
FinAlgoritmo
