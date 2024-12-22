const button = document.getElementById('surprise-btn');
const message = document.getElementById('surprise-message');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
  // Remove a classe 'd-none' para exibir a mensagem
  message.classList.remove('d-none');
  button.classList.remove('animate__pulse', 'animate__infinite');
});
  AOS.init({
    duration: 1200,
    once: true,  
  });  