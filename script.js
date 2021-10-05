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

let listaTitulo = [];
let listaAutor = [];
let listaPaginas = [];
let listaStatus = [];

const botaoNovoLivro = document.querySelector("[data-botao-novo-livro]");
botaoNovoLivro.addEventListener("click", criarNovoLivro);

function criarNovoLivro(evento) {

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]");
    const autor = document.querySelector("[data-autor]");
    const paginas = document.querySelector("[data-paginas]");
    const status = document.querySelector("[data-status]");

    const tituloValor = document.querySelector("[data-titulo]").value;
    const autorValor = document.querySelector("[data-autor]").value;
    const paginasValor = document.querySelector("[data-paginas]").value;
    const statusValor = status.options[status.selectedIndex].text

    criarLivro(tituloValor, autorValor, paginasValor, statusValor);
    
    titulo.value = "";
    autor.value = "";
    paginas.value = "";

    form.style.display = "none";

}

function criarLivro(titulo, autor, paginas, status) {

    const lista = document.querySelector("[data-lista]");

    const livro = document.createElement("tr");
    livro.classList.add("livro");

    const botaoRemover = document.createElement("td");
    botaoRemover.classList.add("livro");
    botaoRemover.appendChild(BotaoRemover());

    const conteudo = `<td class="livro">${titulo}</td><td class="livro">${autor}</td><td class="livro">${paginas}</td><td class="livro">${status}</td>`;

    livro.innerHTML = conteudo;
    livro.appendChild(botaoRemover);

    lista.appendChild(livro);

    listaTitulo.push(titulo);
    listaAutor.push(autor);
    listaPaginas.push(paginas);
    listaStatus.push(status);

    salvarLivros()

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

    listaTitulo.splice(livro.rowIndex - 1, 1);
    listaAutor.splice(livro.rowIndex - 1, 1);
    listaPaginas.splice(livro.rowIndex - 1, 1);
    listaStatus.splice(livro.rowIndex - 1, 1);

    salvarLivros();

    livro.remove();

}

function salvarLivros() {

    localStorage.setItem("listaTitulo", JSON.stringify(listaTitulo));
    localStorage.setItem("listaAutor", JSON.stringify(listaAutor));
    localStorage.setItem("listaPaginas", JSON.stringify(listaPaginas));
    localStorage.setItem("listaStatus", JSON.stringify(listaStatus));

}

function criarLivrosSalvos() {

    const titulos = JSON.parse(localStorage.getItem("listaTitulo"));
    const autores = JSON.parse(localStorage.getItem("listaAutor"));
    const paginas = JSON.parse(localStorage.getItem("listaPaginas"));
    const statues = JSON.parse(localStorage.getItem("listaStatus"));

    for (let i = 0; i < titulos.length; i++) {

        criarLivro(titulos[i], autores[i], paginas[i], statues[i]);

    }
    
}

if (localStorage.getItem("listaTitulo")) {

    criarLivrosSalvos();
}