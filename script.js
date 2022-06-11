function selecionaItem(elemento){
    const pratoSelecionado = document.querySelector(".liquido .selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.toggle("selecionado");
}
