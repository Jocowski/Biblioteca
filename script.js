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

    const livro = document.createElement("li");
    livro.classList.add("livro");

    const conteudo = `${valorTitulo} ${valorAutor} ${valorPaginas} ${valorStatus}`;

    livro.innerHTML = conteudo;

    lista.appendChild(livro);
    titulo.value = "";
    autor.value = "";
    paginas.value = "";

    form.style.display = "none";

}