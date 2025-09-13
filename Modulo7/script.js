// Carregar curtidas do localStorage (ou array vazio)
let curtidas = JSON.parse(localStorage.getItem("curtidas")) || [];

// Referências ao DOM
const inputNome = document.getElementById("nome");
const btnCurtir = document.getElementById("btnCurtir");
const btnLimpar = document.getElementById("btnLimpar");
const mensagemCurtidas = document.getElementById("mensagemCurtidas");
const listaCurtidas = document.getElementById("listaCurtidas");

// Função para atualizar a mensagem principal
function atualizarMensagem() {
  const total = curtidas.length;

  if (total === 0) {
    mensagemCurtidas.textContent = "Ninguém curtiu";
  } else if (total === 1) {
    mensagemCurtidas.textContent = `${curtidas[0]} curtiu`;
  } else if (total === 2) {
    mensagemCurtidas.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
  } else {
    mensagemCurtidas.textContent =
      `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
  }
}

// Função para atualizar a lista de curtidas extra
function atualizarLista() {
  listaCurtidas.innerHTML = "";
  curtidas.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaCurtidas.appendChild(li);
  });
}

// Salvar no localStorage
function salvarNoLocalStorage() {
  localStorage.setItem("curtidas", JSON.stringify(curtidas));
}

// Função principal para curtir
function curtir() {
  const nome = inputNome.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  // Verifica se já existe
  if (!curtidas.includes(nome)) {
    curtidas.push(nome);
    salvarNoLocalStorage();
    atualizarMensagem();
    atualizarLista();
  } else {
    alert(`⚠️ O nome "${nome}" já curtiu!`);
  }

  inputNome.value = "";
  inputNome.focus();
}

// Função para limpar tudo
function limpar() {
  curtidas = [];
  localStorage.removeItem("curtidas");
  atualizarMensagem();
  atualizarLista();
}

// Eventos
btnCurtir.addEventListener("click", curtir);
inputNome.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    curtir();
  }
});
btnLimpar.addEventListener("click", limpar);

// Inicializar ao carregar a página
atualizarMensagem();
atualizarLista();
