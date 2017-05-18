;!function () {

    class ArticleListItemView {
        constructor(article) {
            this.article = article;
        }

        render() {

            let article1 = this.article;

            let view = '<p class="article">'+this.article.title+'</p>' +
                '<p class="author">'+this.article.author+'</p>' +
                '<p class="date">'+this.article.createdAt+'</p>' +
                '<div id="newstext">'+this.article.summary+'</div>'+
                '<div id="newsinfo">'+
                '<input class="seenews" type="button" value="show" onclick="new ArticleDetailContainer('+article1.id+ "" +').render()"/>'+
                '<input type="button" value="edit" onclick="new ArticleEditContainer('+article1.id+ "" +').render()"/>'+
                '</div>';

            let viewElement = document.createElement('div');
            viewElement.className = 'news';
            viewElement.innerHTML = view;
            return viewElement;
        }
    }

    window.ArticleListItemView = ArticleListItemView;
}();