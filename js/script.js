const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

//El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();       //este evento se usa en formularios

    //Validar el Formulario 
    const {nombre, email, mensaje} =datos;

    if (nombre === '' || email ==='' || mensaje === '') {
        mostrarAlerta('Todos los campos son necesarios', true);
        return //corta la ejecucion del codigo
    } 
    //Crear la alerta del enviar contacto
    mostrarAlerta('mensaje enviado correctamente')

})

function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}
function mostrarAlerta(mensaje, error=null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if (error) {
        alerta.classList.add('error');
    } else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparezca despues de 5 minutos
    setTimeout (()=>{
        alerta.remove();
    },5000)

}