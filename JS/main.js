

function atualizaCronometro() {
  const dias = document.getElementById('dias');
  const horas = document.getElementById('horas');
  const min = document.getElementById('min');
  const seg = document.getElementById('seg');

  const dataFim = new Date('November 4, 2024 23:59:59').getTime();
  const agora = new Date().getTime();
  const tempoRestante = dataFim - agora;

  const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  dias.textContent = diasRestantes;
  horas.textContent = horasRestantes;
  min.textContent = minutosRestantes;
  seg.textContent = segundosRestantes;

  if (tempoRestante < 0) {
    dias.textContent = 0;
    horas.textContent = 0;
    min.textContent = 0;
    seg.textContent = 0;
  }
}

setInterval(atualizaCronometro, 1000);

// Função para rolar para o topo da página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para mostrar ou esconder o botão de "voltar ao topo" com base na rolagem da página
window.onscroll = function() {
  const backToTopButton = document.getElementById('botao__inicio');
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};