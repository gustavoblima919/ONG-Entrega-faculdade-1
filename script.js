// --------------------------
// SPA básica
// --------------------------
function carregarPagina(pagina) {
  fetch(pagina)
    .then(response => response.text())
    .then(html => {
      document.getElementById("conteudo").innerHTML = html;
    })
    .catch(error => console.error("Erro ao carregar página:", error));
}

// Exemplo: Botões do menu chamando a SPA
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu-link");
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const pagina = link.getAttribute("data-pagina");
      carregarPagina(pagina);
    });
  });
});

// --------------------------
// Validação da inscrição
// --------------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();

      if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido!");
        return;
      }

      alert("Inscrição realizada com Sucesso!!");
      form.reset();
    });
  }
});

// --------------------------
// Armazenamento de Dados
// --------------------------
function salvarDadosLocalmente(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function carregarDadosLocalmente(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
