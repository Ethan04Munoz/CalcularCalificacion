var botonGet = document.getElementById("enviarBtn");
var cajaTexto = document.getElementById("cajaRes");

function getData(){
    //Obtenemos los objetos y los guardamos en variables
    var calif1Parcial = Number(document.getElementById("1erParcial").value);
    var calif2Parcial = Number(document.getElementById("2doParcial").value); 
    var calNeed;
    var calText;
    //console.log(calif1Parcial+calif2Parcial); //linea para comprobar que se almacena el texto
    //Calculos
    if(document.getElementById("ponA").checked){
        //console.log("lol esta presionado")
        calNeed = Math.ceil((((69.6-(calif1Parcial*0.2))-(calif2Parcial*0.35))/45)*100);
        calText = "La calificación minima que necesitas en el tercer parcial es " + calNeed;
        cajaTexto.innerText = calText;
    }
    if(document.getElementById("ponB").checked){
        //console.log("lol esta presionado")
        calNeed = Math.ceil((((69.6-(calif1Parcial*0.15))-(calif2Parcial*0.35))/50)*100);
        calText = "La calificación minima que necesitas en el tercer parcial es " + calNeed;
        cajaTexto.innerText = calText;
    }
    if(document.getElementById("ponC").checked){
        //console.log("lol esta presionado")
        calNeed = Math.ceil((((69.6-(calif1Parcial*0.33))-(calif2Parcial*0.33))/34)*100);
        calText = "La calificación minima que necesitas en el tercer parcial es " + calNeed;
        cajaTexto.innerText = calText;
    }
    //Modificamos el texto


}
    
botonGet.addEventListener("click", getData);