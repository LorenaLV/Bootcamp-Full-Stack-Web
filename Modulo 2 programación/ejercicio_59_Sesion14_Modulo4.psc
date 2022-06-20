Algoritmo ejercicio_59_Sesion14_Modulo4
	
	Definir centro,curso,alumno,n_centro,n_curso,n_alumno,suma,max_centro Como Entero;
	Definir notas , media, media_maxima Como Real;
	n_alumno = 10;
	n_curso = 4;
	n_centro = 5;
	suma = 0;
	Dimension notas[n_centro,n_curso,n_alumno];
	
	para centro = 0 Hasta n_centro -1 Hacer
		Escribir "Centro " centro;
		para curso = 0 Hasta n_curso -1 Hacer
			Escribir "Curso " curso ": " Sin Saltar;
			
			suma = 0;
			
			para alumno = 0 Hasta n_alumno -1 Hacer
				
				notas[centro,curso,alumno] = Aleatorio(0,10);//- (Aleatorio(0,100) /100);
				Escribir notas[centro,curso,alumno] " "Sin Saltar;
				suma = suma + notas[centro,curso,alumno];
				
			FinPara
			
			media = suma/n_alumno;
			Escribir "- Media del curso " curso " : " media Sin Saltar;
			
			si (centro == 0 y curso == 0) o media > media_maxima Entonces
				
				media_maxima = media;
				max_centro = centro;
				
			FinSi
			Escribir "";
		FinPara
		Escribir "";
	FinPara
	
	Escribir "La media mas alta es: " media_maxima " del centro: " max_centro;
	
	
	
FinAlgoritmo
