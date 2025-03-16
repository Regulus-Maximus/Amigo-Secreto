
let amigos = [];


function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo"); 
    const nomeAmigo = inputAmigo.value.trim(); 

    if (nomeAmigo) { 
        amigos.push(nomeAmigo); 
        atualizarListaAmigos(); 
        inputAmigo.value = ""; 
    } else {
        alert(" Ei!!! Coloca um nome >:( ) "); 
    }
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos"); 
    listaAmigos.innerHTML = ""; 

    amigos.forEach(function (nome) {
        const itemLista = document.createElement("li"); 
        itemLista.textContent = nome; 
        listaAmigos.appendChild(itemLista); 
    });
}


function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("tem que colocar pelo menos doisss");
        return;
    }

    const listaResultado = document.getElementById("resultado"); 
    listaResultado.innerHTML = ""; 

    
    const amigosEmbaralhados = amigos.slice().sort(() => Math.random() - 0.5);

    
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; 

        const itemResultado = document.createElement("li"); 
        itemResultado.textContent = `${amigoAtual} ➔ ${amigoSecreto}`; 
        listaResultado.appendChild(itemResultado); 
    }
}