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

  function enviaProWhats(elemento){
    console.log(document.querySelector(".pratos .selecionado .texto-prato"))



    let custoPrato = document.querySelector(".caixa3 .selecionado .valor").textContent;
    let custoBebida = document.querySelector("sobremesa .selecionado .valor").textContent;
    let custoSobremesa = document.querySelector(".sobremesa .selecionado .valor").textContent;

    custoPrato = Number(custoPrato.replace(",", "."));
    custoBebida = Number(custoBebida.replace(",", "."));
    custoSobremesa = Number(custoSobremesa.replace(",", "."));
    let custoTotal = (custoPrato + custoBebida + custoSobremesa).toFixed(2);
    let msg1 = "https://wa.me/49999554288?text=";
    let msg2 = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n  Total: prato ${custoTotal}`;
    console.log(msg2);
    let encoded = encodeURIComponent(msg2);
  
    window.location.href = msg1 + encoded;
    console.log();


  }
  
  