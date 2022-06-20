Algoritmo ejercicio_52_Sesion12_Modulo4
	
	Definir array, tamano,i,contador, buscar_num Como Entero;
	tamano = 10;
	contador = 0;
	Dimension array[tamano];
	
	Escribir "Dime un numero para buscarlo en el array";
	Leer buscar_num;
	
	para i = 0 hasta tamano -1 Hacer
		array[i] = Aleatorio(1,15);
		Escribir array[i] " "Sin Saltar;
	FinPara
	
	Escribir "";
	
	para i = 0 hasta tamano -1 Hacer
		si buscar_num == array[i] Entonces
			contador = contador + 1;	
			si contador ==1 Entonces
				Escribir "El número ", buscar_num  ," esta en el array y el indice de su primera coincidencia es: " i;
			FinSi
		FinSi
	FinPara

	
FinAlgoritmo
