    function selecionaItem (elemento) {
    let Botaoclicado = document.querySelector(".caixa1 .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");
    verificaSeTemTresSelecionados();

}

    function selecionaItem1 (elemento) {
    let Botaoclicado = document.querySelector(".caixa2 .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");
    verificaSeTemTresSelecionados();

}
function selecionaItem2 (elemento) {
    let Botaoclicado = document.querySelector(".caixa3 .selecionado");
    if (Botaoclicado !== null) {
        Botaoclicado.classList.toggle("selecionado");  
    }
    elemento.classList.add("selecionado");
    verificaSeTemTresSelecionados();


}

function verificaSeTemTresSelecionados() {
    let lista = document.querySelectorAll(".selecionado");
    const fecharPedido = document.querySelector(".caixa-texto");
    if (lista.length == 3) {
      fecharPedido.classList.add("fecharPedido");
      fecharPedido.innerHTML = "Fechar pedido";
    } else {
      fecharPedido.classList.remove("fecharPedido");
      fecharPedido.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
  }