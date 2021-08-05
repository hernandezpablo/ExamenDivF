/*Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
Curso de ingreso UTN FRA*/
function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	let menorOrigen;
	let promedioVueloOc;
	let vacunaTotal= 0;
	let acumOr=0;
	let acumOc=0;
	let acumSecreto=0;
	let contadorOr= 0;
	let contadorOc= 0;
	let contadorSecreto= 0;
	let contadorTotal=0;
	let costoTotal = 0;
	let descuento = 0;
	let respuesta="s"
	let valorFinal =0;

	do {

		origen= prompt("Ingrese su nacionalidad: Occidente/Oriente/Secreto").toLowerCase();
		while (origen !="occidente" && origen !="oriente" && origen != "secreto"){
			origen= prompt("La nacionalidad es incorrecta ingrese la siguiente: Occidente/Oriente/Secreto").toLowerCase();
		} cantidad = parseInt(prompt("Ingrese una cantidad de vacunas entre 500000 y 2500000"));
		while(isNaN(cantidad) || cantidad <500000 || cantidad>2500000){
		cantidad = parseInt(prompt("El caracter ingresado es incorrecto, ingrese una cantidad de vacunas entre 500000 y 2500000"));
		} costo = parseInt(prompt("Ingrese el costo del vuelo entre 1000000 y 5000000"));
		while(isNaN(costo) || costo <1000000 || costo>5000000){
			costo = parseInt(prompt("El caracter ingresado es incorrecto, ingrese el costo del vuelo entre 1000000 y 5000000"));
		}
		switch(origen){
			case "occidente":
				acumOc = cantidad + acumOc;
				contadorOc++;
				break;
			case "oriente":
				acumOr= cantidad + acumOr;
				contadorOr++;
				break;
			case "secreto":
				acumSecreto = cantidad + acumSecreto;
				contadorSecreto++;

		}
		costoTotal = costo + costoTotal;
		vacunaTotal = cantidad + vacunaTotal;
		contadorTotal++;
		respuesta= prompt("Desea ingresar otro dato? s/n");
		while (respuesta != "s" && respuesta != "n"){
			respuesta = prompt("Respuesta incorrecta, responda con: s o n");
		}
	}while(respuesta =="s");
	promedioVueloOc = acumOc / contadorTotal;
	/*a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 8 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento*/
	if (acumOc <= acumOr && acumOc < acumSecreto){
		menorOrigen = "Occidente";
		document.write("A) El origen con menor cantidad de vacunas es: " + menorOrigen + " con " + acumOc + " vacunas" + "<br>");
	} else if (acumOr < acumOc && acumOr < acumSecreto){
		menorOrigen = "Oriente";
		document.write("A) El origen con menor cantidad de vacunas es: " + menorOrigen + " con " + acumOr + " vacunas" + "<br>");
	} else if (acumSecreto < acumOc && acumSecreto < acumOr){
		menorOrigen="Secreto";
		document.write("A) El origen con menor cantidad de vacunas es: " + menorOrigen + "con " + acumSecreto + " vacunas" + "<br>");
	}
	document.write("B) El promedio por vuelo de vacunas llegadas de Occidentes es de: " + promedioVueloOc + "<br>");
	document.write("C)El costo toal de los gastos de viajes es de: " + costoTotal + "$" + "<br>");

	if (vacunaTotal>10000000){
		descuento = costoTotal *0.25;
		valorFinal= costoTotal - descuento;
		document.write("D) El importe tiene descuento, es de: " + descuento + " y el precio final es de: " + costoTotal);
	} else if(vacunaTotal<=10000000 && vacunaTotal>= 5000000){
		descuento = costoTotal *0.15;
		valorFinal= costoTotal - descuento;
		document.write("D) El importe tiene descuento, es de: " + descuento + " y el precio final es de: " + costoTotal);
	} else {
		valorFinal = costoTotal;
		document.write("D) El importe no tiene un descuento y su coste final es de: " + costoTotal);
	}
}
