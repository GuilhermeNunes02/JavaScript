// Carregar tarefas do localStorage
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Referências ao DOM
const inputDescricao = document.getElementById("descricao");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Salvar no localStorage
function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Renderizar lista de tarefas
function renderizarTarefas() {
  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    // Parte esquerda (checkbox + descrição)
    const divTarefa = document.createElement("div");
    divTarefa.classList.add("tarefa");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;

    checkbox.addEventListener("change", () => {
      tarefas[index].status = !tarefas[index].status;
      salvarTarefas();
      renderizarTarefas();
    });

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    if (tarefa.status) {
      span.classList.add("concluida");
    }

    divTarefa.appendChild(checkbox);
    divTarefa.appendChild(span);

    // Botão remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "❌";
    btnRemover.classList.add("btn-remover");
    btnRemover.addEventListener("click", () => {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderizarTarefas();
    });

    li.appendChild(divTarefa);
    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);
  });
}

// Adicionar nova tarefa
function adicionarTarefa() {
  const descricao = inputDescricao.value.trim();

  if (descricao === "") {
    alert("Digite uma descrição para a tarefa!");
    return;
  }

  tarefas.push({ descricao: descricao, status: false });
  salvarTarefas();
  renderizarTarefas();

  inputDescricao.value = "";
  inputDescricao.focus();
}

// Eventos
btnAdicionar.addEventListener("click", adicionarTarefa);
inputDescricao.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

// Inicializar
renderizarTarefas();
