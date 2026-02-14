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
    if (amigos.length < 2) {
        alert('Adicione ao Menos 2 Amigos na Lista');
        return;
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

