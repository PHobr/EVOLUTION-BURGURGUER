
// FUNCIONALIDADE DO POP-UP DOS CARDS
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('popup-modal');
  const close = document.querySelector('.close');
  const cards = document.querySelectorAll('.card');
  
  // Abrir pop-up ao clicar no card
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const nome = this.getAttribute('data-nome');
      const descricao = this.getAttribute('data-descricao');
      const imagem = this.querySelector('img').src;
      
      document.getElementById('popup-nome').textContent = nome;
      document.getElementById('popup-descricao').textContent = descricao;
      document.getElementById('popup-imagem').src = imagem;
      
      modal.style.display = 'block';
    });
  });
  
  // Fechar pop-up ao clicar no X
  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Fechar pop-up ao clicar fora do modal
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  
});

