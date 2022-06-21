Algoritmo ejercicio_43_Sesion9_Modulo4
	
	Definir horas, minutos, segs Como Entero;
	Definir h_cero, m_cero, seg_cero Como Caracter;
	
	segs= 0;
	minutos = 0;
	horas = 20;
	Mientras Verdadero Hacer
		
		Limpiar Pantalla;
		
		si segs < 10 Entonces
			seg_cero = "0";
		SiNo
			seg_cero = "";
		FinSi
		
		si minutos < 10 Entonces
			m_cero = "0";
		SiNo
			m_cero = "";
		FinSi
		
		si horas < 10 Entonces
			h_cero = "0";
		SiNo
			h_cero = "";
		FinSi
		
		Escribir h_cero, horas ":", m_cero, minutos ":", seg_cero, segs;
		Esperar 1 Segundos;
		segs = segs + 1;
		
		si segs > 60 Entonces
			segs= 0;
			minutos = minutos +1;
		FinSi
		
		si minutos > 59 Entonces
			minutos = 0;
			horas = horas + 1;
		FinSi
		
		si horas > 23 Entonces
			horas = 0;
		FinSi
		
	FinMientras
	
	
FinAlgoritmo