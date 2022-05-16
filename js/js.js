var botonGet = document.getElementById("enviarBtn");
var cajaTexto = document.getElementById("cajaRes");
var bandera = 0;

function getData(){
    //Obtenemos los objetos y los guardamos en variables
    var calif1Parcial = Number(document.getElementById("1erParcial").value);
    var calif2Parcial = Number(document.getElementById("2doParcial").value);
    bandera = 0; //Al recibir la funcion seteamos la bandera a 0
                 //Si alguna de las calificaciones no esta llenada, aumenta el valor de bandera
                 //Si ninguna de las ponderaciones esta seteada, aumenta tambien la bandera
                 //Al final, si el valor de bandera sigue siendo 0 quiere decir que todo salió bien y ejecuta el resto de la función, todo dentro de un if
    if(calif1Parcial == 0 || calif2Parcial == 0){ 
        alert("Por favor, ingresa ambos datos para poder calcular la calificación que necesitas"); 
        bandera = 1;
    }
    if(!document.getElementById("ponA").checked && !document.getElementById("ponB").checked  && !document.getElementById("ponC").checked ){
        alert("Por favor, selecciona una ponderación para poder calcular la calificación");
        bandera = 1;
    }
    if(bandera==0){
        var calNeed;
        var calText;
        //Calculos
        if(document.getElementById("ponA").checked){
            if(isNaN(Math.ceil((((69.6-(calif1Parcial*0.2))-(calif2Parcial*0.35))/45)*100))){ //Verificamos, en el caso de que sea NaN, entra al if y vacía el texto
                                                                                              //ademas de mostrar una alerta al usuario para indicarlo que ingreso un valor 
                                                                                              //no numerico.
                                                                                              //En caso de que no sea NaN entra al else y realiza la tarea de calcular el promedio
                                                                                              //manera normal y lo escribe en la pantalla.
                alert("Ingresaste algo que no es numero, por favor vuelve a intentarlo");
                cajaTexto.innerText = "";
            }
            else{
                calNeed = Math.ceil((((69.6-(calif1Parcial*0.33))-(calif2Parcial*0.33))/34)*100);
                if(calNeed > 100){
                    cajaTexto.innerText = "La calificación que necesitas es incluso mayor a 100! Ve ahorrando para pagar el extra"
                }
                else{
                    calNeed = Math.ceil((((69.6-(calif1Parcial*0.2))-(calif2Parcial*0.35))/45)*100);
                    calText = "La calificación minima que necesitas en el tercer parcial es " + calNeed + "*";
                    cajaTexto.innerText = calText;
                }
            }
        }
        if(document.getElementById("ponB").checked){
            if(isNaN(Math.ceil((((69.6-(calif1Parcial*0.2))-(calif2Parcial*0.35))/45)*100))){ //Verificamos, en el caso de que sea NaN, entra al if y vacía el texto
                                                                                              //ademas de mostrar una alerta al usuario para indicarlo que ingreso un valor 
                                                                                              //no numerico.
                                                                                              //En caso de que no sea NaN entra al else y realiza la tarea de calcular el promedio
                                                                                              //manera normal y lo escribe en la pantalla.
                alert("Ingresaste algo que no es numero, por favor vuelve a intentarlo");
                cajaTexto.innerText = "";
            }
            else{
                calNeed = Math.ceil((((69.6-(calif1Parcial*0.33))-(calif2Parcial*0.33))/34)*100);
                if(calNeed > 100){
                    cajaTexto.innerText = "La calificación que necesitas es incluso mayor a 100! Ve ahorrando para pagar el extra"
                }
                else{
                    calNeed = Math.ceil((((69.6-(calif1Parcial*0.15))-(calif2Parcial*0.35))/50)*100);
                    calText = "La calificación minima que necesitas en el tercer parcial es " + calNeed + "*";
                    cajaTexto.innerText = calText;
                }
            }
        }
        if(document.getElementById("ponC").checked){
            if(isNaN(Math.ceil((((69.6-(calif1Parcial*0.2))-(calif2Parcial*0.35))/45)*100))){ //Verificamos, en el caso de que sea NaN, entra al if y vacía el texto
                                                                                              //ademas de mostrar una alerta al usuario para indicarlo que ingreso un valor 
                                                                                              //no numerico.
                                                                                              //En caso de que no sea NaN entra al else y realiza la tarea de calcular el promedio
                                                                                              //manera normal y lo escribe en la pantalla.
                alert("Ingresaste algo que no es numero, por favor vuelve a intentarlo");
                cajaTexto.innerText = "";
            }
            else{
                calNeed = Math.ceil((((69.6-(calif1Parcial*0.33))-(calif2Parcial*0.33))/34)*100);
                if(calNeed > 100){
                    cajaTexto.innerText = "La calificación que necesitas es incluso mayor a 100! Ve ahorrando para pagar el extra"
                }
                else{
                    calNeed = Math.ceil((((69.6-(calif1Parcial*0.33))-(calif2Parcial*0.33))/34)*100);
                    calText = "La calificación minima que necesitas en el tercer parcial es " + calNeed + "*";
                    cajaTexto.innerText = calText;
                }

            }
        }
    }
}
    
botonGet.addEventListener("click", getData);