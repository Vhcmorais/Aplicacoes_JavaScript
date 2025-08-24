let jogosAlugados = 0;

function contarJogosAlugados()
{
    console.log(`O número de jogos alugados é: ${jogosAlugados}`);
}

function alterarStatus(id)
{
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let gameNome = gameClicado.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return'))
    {
        let confirmacao = prompt(`Certeza que deseja devolver o jogo: ${gameNome.textContent}? \n "Sim" para devolver."Não" para cancelar."`);

        if (confirmacao == 'Sim')
        {
             botao.classList.remove('dashboard__item__button--return');
             botao.textContent = "Alugar";
             imagem.classList.remove('dashboard__item__img--rented');
             jogosAlugados--;

        } else if (confirmacao == '')
        {
            alert('Não foi possível devolver o jogo! Verifique as informações!');
        } else {
            return;
        }

    } else{
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver"
        imagem.classList.add('dashboard__item__img--rented');
        jogosAlugados++;
    }

    contarJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function()
{
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});