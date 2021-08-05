/*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre  más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada*/
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let promedio;
	let edadMin;
	let nombreMin;
	let vacunaMin;
	let porcentajePrimera;
	let vacunaInoculada;
	let contadorRu=0;
	let contadorCh=0;
	let contadorAm=0;
	let contadorPrimera = 0;
	let porcentajeMenor = 0;
	let contadorMenor = 0;
	let contadorTotal= 0;
	let acumEdadCh = 0;
	let respuesta= "s"
	let FlagEdad = 1;

	do{
		nombre= prompt("Ingrese su nombre: ");
		while (nombre.length <3 || nombre.length>12){
			nombre = prompt("Cantidad de caracteres incorrecto, ingrese su nombre:");
		} edad= parseInt(prompt("Ingrese su edad"));
		while(edad<12 || edad>100){
			edad = parseInt(prompt("Edad incorrecta, ingrese una edad mayor o igual a 12 años."));
		} vacuna = prompt("Ingrese la vacuna que se dio: rusa/china/americana").toLowerCase();
		while(vacuna !="china" && vacuna !="rusa" && vacuna != "americana"){
			vacuna = prompt("Dato incorrecto, ingrese una vacuna entre las siguientes: rusa/china/americana ");
		} dosis= prompt("Ingrese su dosis: p para primera/s para segunda").toLowerCase();
		while (dosis != "p" && dosis != "s"){
			dosis = prompt("Dosis ingresada incorrecta ingrese la primera(p) o la segunda(s)").toLowerCase();
		} sexo = prompt("Ingrese su sexo: f/m");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Dato incorrecto, ingrese su sexo: f o m");
		}
		switch (vacuna){
			case "rusa":
			if(dosis =="p"){
				contadorPrimera++;
			}
			contadorRu++;
				break;
			case "china":
				if(dosis =="p"){
					contadorPrimera++;
				}
			acumEdadCh= edad + acumEdadCh;
			contadorCh++;
				break;
			case "americana":
				if(edad<18){
					contadorMenor++;
				}
				if(dosis =="p"){
					contadorPrimera++;
				}
			contadorAm++;
				
		}

		if ( edad<edadMin || FlagEdad && sexo =="m"){
			edadMin = edad;
			nombreMin = nombre;
			vacunaMin = vacuna;
			flagEdad= 0;
		}


		contadorTotal++;
		respuesta= prompt("Desea ingresar otro dato? s/n");
		while (respuesta != "s" && respuesta != "n"){
			respuesta = prompt("Respuesta incorrecta, responda con: s o n");
		}
	}while(respuesta == "s");
	porcentajeMenor = contadorMenor * 100 / contadorAm;
	porcentajePrimera = contadorPrimera * 100 / contadorTotal;
	promedio =acumEdadCh / contadorCh;

	alert("A)El promedio de edad entre los que se vacunaron con la china: " + promedio );
	alert("B)El nombre y la vacuna del hombre mas joven es: " + nombreMin + ", "+ vacunaMin+ " y su edad es:" + edadMin);
	alert("C)El porcentaje de los menores de edad de la americana es:" + porcentajeMenor + "%");
	alert("D)El porcentaje de la primera dosis sobre el total es de: " + porcentajePrimera +"%");
	if(contadorCh< contadorRu && contadorCh< contadorAm){
		vacunaInoculada = "china"
		alert("e) La vacuna mas inoculada es: " + vacunaInoculada);
	} else if (contadorRu <= contadorCh && contadorRu < contadorAm){
		vacunaInoculada = "rusa";
		alert("e) La vacuna mas inoculada es la: " + vacunaInoculada);
	} else if (contadorAm< contadorCh && contadorAm< contadorRu){
		vacunaInoculada = "americana";
		alert("e) La vacuna mas inoculada es la: " + vacunaInoculada);
	}


}
