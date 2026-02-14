function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if (amigo.value === '') {
        alert('Digite o Nome do Amigo');
        return;
    }
    if (lista.textContent === '') {
        lista.textContent = amigo.value;
    }
    else {
        lista.textContent += ', ' + amigo.value;
    }
    amigo.value = ''
}