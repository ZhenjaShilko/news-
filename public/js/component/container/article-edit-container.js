;!function () {

    class ArticleEditContainer {
        constructor(id) {
            this.articleId = id.toString();
        }

        render() {
            let feed = document.querySelector('div.content');
            feed.innerHTML = '';
            articleService.getArticle(this.articleId).then((article) => {
                feed.appendChild(new ArticleEditView(article, this.callback(this.onAddClicked), this.callback(this.onBackClicked)).render());
            })
        }

        onAddClicked(article) {

            articleService.editArticle(this.articleId, article).then(() => {
                new ArticleListContainer().init();
            });
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
