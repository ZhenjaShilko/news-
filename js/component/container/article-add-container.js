;!function () {

    class ArticleAddContainer {
        constructor() {

        }

        render() {
            let feed = document.querySelector('div.content');
            feed.innerHTML = '';
            feed.appendChild(new ArticleAddView(this.callback(this.onAddClicked)).render());
        }

        onAddClicked(article) {
            if (!article.id) article.id = Date.now().toString();

            articleService.addArticle(article);
            new ArticleListContainer().init();
        }

        callback(fn) {
            return fn.bind(this);
        }
    }

    window.ArticleAddContainer = ArticleAddContainer;
}();
