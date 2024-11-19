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

document.getElementById("formulario-dados").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const form = event.target;

    // Envia os dados do formulário para o SheetMonkey
    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            // Redireciona para o link da ementa após o envio bem-sucedido
            window.location.href = "https://cdn.prod.website-files.com/66143495d3e01ad1a958beed/66d70d3b74d17ceed93755dc_%5BEMENTA%20NOVA%20ID%5D%20Engenheiro%20de%20Software..pdf";
        } else {
            alert("Houve um erro ao enviar os dados. Tente novamente.");
        }
    })
    .catch(error => {
        console.error("Erro ao enviar formulário:", error);
        alert("Erro no envio do formulário. Por favor, tente novamente.");
    });
});
