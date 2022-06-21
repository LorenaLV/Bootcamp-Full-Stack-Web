Algoritmo ejercicio_58_Sesion12_Modulo4
	
	Definir contador, matriz, tamano_paginas ,filas,columnas, pagina ,n_columnas, n_filas Como Entero;
	n_columnas = 5;
	n_filas = 4;
	tamano_paginas = 3;
	contador = 0;
	Dimension matriz[tamano_paginas,n_filas,n_columnas];
	
	
	para pagina = 0 Hasta tamano_paginas -1 Hacer
		Escribir "Pagina " pagina; 
		para filas = 0 Hasta n_filas -1 Hacer
			Escribir "Fila ", filas ": " Sin Saltar;
			para columnas= 0 hasta n_columnas -1 Hacer
				contador = contador +1;
				matriz[pagina,filas,columnas] = contador;
				Escribir matriz[pagina,filas,columnas], "  " Sin Saltar;
			FinPara
			Escribir "" ;
		FinPara
		Escribir "" ;
	FinPara
	
	
	
	
	
	
FinAlgoritmo
