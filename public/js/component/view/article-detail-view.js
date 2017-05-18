;!function () {

    class ArticleDetailView{
        constructor(article) {
            this.article = article;
        }

        render() {
            /*
            let tags = '';

            this.article.tags.forEach(tag => {
                tags += '<div class="tag">'+tag+'</div>'
            });
            */
            let view = '<p class="article">'+this.article.title+'</p>' +
                '<p class="author">'+this.article.author+'</p>' +
                '<p class="date">'+this.article.createdAt+'</p>' +
                '<div id="newstext">'+this.article.summary+'</div>'+
                '<div id="newsinfo">'+
                '<div class="news-content">'+ this.article.content +'</div>' +
                '<input class="back-button" type="button" value="back" onclick="new ArticleListContainer().init()"/>';

            let viewElement = document.createElement('div');
            viewElement.className = 'news-detail';
            viewElement.innerHTML = view;
            return viewElement;
        }
    }

    window.ArticleDetailView = ArticleDetailView;
}();