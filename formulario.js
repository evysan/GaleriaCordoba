var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
            if(this.value.length >= 1) {
                this.nextElementSibling.classList.add('fijar');
                } else{
                this.nextElementSibling.classList.remove('fijar');
            }
        }
    );
}

function enviar() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var identificacion = document.getElementById('identificacion').value;
    var edad = document.getElementById('edad').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var destino = captura();
    var precio;

    if(destino == 'San Bernardo del Viento'){
        precio = 150000;
    } else if(destino == 'San Antero'){
        precio = 200000;
    } else if (destino == 'Moñitos'){
        precio = 170000;
    } else if (destino == 'Puerto Escondido'){
        precio = 210000;
    } else if (destino == 'Sampues'){
        precio = 200000;
    } else if (destino == 'Monteria'){
        precio = 250000;
    }

    var valorTotal = precio + (precio*0.19);

    var objeto = {
        nombreCompleto: `${nombres} ${apellidos}`,
        identificacion,
        edad,
        telefono,
        email,
        destino,
        precio,
        valorTotal
    };

    guardarReserva(objeto);
    window.location.href = "confirmacionreser.html";
}

function guardarReserva(objeto){
    localStorage.setItem("nombreCompleto", objeto.nombreCompleto);
    localStorage.setItem("identificacion", objeto.identificacion);
    localStorage.setItem("edad", objeto.edad);
    localStorage.setItem("telefono", objeto.telefono);
    localStorage.setItem("email", objeto.email);
    localStorage.setItem("destino", objeto.destino);
    localStorage.setItem('precio', objeto.precio);
    localStorage.setItem('valorTotal', objeto.valorTotal);
}

function captura() {
    var valor;

    elem = document.getElementsByName('destino'); 
    for(i=0;i<elem.length;i++) {
        if (elem[i].checked) { 
            valor = elem[i].value; 
            return valor; 
        }  
    }
}