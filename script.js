function selecionaItem(elemento){
    const pratoSelecionado = document.querySelector(".selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");

    }
     
    elemento.classList.add("selecionado");
}