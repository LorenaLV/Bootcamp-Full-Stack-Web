Funcion return = sumar(num1,num2)	
	Definir return Como Entero;
	return = num1+num2;
FinFuncion

Funcion return = restar(restando1, restando2)
	Definir return Como Entero;
	return = restando1 - restando2;
FinFuncion

Algoritmo EJEMPLOS_FUNCIONES2
	
	Definir resultado_suma, resultado_resta Como Entero;
	resultado_suma = sumar(15,16);
	resultado_resta = restar(resultado_suma,1);
	
	
	Escribir resultado_resta;
	
FinAlgoritmo
