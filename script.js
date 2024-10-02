// Aquí puedes agregar funcionalidades interactivas si lo deseas

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.querySelector('h2').innerText.toLowerCase();
        if (title.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
