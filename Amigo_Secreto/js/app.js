let amigos = [];

function adicionar()
{
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);

    if(listaAmigos.textContent == '')
    {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent += ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function embaralha(listaAmigos) 
{
    for (let indice = listaAmigos.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] = 
        [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}

function sortear()
{
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++)
    {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar()
{
    amigos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}