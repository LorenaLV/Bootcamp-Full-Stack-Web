Algoritmo ejercicio_7_Sesion2_Modulo2
	//dado el coste de un artículo vendido y la cantidad de dinero
	//entregado, calcule e imprima el cambio que se debe entregar 
	//al cliente
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