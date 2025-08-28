function comprar()
{
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo == 'pista')
    {
        comprarPista(qtd);
    } else if(tipo == 'superior') {
        comprarSuperior(qtd);
    } else if(tipo == 'inferior') {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd)
{
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista.textContent) {
        alert('Quantidade indisponível para o tipo pista!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso para o tipo pista!');
    }
}

function comprarSuperior(qtd)
{
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para o tipo cadeira superior!');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso para o tipo cadeira superior!');
    }
}

function comprarInferior(qtd)
{
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo cadeira inferior!');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso para o tipo cadeira inferior!');
    }
}