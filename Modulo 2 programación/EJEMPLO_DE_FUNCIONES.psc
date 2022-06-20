Algoritmo EJEMPLO_DE_FUNCIONES
	Definir contador Como Entero;
	Definir mi_nombre, mi_apellido, mi_dia Como Caracter;
	Leer contador;
	
	mi_nombre= "pepito";
	mi_apellido = "perez";
	mi_dia = " lunes";
	
	Escribir saludar_desconocido();
	
	saludar("john","Doe", "Viernes");
	saludar(mi_nombre,mi_apellido, mi_dia);
	saludar(2,contador, "viernes");

	
FinAlgoritmo

Funcion variable_retorno = saludar_desconocido()
	
	Definir variable_retorno Como Caracter;
	variable_retorno = "hola desconocido";
	
FinFuncion


Funcion saludar (nombre,apellido,dia)
	
	Escribir "Hola ", nombre, " ", apellido;
	
	si Minusculas(dia) == "viernes" Entonces
		
		Escribir "Buen finde";
		
	SiNo
		Escribir "Todavia queda semana";
		
	FinSi
	
	
FinFuncion