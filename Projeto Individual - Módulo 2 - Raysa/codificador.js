let mensagemCripto = document.getElementById("respostaCripto")
let mensagemDescripto = document.getElementById("respostaDescripto")
let incremento = document.getElementById("incremento");
incremento = incremento.value;

function CodificarCesar() {

    let mensagem = document.getElementById("mensagem").value.toUpperCase();
    let resultado = "";
    let letras = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Space");
    let incremento = document.getElementById("incremento");
    incremento = incremento.value;
    
    if(incremento > 1) {
        incremento++;
    }

    for(cont = 0; cont < mensagem.length; cont++) {

        PosicaoLetra = mensagem.charCodeAt(cont) - 64;
        LetraDeslocada = (PosicaoLetra + incremento) % 26;
        LetraDeslocada = LetraDeslocada == 0 ? 26 : LetraDeslocada;
        resultado += letras[LetraDeslocada-2];

        document.getElementById("respostaCripto").innerText = resultado;

    }
}

function DecodificarCesar() {
    let mensagem = document.getElementById("mensagem").value.toUpperCase();
    let resultado = "";
    let letras = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    let incremento = document.getElementById("incremento");
    incremento = incremento.value;

    if(incremento > 1) {
        incremento++;
    }

    for(cont = 0; cont < mensagem.length; cont++) {

        PosicaoLetra = mensagem.charCodeAt(cont) - 64;
        LetraDeslocada = (PosicaoLetra - incremento) % 26;
        LetraDeslocada = LetraDeslocada == 0 ? 26 : LetraDeslocada;
        resultado += letras[LetraDeslocada+2];

        document.getElementById("respostaDescripto").innerText = resultado;

    }
}

function CodificaBase(){

    let texto = document.getElementById("mensagem2")
    texto = mensagem2.value

    let emBase64 = btoa(texto)
    console.log(emBase64)

    let deBase64 = atob(emBase64)
    console.log(deBase64)

    document.getElementById("respostaCripto2").innerText = emBase64;
}

function DecodificaBase(){

    let texto = document.getElementById("mensagem2")
    texto = mensagem2.value

    let emBase64 = btoa(texto)
    console.log(emBase64)

    let deBase64 = atob(emBase64)
    console.log(deBase64)

    document.getElementById("respostaDescripto2").innerText = deBase64;
}