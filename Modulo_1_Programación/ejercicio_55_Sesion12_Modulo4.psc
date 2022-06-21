Algoritmo ejercicio_55_Sesion12_Modulo4
	
	Definir matriz, filas,columnas, n_columnas, n_filas Como Entero;
	n_columnas = 5;
	n_filas = 4;
	Dimension matriz[n_filas,n_columnas];
	
	
	para filas = 0 Hasta n_filas -1 Hacer
		
		para columnas= 0 hasta n_columnas -1 Hacer
			
			matriz[filas,columnas] = Aleatorio(1,100);
			Escribir matriz[filas,columnas], "  " Sin Saltar;
			
		FinPara
		
		Escribir "" ;
	FinPara
	
	
	
	
//	Escribir " A " " B " " C " " D " " E ";
//	Escribir " F1 " " F2 " " F3 " " F4 ";
	

FinAlgoritmo


