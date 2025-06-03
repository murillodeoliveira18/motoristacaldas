function enviarmensagem(event) {
    event.preventDefault();
    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const telefone = '5562981965944';
    const texto = `Olá, meu nome é ${nome.value}, ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
    window.open(url, '_blank');
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a'); // Seleciona todos os links dentro do menu

// Alterna o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu ao clicar em um item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Adiciona/remova a classe 'scrolled' ao scrollar
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navegacao');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});