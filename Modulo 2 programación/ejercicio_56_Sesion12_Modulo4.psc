Algoritmo ejercicio_56_Sesion12_Modulo4
	
	Definir matriz, curso, alumno, notas ,n_curso,n_alumno Como Entero; 
	n_alumno = 5;
	n_curso = 3;
	Dimension matriz[n_curso,n_alumno];

	
	para curso = 0 Hasta n_curso -1 Hacer
		para alumno = 0 hasta n_alumno -1 Hacer
			
			Escribir "Dime la nota del alumno " alumno " del curso " curso;
			Leer notas;
			matriz[curso,alumno] = notas;
			Escribir matriz[curso,alumno] "  ";
			
		FinPara
		Escribir "  ";
	FinPara
	
	para curso = 0 Hasta n_curso -1 Hacer
		
		Escribir "Curso ", curso, ": " Sin Saltar;
		para alumno = 0 hasta n_alumno -1 Hacer
			Escribir matriz[curso,alumno] "  " Sin Saltar;	
		FinPara
		Escribir "  ";
	FinPara
	
FinAlgoritmo
