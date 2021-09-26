const form = document.querySelector("[data-form]");

const botaoForm = document.querySelector("[data-botao-form]");
botaoForm.addEventListener("click", abrirFecharForm);

function abrirFecharForm() {

    if (form.style.display != "block") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }

}

const botaoNovoLivro = document.querySelector("[data-botao-novo-livro]");
botaoNovoLivro.addEventListener("click", criarNovoLivro);

function criarNovoLivro(evento) {

    evento.preventDefault();

    const lista = document.querySelector("[data-lista]");

    const titulo = document.querySelector("[data-titulo]");
    const autor = document.querySelector("[data-autor]");
    const paginas = document.querySelector("[data-paginas]");
    const status = document.querySelector("[data-status]");

    const valorTitulo = titulo.value;
    const valorAutor = autor.value;
    const valorPaginas = paginas.value;
    const valorStatus = status.options[status.selectedIndex].text;

    const livro = document.createElement("tr");
    livro.classList.add("livro");

    const botaoRemover = document.createElement("td");
    botaoRemover.classList.add("livro");
    botaoRemover.appendChild(BotaoRemover());

    const conteudo = `<td class="livro">${valorTitulo}</td><td class="livro">${valorAutor}</td><td class="livro">${valorPaginas}</td><td class="livro">${valorStatus}</td>`;

    livro.innerHTML = conteudo;
    livro.appendChild(botaoRemover);

    lista.appendChild(livro);
    titulo.value = "";
    autor.value = "";
    paginas.value = "";

    form.style.display = "none";

}

const BotaoRemover = () => {

    const botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";

    botaoRemover.addEventListener("click", removerLivro);

    return botaoRemover;

}

function removerLivro(evento) {

    const botaoRemove = evento.target;
    const livro = botaoRemove.parentElement.parentElement;

    livro.remove();

}