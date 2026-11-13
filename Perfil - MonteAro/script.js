//  "Foto de Perfil"

        // Pega o campo de escolher arquivo e a imagem da foto no Explorador.
const inputFoto = document.getElementById("inputFoto");
const fotoPerfil = document.getElementById("fotoPerfil");

        // Quando uma imagem é escolhida e selecionada, ela aparecerá no lugar da foto do usuário.
inputFoto.addEventListener("change", function () {
    const arquivo = inputFoto.files[0];

    if (arquivo) {
        fotoPerfil.src = URL.createObjectURL(arquivo);
    }
});


    // "Janelinha dos Meus Dados".

        // Pega os elementos da janelinha, dos campos e do perfil.
const janela = document.getElementById("janelaDados");
const btnDados = document.getElementById("btnDados");
const btnCancelar = document.getElementById("btnCancelar");
const formDados = document.getElementById("formDados");
const campoNome = document.getElementById("campoNome");
const campoEmail = document.getElementById("campoEmail");
const campoCpf = document.getElementById("campoCpf");
const campoNascimento = document.getElementById("campoNascimento");
const nomeTexto = document.getElementById("nomeTexto");
const emailTexto = document.getElementById("emailTexto");

        // Abre a janelinha ao clicar em "Meus Dados".
btnDados.addEventListener("click", function () {
    janela.showModal();
});

        // Fecha a janelinha sem salvar.
btnCancelar.addEventListener("click", function () {
    janela.close();
});

        // Ao clicar em "Salvar": mostra nome e e-mail no perfil e guarda os dados informados.
formDados.addEventListener("submit", function (evento) {
    evento.preventDefault();   // não deixa a página recarregar!

        // Mostra o nome no perfil (ou volta ao texto padrão se estiver vazio).
    if (campoNome.value !== "") {
        nomeTexto.textContent = "Olá, " + campoNome.value;
    } else {
        nomeTexto.textContent = "Olá,...";
    }

        // Mostra o e-mail no perfil (ou volta também ao texto padrão se estiver vazio).
    if (campoEmail.value !== "") {
        emailTexto.textContent = campoEmail.value;
    } else {
        emailTexto.textContent = "Email:";
    }

        // Guarda os dados no navegador para não sumirem ao recarregar!
    localStorage.setItem("nome", campoNome.value);
    localStorage.setItem("email", campoEmail.value);
    localStorage.setItem("cpf", campoCpf.value);
    localStorage.setItem("nascimento", campoNascimento.value);

    janela.close();
});


    // "Carregar Dados" - ao abrir a página do Perfil, os dados guardados aparecem nos campos da caixa do Perfil.

        // Busca os dados guardados e coloca nos campos e no perfil.
function carregarDados() {
    const nomeSalvo = localStorage.getItem("nome");
    const emailSalvo = localStorage.getItem("email");
    const cpfSalvo = localStorage.getItem("cpf");
    const nascimentoSalvo = localStorage.getItem("nascimento");

    if (nomeSalvo) {
        campoNome.value = nomeSalvo;
        nomeTexto.textContent = "Olá, " + nomeSalvo;
    }
    if (emailSalvo) {
        campoEmail.value = emailSalvo;
        emailTexto.textContent = emailSalvo;
    }
    if (cpfSalvo) {
        campoCpf.value = cpfSalvo;
    }
    if (nascimentoSalvo) {
        campoNascimento.value = nascimentoSalvo;
    }
}

        // Roda a função assim que a página abrir!
carregarDados();