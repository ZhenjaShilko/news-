;!function () {

    class ArticleEditContainer {
        constructor(id) {
            this.articleId = id.toString();
        }

        render() {
            let feed = document.querySelector('div.content');
            feed.innerHTML = '';
            feed.appendChild(new ArticleEditView(articleService.getArticle(this.articleId), this.callback(this.onAddClicked), this.callback(this.onBackClicked)).render());
        }

        onAddClicked(article) {

            articleService.editArticle(this.articleId, article);
            new ArticleListContainer().init();
        }

        onBackClicked() {
            new ArticleListContainer().init();
        }

        callback(fn) {
            return fn.bind(this);
        }
    }

    window.ArticleEditContainer = ArticleEditContainer;
}();
