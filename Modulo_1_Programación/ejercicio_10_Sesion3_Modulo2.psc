Algoritmo ejercicio_10_Sesion3_Modulo2
	//dado la categoría y sueldo de un trabajador calcule el aumento
	//de sueldo correspondiente teniendo en cuenta la siguiente tabla. 
	//Imprimir la categoría del trabajador y su nuevo sueldo.
	
	Definir categoria, sueldo ,incremento Como real;
	
	Escribir "¿Cual es tu categoria?";
	Leer categoria;
	
	Escribir "¿Cual es tu sueldo?";
	Leer sueldo;
	
	Segun categoria Hacer
		 1:
			incremento = sueldo * 1.15;
			Escribir "Su sueldo es: " incremento;
		 2:
			 incremento = sueldo * 1.1;
			 Escribir "Su sueldo es: " incremento;
		 3:
			 incremento = sueldo * 1.06;
			 Escribir "Su sueldo es: " incremento;
			 
		 4:
			 incremento = sueldo * 1.03;
			 Escribir "Su sueldo es: " incremento;
			 
		De Otro Modo:
			
			Escribir "Su categoria no es válida" ;
	Fin Segun
	
	
FinAlgoritmo