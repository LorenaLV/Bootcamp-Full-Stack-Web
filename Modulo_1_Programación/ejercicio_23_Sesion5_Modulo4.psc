Algoritmo ejercicio_23_Sesion5_Modulo4
	
	Definir dia, mes, year Como Entero;
	
	Escribir "Dime un dia";
	Leer dia;
	Escribir "Dime un mes";
	Leer mes;
	Escribir "Dime un año";
	Leer year;
	
	Mientras dia == 0 o mes == 0 o year == 0 Hacer
		
		Escribir "Error introduzca una fecha correcta";
		Leer dia;
		Leer mes;
		Leer year;
		
	FinMientras
	
	Si dia <= 31  y  mes <=12 Entonces
		
		Segun mes Hacer
			
			1:
				Escribir dia, " de Enero del " , year;
			2:
				Escribir dia, " de Febrero del ", year;
			3:
				Escribir dia, " de Marzo del ", year;
			4:
				Escribir dia, " de Abril del ", year;
			5:
				Escribir dia, " de Mayo del ", year;
			6:
				Escribir dia, " de Junio del ", year;
			7:
				Escribir dia, " de Julio del ", year;
			8:
				Escribir dia, " de Agosto del ", year;
			9:
				Escribir dia, " de Septiembre del ", year;
			10:
				Escribir dia, " de Octubre del ", year;
			11:
				Escribir dia, " de Noviembre del ", year;
			12:
				Escribir dia, " de Diciembre del ", year;
			
		FinSegun
		
		
		
	FinSi
	
	
FinAlgoritmo