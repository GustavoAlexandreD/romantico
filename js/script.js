const startDate = new Date("04/20/2024"); // Data de início do relacionamento
const currentDate = new Date(); // Data atual
const differenceInTime = currentDate - startDate;
const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
document.getElementById("days-together").textContent = differenceInDays;

// Função para criar estrelas caindo
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star-animation');
  
    // Variar o tamanho das estrelas
    const size = Math.random() * 25 + 30; // Tamanhos entre 30px e 55px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    // Variar as cores das estrelas
    const colors = ['#ff4d4d', '#ff69b4', '#db7093', '#ff1493', '#c71585']; // Tons de vermelho e rosa
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Definir posição horizontal aleatória
    star.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
    star.style.animationDuration = Math.random() * 3 + 2 + "s"; // Velocidade aleatória entre 2s e 5s
  
    document.body.appendChild(star);
    
    // Remover a estrela depois da animação para não sobrecarregar a página
    setTimeout(() => {
      star.remove();
    }, 5000); // Estrela desaparece depois de 5s
  }
  
  // Gerar estrelas a cada 300ms
  setInterval(createStar, 300);

  document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star-animation');

    stars.forEach(star => {
        // Atraso aleatório entre 0 e 5 segundos
        const delay = Math.random() * 5;
        star.style.animationDelay = `${delay}s`;
        
        // Posicionar aleatoriamente as estrelas na tela
        const randomX = Math.random() * 100; // Percentual da largura da tela
        star.style.left = `${randomX}vw`;
    });
});
  
const quotes = [
    "A maneira como ela ficou na minha frente, como a verdadeira personificação da beleza, com seus cabelos lisos, me fez sentir consternado e impotente diante de seu feitiço. — Mori Ogai  ",
    "As pessoas existem para o amor e a revolução. — Osamu Dazai",
    "Amar não é olhar um para o outro, é olhar juntos na mesma direção. — Antoine de Saint-Exupéry",
    "Você é minha história de amor favorita.",
    "O amor é a poesia dos sentidos. — Honoré de Balzac",
    "A verdadeira história do amor é a que cada um de nós vive.",
    "Se eu tivesse que escolher entre respirar e te amar, eu usaria meu último suspiro para te dizer que eu te amo.",
    "Te amo não só pelo que você é, mas pelo que sou quando estou com você."
];

// Seleciona um índice aleatório da array de frases
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Exibe a frase selecionada na página
document.getElementById("quote").innerText = randomQuote;
  
  