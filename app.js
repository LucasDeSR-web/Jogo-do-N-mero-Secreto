let listaDeNumerosSorteados = [];
let limiteDeNumeros = 100;
let numemeroSecreto = gerarNumeroAleatoriso();
let tentativas = 1

mensagemInicial()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
   if (chute == numemeroSecreto) {
    exibirTextoNaTela ('h1', 'Acertou!!!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativa = `O numero secreto é ${chute}, você encontrou com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela ('p', mensagemTentativa);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else  {
        if (chute > numemeroSecreto) {
        exibirTextoNaTela ('p', `O numero é menor que ${chute}`);
        } else if (chute < numemeroSecreto) {
        exibirTextoNaTela ('p', `O numero é maior que ${chute}`);
        }
        tentativas++;
        limparCampo ();
    }
    
}

function gerarNumeroAleatoriso(){
    let numeroEscolhido = parseInt (Math.random () * limiteDeNumeros + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeNumerosNaLista == limiteDeNumeros) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatoriso();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);        
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numemeroSecreto = gerarNumeroAleatoriso();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}