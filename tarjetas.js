function crearTarjetas() {
    let contenido = "";

    let desde = parseInt(document.getElementById("txtDesde").value);
    let hasta = parseInt(document.getElementById("txtHasta").value);
    let salto = parseInt(document.getElementById("txtSalto").value);

    let divTarjetas = document.getElementById("divTarjetas");

    for (let i = desde; i <= hasta; i += salto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }

    divTarjetas.innerHTML = contenido;
}