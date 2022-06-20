Algoritmo ejercicio_34_Sesion8_Modulo4
	
	Definir n_aletorio,intento Como Entero;
	n_aletorio= Aleatorio(1, 100);
	//Leer intento;
	
	//PARTE A
//	Mientras n_aletorio <> intento Hacer
//		
//		Escribir "No has acertado, intentelo de nuevo";
//		Leer intento;
//		
//	FinMientras
//
//	Escribir "HAS ACERTADO!!! ", "Tu numero aleatorio es: " n_aletorio;
	
	
	Escribir "------------------------------------------------------------";
	
	//PARTE B
	Repetir
		
		Leer intento;
		SI intento < n_aletorio Entonces
			
			Escribir "NO LLEGAS";
			
		SiNo
			SI intento > n_aletorio Entonces
				
				Escribir " TE HAS PASADO ";
				
			FinSi
		FinSi
		
	Mientras Que n_aletorio <> intento
	
	Escribir "HAS ACERTADO!!! ", "Tu numero aleatorio es: " n_aletorio;
	
	
FinAlgoritmo
