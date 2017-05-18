;!function () {

    class ArticleListContainer {
    constructor() {
    }

    init() {
        this.articles = articleService.getArticles(0, 10);
        this.render();
    }

    render() {
        let newsList = new window.ArticleListView(this.articles).render();
        let feed = document.querySelector('div.content');
        feed.innerHTML = '';
        feed.appendChild(newsList);
    }
}

window.ArticleListContainer = ArticleListContainer;
}();

