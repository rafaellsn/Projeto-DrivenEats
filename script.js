    function selecionaItem (elemento) {
    let Botaoclicado = document.querySelector(".caixa1 .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");
}

    function selecionaItem1 (elemento) {
    let Botaoclicado = document.querySelector(".caixa2 .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");

}
function selecionaItem2 (elemento) {
    let Botaoclicado = document.querySelector(".caixa3 .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");

}


