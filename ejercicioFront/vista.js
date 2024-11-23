$(document).ready(function(){
    $("#regresarInicio").click(function() {
        window.location.href = "index.html";
    });

    cargarDatos();
});

function cargarDatos() {
    $("#tablaTareas tbody").empty();

    $.ajax({
        url: "http://localhost:8083/apis/getTareas",
        type: 'GET',
        success: function(data) {
            if (data.length > 0) {
                $.each(data, function(index, item) {
                    let fila = "<tr align='center'>";
                    fila += "<td>" + item.id + "</td>";
                    fila += "<td>" + item.nombre + "</td>";
                    fila += "<td>" + item.descripcion + "</td>";
                    fila += "<td>" + item.fechaInicio + "</td>";
                    fila += "</tr>";
                    $("#tablaTareas tbody").append(fila);
                });
            } else {
                let fila = "<tr align='center'><td colspan='4'>No se encontraron datos.</td></tr>";
                $("#tablaTareas tbody").append(fila);
            }
        },
        error: function() {
            let fila = "<tr align='center'><td colspan='4'>Error al cargar los datos.</td></tr>";
            $("#tablaTareas tbody").append(fila);
        }
    });
}