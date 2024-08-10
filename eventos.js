const midiv = document.getElementById('mi-div');
const miboton = document.getElementById('boton')
midiv.addEventListener('click', function() {
    alert('¡Hola! Soy el div');
});

miboton.addEventListener('click', function(evento) {
    evento.stopPropagation();
});