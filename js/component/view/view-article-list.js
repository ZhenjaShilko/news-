;!function () {

    class ArticleListView {
        constructor(articles) {
            this.articles = articles;
        }

        render() {
            let list = document.createElement('div');
            list.className = 'news-list';

            this.articles.forEach(article => {
                list.appendChild(new window.ArticleListItemView(article).render());
            });

            return list;
        };
    }

    window.ArticleListView = ArticleListView;
}();

