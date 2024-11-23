$(document).ready(function(){
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaActual.getDate().toString().padStart(2, '0');

    const fechaFormat = año + '-' + mes + '-' + dia;
    $('#inputFecha').attr('min', fechaFormat);

    $("#cancelar").click(function() {
        window.location.href = "index.html";
    });

    $("#saveTask").click(function(){
        enviarDatos();
    });
});

function enviarDatos(){
    let dato1 = $("#inputNombre").val();
    let dato2 = $("#inputDesc").val();
    let dato3 = $("#inputFecha").val();

    let datos = {
        nombre: dato1,
        descripcion: dato2,
        fechaInicio: dato3
    };

    $.ajax({
        type: "POST",
        url: "http://localhost:8083/apis/guardarTarea",
        data: datos,
        success: function(response) {
            console.log(response);
            window.location.href = "vistaTareas.html";
        },
        error: function(error) {
            console.error(error);
            alert("Ocurrio un error");
            window.location.href = "vistaTareas.html";
        }
    });
}