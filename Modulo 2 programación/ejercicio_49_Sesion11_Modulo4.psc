Algoritmo ejercicio_49_Sesion11_Modulo4
	
	Definir arrayDulces, arrayBebidas, arrayConservas, tamano, i, max_dulce, max_bebidas, min_bebidas, mes, mes_dulces, mes_bebidas_max,mes_bebidas_min,suma Como Entero;
	Definir totalPromedio Como Real;
	
	tamano= 12;
	Dimension arrayDulces[tamano],arrayBebidas[tamano],arrayConservas[tamano]; 
	
	Escribir "Deps:   Dulces   Bebidas   Conservas"; 
	
	para mes = 0 Hasta  tamano -1 Hacer
		arrayDulces[mes] = Aleatorio(1,100);
		arrayBebidas[mes] = Aleatorio(1,100);
		arrayConservas[mes] = Aleatorio(1,100);
		Escribir "Mes " mes+1,":     "     arrayDulces[mes] "       " arrayBebidas[mes] "        " arrayConservas[mes];
		
	FinPara
	
	Escribir "";
	
	
	//EJERCICIO 49 APARTADO A)
	para mes = 0 Hasta tamano -1 Hacer
		si mes == 0 o arrayDulces[mes] > max_dulce Entonces
			max_dulce = arrayDulces[mes];
			mes_dulces = mes;
		FinSi
	FinPara
	Escribir" A)El maximo de coste de dulce es: "," Mes:" mes_dulces +1;
	
	//EJERCICIO 49 APARTADO B y C)
	suma= 0;
	para mes = 0 Hasta tamano -1 Hacer
		suma = suma + arrayBebidas[mes];
		si mes == 0 o arrayBebidas[mes] > max_bebidas Entonces
			max_bebidas = arrayBebidas[mes];
			mes_bebidas_max = mes;
		FinSi
		
		si mes == 0 o arrayBebidas[mes] < min_bebidas Entonces
			min_bebidas = arrayBebidas[mes];
			mes_bebidas_min= mes;
		FinSi
	FinPara
	
	totalPromedio = suma /tamano;
	Escribir"B)El promedio anual: ", totalPromedio;
	Escribir"C)El mes mayor de bebidas es: ", "Mes:" ,mes_bebidas_max+1;
	Escribir"C) El mes menor de bebidas es: ", "Mes:" ,mes_bebidas_min+1;
	
	//EJERCICIO 49 APARTADO D)
	
	si (arrayDulces[11] < arrayBebidas[11]) y (arrayDulces[11] < arrayConservas[11]) Entonces
		
		Escribir "D)En diciembre el departamento de dulces ha tenido el menor coste: " arrayDulces[11];
		
	SiNo
		si (arrayBebidas[11] < arrayConservas[11]) Entonces
			
			Escribir "D)En diciembre el departamento de bebidas ha tenido el menor coste: " arrayBebidas[11];
			
			
		SiNo
			
			Escribir "D)En diciembre el departamento de conservas ha tenido el menor coste: " arrayConservas[11];
			
		FinSi
	FinSi
	
FinAlgoritmo
