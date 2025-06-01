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
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navegacao');
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});