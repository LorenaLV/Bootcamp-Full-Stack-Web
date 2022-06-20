Algoritmo ejercicio_37_Sesion9_Modulo4
	
	Definir dni, tamano, resto Como Real;
	Definir array_letra Como Caracter;
	tamano = 23;
	Dimension array_letra[tamano]; 
	
	array_letra[0] = "T";
	array_letra[1] = "R";
	array_letra[2] = "W";
	array_letra[3] = "A";
	array_letra[4] = "G";
	array_letra[5] = "M";
	array_letra[6] = "Y";
	array_letra[7] = "F";
	array_letra[8] = "P";
	array_letra[9] = "D";
	array_letra[10] = "X";
	array_letra[11] = "B";
	array_letra[12] = "N";
	array_letra[13] = "J";
	array_letra[14] = "Z";
	array_letra[15] = "S";
	array_letra[16] = "Q";
	array_letra[17] = "V";
	array_letra[18] = "H";
	array_letra[19] = "L";
	array_letra[20] = "C";
	array_letra[21] = "K";
	array_letra[22] = "E";
	
	Escribir "Escribe tu DNI";
	Leer dni;
	
	resto = dni mod tamano; //este resto da el indice del array
	Escribir "Tu DNI es: " dni, array_letra[resto];
	
	
	
FinAlgoritmo