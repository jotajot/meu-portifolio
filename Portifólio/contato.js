document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    // Recupera os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Aqui você pode implementar a lógica para enviar os dados do formulário para o servidor
    // Por enquanto, apenas exibiremos uma mensagem de confirmação
    document.getElementById('form-container').style.display = 'none'; // Esconde o formulário
    document.getElementById('confirmation').style.display = 'block'; // Exibe a mensagem de confirmação
});