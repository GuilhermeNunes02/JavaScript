const campoBusca = document.getElementById("campoBusca");
const btnBuscar = document.getElementById("btnBuscar");
const listaUsuarios = document.getElementById("listaUsuarios");
const mensagem = document.getElementById("mensagem");

// Função para buscar usuários
async function buscarUsuarios() {
  const termo = campoBusca.value.trim();

  if (termo === "") {
    mensagem.textContent = "Digite um nome para pesquisar!";
    listaUsuarios.innerHTML = "";
    return;
  }

  mensagem.textContent = "🔄 Buscando...";
  listaUsuarios.innerHTML = "";

  try {
    const resposta = await fetch(`https://api.github.com/search/users?q=${termo}`);
    const dados = await resposta.json();

    if (dados.items && dados.items.length > 0) {
      mensagem.textContent = `Foram encontrados ${dados.items.length} usuários:`;

      dados.items.forEach(user => {
        const li = document.createElement("li");

        const avatar = document.createElement("img");
        avatar.src = user.avatar_url;

        const link = document.createElement("a");
        link.href = user.html_url;
        link.textContent = user.login;
        link.target = "_blank";

        li.appendChild(avatar);
        li.appendChild(link);
        listaUsuarios.appendChild(li);
      });

    } else {
      mensagem.textContent = "❌ Não foram encontrados usuários para esta pesquisa";
    }

  } catch (erro) {
    mensagem.textContent = "⚠️ Erro ao buscar usuários. Tente novamente.";
    console.error(erro);
  }
}

// Evento do botão
btnBuscar.addEventListener("click", buscarUsuarios);

// Enter no input
campoBusca.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    buscarUsuarios();
  }
});
