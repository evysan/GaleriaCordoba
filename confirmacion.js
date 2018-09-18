function mostrar() {
    var nombreCompleto = localStorage.getItem("nombreCompleto");
    var identificacion = localStorage.getItem("identificacion");
    var edad = localStorage.getItem("edad");
    var telefono = localStorage.getItem("telefono");
    var email = localStorage.getItem("email");
    var destino = localStorage.getItem("destino");
    var precio = localStorage.getItem('precio');
    var valorTotal =localStorage.getItem('valorTotal');

    var objeto = {
        nombreCompleto,
        identificacion,
        edad,
        telefono,
        email,
        destino,
        precio,
        valorTotal
    };

    llenarTabla(objeto);
}

function llenarTabla(objeto) {
    document.getElementById('nombreCompleto').innerHTML = objeto.nombreCompleto;
    document.getElementById('identificacion').innerHTML = objeto.identificacion;
    document.getElementById('edad').innerHTML = objeto.edad;
    document.getElementById('telefono').innerHTML = objeto.telefono;
    document.getElementById('email').innerHTML = objeto.email;
    document.getElementById('destino').innerHTML = objeto.destino;
    document.getElementById('precio').innerHTML = objeto.precio;
    document.getElementById('valorTotal').innerHTML = objeto.valorTotal;
}

mostrar();
