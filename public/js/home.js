const nav = document.querySelector("#nav");
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () =>{
    nav.classList.add('visible');
})

cerrar.addEventListener('click', () =>{
    nav.classList.remove('visible')
})


document.getElementById('contactForm').addEventListener('submit',function(event) {
    event.preventDefault(); //Evita que se recarge la pagina al enviar el form. Si no lo evita se corta la redireccion d ela linea 26.

    const nombre = event.target.nombre.value;
    const tel = event.target.tel.value;
    const email = event.target.email.value;
    const consulta = event.target.consulta.value;

    const mensaje = `Hola, me llamo ${nombre}. Mi telélefono es ${tel}, mi correo electrónico es ${email} y mi consulta es: ${consulta}.`;

    const url =  `https://api.whatsapp.com/send?phone=3804445297&text=${encodeURIComponent(mensaje)}`;   // API de WhatsApp = https://api.whatsapp.com/send
                                                                                                        // Los parámetros ?phone y &text no son nativos de JS; son parámetros de la API de WhatsApp.
    window.location.href = url;                                                                        // location = propiedad de window: permite acceder y manipular la URL de la página.
                                                                                                    // href = redirige el navegador a la nueva URL especificada.

});



document.querySelector('.contactanos_consulta').addEventListener('keydown', function(event){
    if(event.key === 'Enter') {
        event.preventDefault();
        this.value += '\n';  // Añade un salto de línea en el campo de entrada (\n es el carácter de nueva línea (salto de línea).
    }
})
