Algoritmo ejercicio_32_Sesion7_Modulo4
	
	Definir producto Como Caracter;
	Definir total,total1,total2,total3,total4,cantidad_b,cantidad_r,cantidad_c,cantidad_p ,p_bocadillo, p_refresco, p_cerveza, p_pan , unidad Como Real;
	p_bocadillo = 1.5;
	p_refresco = 1.05;
	p_cerveza =  0.75;
	p_pan = 2;
	
	Escribir "Cuanta cantidad de bocadillos quieres";
	Leer cantidad_b;
	Escribir "Cuanta cantidad de refresco quieres";
	Leer cantidad_r;
	Escribir "Cuanta cantidad de cerveza quieres";
	Leer cantidad_c;
	Escribir "Cuanta cantidad de pan quieres";
	Leer cantidad_p;
	
	total1= p_bocadillo * cantidad_b;
	total2 = p_refresco * cantidad_r;
	total3 = p_cerveza * cantidad_c;
	total4 = p_pan * cantidad_p;
	
	total= total1 + total2 + total3 + total4;
	
	Escribir "El total de la cuenta es : " total; 
	
FinAlgoritmo