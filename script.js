let frase = document.querySelector("#entrada");

let codificar = document.querySelector("#btn-cripto");

let decodificar = document.querySelector("#btn-descripto");

let copiar = document.querySelector("#btn-copy");

let result = document.querySelector("#saida");

let resultado = document.querySelector(".button_Result");

const regex = new RegExp("^[a-z 0-9\b]");


codificar.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(convert(frase.value));

    frase.value = "";

})

decodificar.addEventListener('click', (event) => {

    event.preventDefault();

    result.textContent = caracteres(desconvert(frase.value));

    frase.value = "";

})

copiar.addEventListener('click', (event) => {

    event.preventDefault();

    result.select();

    document.execCommand('copy');
    frase.value = "";
    alert("copiado")
})



function convert(frase) {

    let nova_Frase = frase.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat").toLowerCase();

    return nova_Frase;

}

function desconvert(frase) {

    let nova_Frase_desconvert = frase.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    return nova_Frase_desconvert;

}

function caracteres(frase_teste) {

    if (!regex.test(frase_teste)) {

        return "CARACTERES ESPECIAIS NÃO SÃO PERIMITIDOS"
    }

    else {
        return  frase_teste;

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