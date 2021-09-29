function teste(elemento) {
    let lista = [];
    lista.push(elemento.value);
    let armazenamento = JSON.stringify(lista);
    localStorage.setItem("lista", armazenamento);
    console.log(localStorage.getItem("lista"));
}
