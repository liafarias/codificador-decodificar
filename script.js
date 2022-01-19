function codificar() {
var normal = document.getElementById("entrada");
var codificar = document.getElementById("saida");
var texto = entrada.value;

texto = texto.replace("e", "enter");
texto = texto.replace("i", "imes");
texto = texto.replace("a", "ai");
texto = texto.replace("o", "ober");
texto = texto.replace("u", "ufat");

saida.value = texto;
}

function decodificar() {
    var normal = document.getElementById("entrada");
    var codificar = document.getElementById("saida");
    var texto = entrada.value;
    
    texto = texto.replace("enter", "e");
    texto = texto.replace("imes", "i");
    texto = texto.replace("ai", "a");
    texto = texto.replace("ober", "o");
    texto = texto.replace("ufat", "u");
    
    saida.value = texto;
}

    function btnCopy() {
        let textoCopiado = document.getElementById("saida");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
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