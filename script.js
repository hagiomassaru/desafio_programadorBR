var listageral = []; // preparando para receber dados

function addlista() {
    let valor = document.getElementById("entrada").value;
    listageral.push(valor);
    return listageral;
}
function salvar() {
    let texto = listageral; //
    console.log(JSON.stringify(listageral)); // um loge para ver o que esta acontecendo
    localStorage.setItem("listageral", JSON.stringify(listageral)); // uso json para salvar no local storage
}
function limpar() {
    localStorage.clear();
    alert("Cache Limpo");
    location.reload();
}
function visualizar() {
    alert("lista " + listageral);
    alert("lista gravada " + localStorage.getItem("listageral"));
}
function excluir() {
    console.log("teste");
}

// design

function designListaGravada() {
    // serve para acrescentar listageral do localStorage no html
    let conteudo = document.getElementById("result");
    let listagravada = JSON.parse(localStorage.getItem("listageral"));
    let strchar = "";
    if (listagravada != null) {
        for (var i of listagravada) {
            strchar +=
                "<li class='dados'>" +
                i +
                "</li><input type='button' class='caixa' value='excluir'><br>";
        }
    }
    conteudo.innerHTML = strchar;
}
function designListaGeral() {
    // serve para acrescentar listageral no html
    let conteudo = document.getElementById("result");
    let listagravada = listageral;
    let strchar = "";
    let num = 0;
    if (listagravada != null) {
        for (var i of listagravada) {
            strchar +=
                "<li class='dados'>" +
                i +
                "</li><img class='imagem' src='img/del.png' alt='" +
                num +
                "' onclick='excluir()'><br>";
            num++;
        }
    }
    conteudo.innerHTML = strchar;
}
