let totalPista = document.getElementById('qtd-pista').textContent;
let totalCadeiraSuperior = document.getElementById('qtd-superior').textContent;
let totalCadeiraInferior = document.getElementById('qtd-inferior').textContent;

function comprar(){
    let setor = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(isNaN(quantidade) || quantidade <= 0){
        alert('Quantidade Inválida!');
        return;
    }

    if(setor == 'inferior'){
        if(quantidade > totalCadeiraInferior){
            alert('Quantidade Indisponível');
            return;
        }
        totalCadeiraInferior = totalCadeiraInferior - quantidade;
    }
    else if(setor == 'superior'){
        if(quantidade > totalCadeiraSuperior){
            alert('Quantidade Indisponível');
            return;
        }
        totalCadeiraSuperior = totalCadeiraSuperior - quantidade;
    }
    else{
        if(quantidade > totalPista){
            alert('Quantidade Indisponível');
            return;
        }
        totalPista = totalPista - quantidade;
    }

    let disponiveis = document.querySelector('.lista');
    disponiveis.innerHTML = `<li>Pista<span id="qtd-pista">${totalPista}</span></li>
    <li>Cadeira superior<span id="qtd-superior">${totalCadeiraSuperior}</span></li>
    <li>Cadeira inferior<span id="qtd-inferior">${totalCadeiraInferior}</span></li>`;
}