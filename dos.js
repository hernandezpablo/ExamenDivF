/*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta
Curso de ingreso UTN FRA*/

function mostrar()
{
    let nacion;
    let resultado;
    let edad;
    let cepa;
    let porcentajePos;
    let porcentajeNeg;
    let cepaMin;
    let edadMin;
    let contadorDel= 0;
    let contadorAlf= 0;
    let contadorBet= 0;
    let contadorPos= 0;
    let contadorNeg= 0;
    let contadorTotal = 0;
    let contadorExtranjero=0;
    let flagEdadMin=1;

    for(i=0;i<8;i++){
    nacion= prompt("Ingrese su nacionalidad: argentina/extranjera");
    while (nacion !="argentina" && nacion !="extranjera"){
        nacion= prompt("La nacionalidad es incorrecta ingrese la siguiente: argentina/extranjera");
    } resultado = prompt("Ingrese el resultado del testeo: positivo/negativo");
    while (resultado != "positivo" && resultado != "negativo"){
        resultado = prompt("El resultado es invalido, ingresar positivo o negativo");
    } if (resultado =="positivo"){
    cepa = prompt("Ingrese la cepa: delta/alfa/beta");
    while (cepa != "delta" && cepa !="alfa" && cepa != "beta"){
        cepa = prompt("Valor invalido, ingrese alguna cepa: alfa/beta/delta");
    }
    contadorPos++;
   } else {
       cepa = "ninguna";
       contadorNeg++;
   } edad = parseInt(prompt("Ingrese su edad entre 18 y 65 años"));
   while(edad <18 || edad>65 || isNaN(edad)){
       edad= parseInt(prompt("La edad ingresada es incorrecta, ingrese entre 18 y 65 años"));
   }
   
   switch(cepa){
       case "alfa":
           contadorAlf++;
           break;
        case "beta":
            contadorBet;
            break;
        case "delta":
            if (nacion=="extranjera"){
                contadorExtranjero++;
            }
            contadorDel++;
   }

if ( flagEdadMin || edad<edadMin  && nacion =="argentina" && resultado=="positivo"){
    edadMin = edad;
}
   contadorTotal++;
    }
porcentajePos = contadorPos *100 / contadorTotal;
porcentajeNeg = contadorNeg *100 / contadorTotal;
document.write("A)el porcentaje positivo es: " + porcentajePos + "%");
document.write("B)El porcentaje negativo es: " + porcentajeNeg + "%");
 if (contadorAlf <= contadorDel && contadorAlf <contadorBet){
    cepaMin = "alfa";
    document.write("C) La cepa menos encontrada es: " + cepaMin + "<br>");
} else if (contadorDel <contadorAlf && contadorDel < contadorBet){
    cepaMin = "delta";
    document.write("C) La cepa menos encontrada es: " + cepaMin + "<br>");
} else if(contadorBet <contadorAlf && contadorBet< contadorDel){
    cepaMin = "beta";
    document.write("C) La cepa menos encontrada es: " + cepaMin + "<br>");
}
document.write("D) La edad del menor argentino contagiado es:" + edadMin + "años" + "<br>");
document.write("E) La cantidad de extranjeros contagiados con la delta es: " + contadorExtranjero + "<br>");
}
