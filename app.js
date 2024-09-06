function pesquisar() {
    console.log(dados);

    let section = document.getElementById("resultados_pesquisa");

    let campoPesquisa = document.getElementById("campo_pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = ""; 
    let tags = "";

    if (campoPesquisa == "") {
        window.alert("Campo de Pesquisa Vazio.");
        return;
    } 

    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo}
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                     <a href="${dado.link}">Saiba Mais</a>
            </div> `;
        }
    }

    if (!resultados) {
        window.alert("Nada foi encontrado.");
        return;
    }
    
    section.innerHTML = resultados;
}


