Algoritmo ejercicio_28_Sesion7_Modulo4
	
	Definir contador, cantidad_tiempo  Como Entero;
	
	Escribir "Introduzca el tiempo del temporizador";
	Leer cantidad_tiempo;
	Limpiar Pantalla;
	
	Para contador = cantidad_tiempo Hasta 0 Con Paso -1 Hacer
		
		Escribir contador;
		Esperar 1 Segundos;
		Limpiar Pantalla;
	FinPara
	
	Escribir "¡¡Ring!!";
	
FinAlgoritmo