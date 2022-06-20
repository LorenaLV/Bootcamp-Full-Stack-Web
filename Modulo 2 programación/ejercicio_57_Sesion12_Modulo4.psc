Algoritmo ejercicio_57_Sesion12_Modulo4
	
	Definir matriz, columna, fila,tamano Como Entero;
	Definir es_simetrica Como Logico;
	
	es_simetrica = Verdadero;
	tamano = 3;
	Dimension matriz[tamano,tamano];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	para fila = 0 Hasta tamano -1 Hacer	
		para columna = 0 Hasta tamano -1 Hacer
			
			Escribir matriz[fila , columna] " "Sin Saltar;
			
		FinPara
		Escribir "";
	FinPara
	

	para fila = 0 Hasta tamano -1 Hacer	
		para columna = 0 Hasta tamano -1 Hacer
			
			si matriz[fila,columna] <> matriz[columna,fila] Entonces	
				es_simetrica = falso;
			FinSi
		FinPara
		Escribir "";
	FinPara
	
	si es_simetrica Entonces
		
		Escribir "Es simetrica";
	SiNo
		Escribir "No es simetrica";
		
	FinSi
	

	
	
	
FinAlgoritmo
