// Array de tarefas
let tarefas = [];

// Referências ao DOM
const inputDescricao = document.getElementById("descricao");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

// Função para renderizar a lista
function renderizarTarefas() {
  listaTarefas.innerHTML = ""; // limpa a lista

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.status;

    // Atualiza status ao clicar
    checkbox.addEventListener("change", () => {
      tarefas[index].status = !tarefas[index].status;
      renderizarTarefas();
    });

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    if (tarefa.status) {
      span.classList.add("concluida");
    }

    // === Botão remover ===
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "🗑️";
    btnRemover.classList.add("btn-remover");

    btnRemover.addEventListener("click", () => {
      tarefas.splice(index, 1); // remove do array
      renderizarTarefas(); // atualiza a lista
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);
  });
}

// Função para adicionar nova tarefa
function adicionarTarefa() {
  const descricao = inputDescricao.value.trim();
  if (descricao === "") {
    alert("Digite uma descrição para a tarefa!");
    return;
  }
  tarefas.push({ descricao: descricao, status: false });
  inputDescricao.value = "";
  renderizarTarefas();
}

// Eventos
btnAdicionar.addEventListener("click", adicionarTarefa);
inputDescricao.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
