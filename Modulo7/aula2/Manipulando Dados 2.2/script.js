// Estado do feed
let posts = [];

// Usuário fixo (pode ser dinâmico no futuro)
const usuario = {
  nome: "Guilherme",
  avatar: "https://i.pravatar.cc/100?img=12"
};

// Referências DOM
const formPost = document.getElementById("formPost");
const textoPost = document.getElementById("textoPost");
const feed = document.getElementById("feed");

// Função para buscar imagem de gatinho da API
async function getCatImage() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    return data[0].url;
  } catch (error) {
    console.error("Erro ao buscar imagem de gatinho:", error);
    return "https://placekitten.com/400/300"; // fallback
  }
}

// Função para renderizar feed
function renderizarFeed() {
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    const li = document.createElement("li");
    li.classList.add("post");

    li.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" alt="Avatar">
        <div>
          <span class="post-user">${post.usuario}</span><br>
          <span class="post-date">${post.data}</span>
        </div>
      </div>
      <p class="post-text">${post.texto}</p>
      <img src="${post.imagem}" class="cat-img" alt="Gatinho fofo">
      <button class="like-btn" data-index="${index}">
        ❤️ ${post.likes}
      </button>
    `;

    feed.appendChild(li);
  });

  // Eventos de curtir
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      posts[i].likes++;
      renderizarFeed();
    });
  });
}

// Função para criar um novo post
async function criarPost(texto) {
  const imagem = await getCatImage();
  const data = new Date().toLocaleString("pt-BR");

  const novoPost = {
    data,
    usuario: usuario.nome,
    avatar: usuario.avatar,
    texto,
    imagem,
    likes: 0
  };

  posts.push(novoPost);
  renderizarFeed();
}

// Evento de postar
formPost.addEventListener("submit", async (e) => {
  e.preventDefault();
  const texto = textoPost.value.trim();
  if (texto === "") return;

  await criarPost(texto);
  textoPost.value = "";
});
