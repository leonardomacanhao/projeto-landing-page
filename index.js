var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    leonardo.style = "display:none";
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:grid"
}

function RolarParaEsquerda(){
    leonardo.style = "display:flex";
    bruna.style = "display:none"
    setaDireita.style = "display:grid"
    setaEsquerda.style = "display:none"
}