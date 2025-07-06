// Validação do formulário de contato
const form = document.getElementById("formContato");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset();
    });
}

// Efeito interativo: mudar cor de fundo ao clicar no banner (exemplo simples)
const banner = document.querySelector(".banner");
if (banner) {
    banner.addEventListener("click", () => {
        banner.style.backgroundColor = "#d0f0c0";
    });
}
