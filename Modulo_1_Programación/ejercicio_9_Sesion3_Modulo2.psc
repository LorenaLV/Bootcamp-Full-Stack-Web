Algoritmo ejercicio_9_Sesion2_Modulo2
	//datos 5 calificaciones de un alumno imprima el
	//promedio y la palabra "aprobado" si el alumno tiene un 
	//promedio mayor o igual que 5, y la palabra
	//"no aprobado" en caso contrario.
	
	Definir nota1, nota2, nota3, nota4, nota5, total ,media Como Real;
	Leer nota1, nota2, nota3, nota4, nota5;
	
	total = nota1 + nota2 + nota3 + nota4 + nota5;
	media = total / 5;
	
	Si media >= 5 Entonces
		
		Escribir "Aprobado, su media es: " media;
		
	SiNo
		
		Escribir "No aprobado, su media es: " media;
		
	FinSi
FinAlgoritmo