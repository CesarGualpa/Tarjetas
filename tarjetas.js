function crearTarjetas(){
    let contenido= "";
    
    let cmpDesde;
    cmpDesde=document.getElementById("txtDesde");
    let desde;
    desde=cmpDesde.value;
    let desdeEntero;
    desdeEntero=parseInt(desde);
    
    let cmpHasta;
    cmpHasta=document.getElementById("txtHasta");
    let hasta;
    hasta=cmpHasta.value;
    let hastaEntero;
    hastaEntero=parseInt(hasta);

    let cmpSalto;
    cmpSalto=document.getElementById("txtSalto");
    let salto;
    salto=cmpSalto.value;
    let saltoEntero;
    saltoEntero=parseInt(salto);

    let divTarjetas=document.getElementById("divTarjetas")
    
    for (let i=desdeEntero; i<=hastaEntero; i+=saltoEntero){
        contenido=contenido + "<div class='item'>" +i+ "</div>";
    }
    divTarjetas.innerHTML=contenido
}
