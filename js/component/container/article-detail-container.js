;!function () {

    class ArticleDetailContainer{
        constructor(articleId) {
            this.articleId = articleId.toString();
        }

        render() {
            let feed = document.querySelector('div.content');
            feed.innerHTML = '';
            let article = articleService.getArticle(this.articleId);
            feed.appendChild(new ArticleDetailView(article).render());
        }
    }

    window.ArticleDetailContainer = ArticleDetailContainer;
}();
