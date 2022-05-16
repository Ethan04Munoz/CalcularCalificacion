//Obtener el ancho de la pantalla
var screenWidth = screen.width;
var tituloh1 = document.getElementById("tituloH1");
var divCuerpo = document.getElementById("divCuerpo");
if(screenWidth<968){
    tituloh1.style.fontSize="1.2rem";
    divCuerpo.style.height="57em";
    divCuerpo.style.width="70%";
    divCuerpo.style.marginLeft="15%";
}
if(screenWidth<840){
    divCuerpo.style.width="80%";
    divCuerpo.style.marginLeft="9%";
}
if(screenWidth<640){
    divCuerpo.style.width="80%";
    divCuerpo.style.marginLeft="7%";
}
if(screenWidth<500){
    divCuerpo.style.width="80%";
    divCuerpo.style.marginLeft="6%";
}
if(screenWidth<420){
    divCuerpo.style.width="80%";
    divCuerpo.style.marginLeft="5%";
}