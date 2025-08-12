// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let amigo = (document.querySelector('#amigo').value);
    if (amigo == '') {
        alert('Por favor, inserte un nombre.')
        return;
    }   else {
            amigos.push(amigo);
            console.log(amigos);
            listaAmigos();
        }
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function listaAmigos() {
    let lista = (document.querySelector('#listaAmigos'));
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos.");
    }
    let numero = Math.floor(Math.random()* amigos.length);
    let amigoElegido = amigos[numero];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es ${amigoElegido}`;
}



