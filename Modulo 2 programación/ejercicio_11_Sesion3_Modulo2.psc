Algoritmo ejercicio_11_Sesion3_Modulo2
	
	Definir cantidad, descuento Como Entero;
	
	Escribir "Introduzca su compra";
	Leer cantidad;
	
	Si cantidad < 500 Entonces
		
		Escribir "Usted no tiene descuento en esta compra";
		
	SiNo
		SI cantidad <= 1000 Entonces
			
			Escribir "Su compra con descuento 15% es: " cantidad * 0.95;
			
		SiNo
			Si cantidad <= 7000 Entonces
				
				Escribir "Su compra con descuento 10% es: " cantidad * 0.90;
				
			SiNo
				Si cantidad <= 15000
				
					Escribir "Su compra con descuento 20% es: " cantidad * 0.8;
					
				SiNo
					
					Escribir "Su compra con descuento 25% es: " cantidad * 0.75;
					
				FinSi
				
			FinSi
			
		FinSi
		
	FinSi
	
FinAlgoritmo