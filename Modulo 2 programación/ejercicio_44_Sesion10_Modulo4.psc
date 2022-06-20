Algoritmo ejercicio_44_Sesion10_Modulo4
	
	Definir num1 Como Entero;
	Definir num2 Como Entero;
	Definir totalsuma Como Entero;
	Definir totalresta Como Entero;
	Definir totalprod Como Entero;
	Definir totaldiv Como Entero;
	Definir menu Como Entero;
	
	Repetir
		Escribir "Seleccione el numero de una de las siguientes opciones";
		Escribir "1:Sumar";
		Escribir "2:Restar";
		Escribir "3:Multiplicar";
		Escribir "4:Dividir";
		Escribir "5:Salir del programa";
		Leer menu;
		
		si menu < 5 y menu > 0 Entonces
			Escribir "";
			Escribir "Introduce el 1º numero";
			Leer num1;
			Escribir "Introduce el 2º numero";
			Leer num2;
			Escribir "";
			
			Segun menu Hacer
				1:
					totalsuma = num1 + num2;
					Escribir "Su suma es: " totalsuma;
				2:
					totalresta = num1 - num2;
					Escribir " Su resta es: " totalresta;
				3:
					totalprod = num1 * num2;
					Escribir "Su producto es: " totalprod;

				De Otro Modo:
					totaldiv = num1 / num2;
					Escribir " Su div es: " totaldiv;
			Fin Segun
		SiNo
			Escribir "La opcion es incorrecta, vuelve a seleccionar";
			Escribir "";
		FinSi
		
		Escribir "";
	Hasta Que menu == 5 ;
	
	Escribir "FIN DEL PROGRAMA";

FinAlgoritmo