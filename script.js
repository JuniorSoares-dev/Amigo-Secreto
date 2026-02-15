let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if (amigo.value === '') {
        alert('Digite o Nome do Amigo');
        return;
    }

    amigos.push(amigo.value);

    if (lista.textContent === '') {
        lista.textContent = amigo.value;
    }
    else {
        lista.textContent += ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione ao Menos 2 Amigos na Lista');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }

}

function embaralha(lista) {
    for (let indice = lista.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));

        [lista[indice], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice]];
    }

    return lista;

}
function reiniciar(){
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}
