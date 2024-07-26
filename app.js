let listaDeNumerosSorteados = []; //cria uma lista vazia
let limiteDeNumeros = 50;
let numeroSecreto = gerarNumeroAleatorio(); // guarda o valor gerado na funçao do numero secreto
let tentativas = 1; // guarda o numero de tentativas

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Chute um número entre 0 e 100';

//melhor uso de organização de codigo abaixo

function escreverTextoNaTela (tag, texto,) {
    let paragrafo = document.querySelector (tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //leitor de tela para textos
}

mensagemInicial();

function mensagemInicial() {
    escreverTextoNaTela ('h1', 'Jogo Do Número Secreto!'); //chama a funçao e manda o texto escrito pro HTML
    escreverTextoNaTela ('p', `Chute um número entre 0 e ${limiteDeNumeros}`); //chama a funçao e manda o texto escrito pro HTML
}

function verificarChute () {
    let chute = document.querySelector('input').value; // guarda o numero do chute na variavel
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) { // verifica se o chute é igual ao numero secreto no console
        escreverTextoNaTela ('h1', 'Isso aê!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';// verifica se o numero de tentativas é maior que 1, se for, ele vai ser chamado de tentativas, se não, vai ser chamado de tentativa
        let fraseTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        escreverTextoNaTela ('p', fraseTentativas);
        document.getElementById ('reiniciar') .removeAttribute
        ('disabled');
    } else {
        let tentativasErro = `você já tentou ${tentativas} vezes.`;
        if (chute > numeroSecreto) {
            escreverTextoNaTela ('h1', 'Tente de novo :(');
            escreverTextoNaTela ('p', `Tente um número menor`);
        } else {
            escreverTextoNaTela ('h1', 'Tente de novo :(');
            escreverTextoNaTela ('p', `Tente um número maior`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random()* limiteDeNumeros +1); // gera um numero aleatorio entre 1 e 100 e guarda na variavel numeroSorteado.
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length; //guarda a quantidade de itens na lista
    console.log (quantidadeDeNumerosSorteados);
    if (quantidadeDeNumerosSorteados === limiteDeNumeros) {
        listaDeNumerosSorteados = [];
    } // se a lista tiver a mesma quantidade do limite de numeros, a lista é zerada.
    console.log(listaDeNumerosSorteados);
    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled', true);
}