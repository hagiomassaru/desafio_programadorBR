var listaStorage = localStorage.getItem("listageral");
var listageral =
    listaStorage == null || listaStorage == "[]"
        ? (listageral = [])
        : (listageral = JSON.parse(localStorage.getItem("listageral"))); // preparando para receber dados

function addlista() {
    let valor = document.getElementById("entrada").value;
    listageral.push(valor);
    salvar();
    location.reload();
}
function salvar() {
    console.log(JSON.stringify(listageral)); // um loge para ver o que esta acontecendo
    localStorage.setItem("listageral", JSON.stringify(listageral)); // uso json para salvar no local storage
}
function limpar() {
    localStorage.clear();
    location.reload();
}
function excluir(elemento) {
    let delelemento = elemento.getAttribute("value");
    console.log(delelemento);
    listageral.splice(delelemento, 1);
    salvar();
    location.reload();
}

// design
function designListaGeral() {
    // serve para acrescentar listageral no html
    let conteudo = document.getElementById("result");
    let listagravada = JSON.parse(localStorage.getItem("listageral"));
    let strchar = "";
    let num = 0;
    if (listagravada != null) {
        for (var i of listagravada) {
            strchar +=
                "<li class='dados'>" +
                i +
                "</li><img class='imagem' src='img/del.png' value='" +
                num +
                "' onclick='excluir(this)'><br>";
            num++;
        }
    }
    conteudo.innerHTML = strchar;
    // location.reload();
}
