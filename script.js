let frase = document.querySelector("#entrada");
let result = document.querySelector("#saida");
let codificar = document.querySelector("#btn-cripto");
let decodificar = document.querySelector("#btn-descripto");
let copiar = document.querySelector("#btn-copy");
const regex = new RegExp("^[a-z 0-9\b]");


codificar.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(codifica(frase.value));

    frase.value = "";

})

decodificar.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(descodifica(frase.value));

    frase.value = "";

})

copiar.addEventListener('click', (event) => {

    event.preventDefault();

    result.select();

    document.execCommand('copy');
    frase.value = "";
})



function codifica(frase) {

    let fraseCodificada = frase.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat").toLowerCase();

    return fraseCodificada;

}

function descodifica(frase) {

    let fraseDescodificada = frase.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return fraseDescodificada;

}

function caracteres(frase) {

    if (!regex.test(frase)) {

        return "ATENÇÃO: Você precisa digitar frases com apenas letras minúsculas e sem acento para continuar."
    }
    else {
        return  frase;

    }

}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/