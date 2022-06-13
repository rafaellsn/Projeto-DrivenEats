    function selecionaItem (elemento) {
    let Botaoclicado = document.querySelector(".selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");
}

    function selecionaItem2 (elemento) {
    let Botaoclicado = document.querySelector(".pratos .bebida .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");

}