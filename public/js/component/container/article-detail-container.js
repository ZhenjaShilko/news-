;!function () {

    class ArticleDetailContainer{
        constructor(articleId) {
            this.articleId = articleId.toString();
        }

        render() {
            let feed = document.querySelector('div.content');
            feed.innerHTML = '';
            articleService.getArticle(this.articleId).then(article => {
                feed.appendChild(new ArticleDetailView(article).render());
            });
        }
    }

    window.ArticleDetailContainer = ArticleDetailContainer;
}();
