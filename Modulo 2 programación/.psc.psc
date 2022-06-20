Algoritmo ejercicio_8_Sesion2_Modulo2
	//Dado el sueldo de un trabajador, dibuja un diagrama de flujo que aplique un incremento de sueldo
	//del 15% si el sueldo es inferior a 1000?. Imprimir el nuevo sueldo.
	
	
	Definir articulo , dineroEntregado, cambio Como Real;
	
	Escribir "Introduzca importe articulo:" ;
	Leer articulo;
	Escribir "Introduzca dinero:"; 
	Leer dineroEntregado;
	cambio= dineroEntregado - articulo;
	
	SI dineroEntregado < articulo Entonces
		
		Escribir "No me has entregado suficiente dinero";
		
	SiNo
		
		Escribir "Su cambio es: " cambio;
		
	FinSi
	
	
FinAlgoritmo