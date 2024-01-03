function validarForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Validar o formato do e-mail
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    // Validar senha com pelo menos 8 caracteres
    if (senha.length < 8) {
        alert('A senha deve conter pelo menos 8 caracteres.');
        return false;
    }

    // Adicione aqui a lógica para processar o cadastro
    exibirSucesso();
    return false; // Impede o envio do formulário
}

function exibirSucesso() {
    var form = document.getElementById('cadastroForm');
    var sucessoDiv = document.getElementById('sucesso');

    form.style.display = 'none';
    sucessoDiv.style.display = 'block';
}