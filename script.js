document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

//Função para saber em qual página está
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.cabecalho a');
    var currentPage = window.location.pathname.split('/').pop(); // Obtém o nome do arquivo da URL

    links.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});