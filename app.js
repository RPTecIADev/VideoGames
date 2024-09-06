function pesquisar() {
let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um console para pesquisar.</p>"
    return 
}

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = ""; 
let descricao = "";
let defeitoSolucoes = "";

// Itera sobre cada dado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    defeitoSolucoes = dado.defeitoSolucoes.toLowerCase()
    link = dado.link.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || defeitoSolucoes.includes(campoPesquisa)) {

resultados += `
<div class="item-resultado">
    <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}.</p>
    <p class="lista-problemas">${dado.defeitoSolucoes}<p>
    <a href=${dado.link} target="_blank">Mais informações</a>
</div>

`;
}

}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados;
}
