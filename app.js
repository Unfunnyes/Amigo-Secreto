// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let amigo = (document.querySelector('#amigo').value);
    (amigo == '') ? alert('Por favor, inserte un nombre.') : amigos.push(amigo);
    console.log(amigos)
    limpiarCaja();
    
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

