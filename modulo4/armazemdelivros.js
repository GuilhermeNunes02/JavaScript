// Array para armazenar os livros
let estoque = [];

// Função para adicionar um livro
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe
    for (let livro of estoque) {
        if (livro.titulo === titulo) {
            console.log(`❌ O livro "${titulo}" já está no estoque.`);
            return;
        }
    }
    estoque.push({ titulo, autor, quantidade });
    console.log(`✅ Livro "${titulo}" adicionado com sucesso!`);
}

// Função para remover um livro
function removerLivro(titulo) {
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].titulo === titulo) {
            estoque.splice(i, 1);
            console.log(`✅ Livro "${titulo}" removido do estoque.`);
            return;
        }
    }
    console.log(`❌ Livro "${titulo}" não encontrado no estoque.`);
}

// Função para atualizar a quantidade de um livro
function atualizarQuantidade(titulo, novaQuantidade) {
    for (let livro of estoque) {
        if (livro.titulo === titulo) {
            livro.quantidade = novaQuantidade;
            console.log(`✅ Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
            return;
        }
    }
    console.log(`❌ Livro "${titulo}" não encontrado no estoque.`);
}

// Função para listar todos os livros
function listarLivros() {
    if (estoque.length === 0) {
        console.log("📚 O estoque está vazio.");
    } else {
        console.log("📚 Livros no estoque:");
        for (let livro of estoque) {
            console.log(`- ${livro.titulo} (Autor: ${livro.autor}) | Quantidade: ${livro.quantidade}`);
        }
    }
}

// =============================
// Testando o sistema
// =============================

adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 5);
adicionarLivro("1984", "George Orwell", 3);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 2); // já existe
adicionarLivro("Dragonball Mangá", "Akira Toriyama", 12);


listarLivros();

atualizarQuantidade("1984", 10);
removerLivro("O Senhor dos Anéis");
removerLivro("Harry Potter"); // não existe

listarLivros();
