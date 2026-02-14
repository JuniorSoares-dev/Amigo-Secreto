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
    if (amigos.length < 2){ 
        alert('adicione ao menos 2 amigos na lista');
    return; }
}