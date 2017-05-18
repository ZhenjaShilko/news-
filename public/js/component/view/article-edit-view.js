;!function () {

    class ArticleEditView {
        constructor(article, onAddClicked, onBackClicked) {
            this.article = article;
            this.onAdd = onAddClicked;
            this.onBack = onBackClicked;
        }

        render() {

            let article = this.article;

            let view = /*'<input class="tags-input" type="text" value="' + tags + '"/>' +*/
                '<div class="clear"></div>' +
                '<input class="title-input" type="text" value="' + article.title + '"/>' +
                '<div class="clear"></div>' +
                '<input class="summary-input" type="text" value="' + article.summary + '"/>' +
                '<div class="clear"></div>' +
                '<div class="detail-news-author">' +
                '<a class="href-news-author"><b>' + article.author + '</b></a>' +
                '</div>' +
                '<div class="clear"></div>' +
                '<div class="detail-news-date">' +
                '<span>' + article.createdAt + '</span>' +
                '</div>' +
                '<div class="clear"></div>' +
                '<div class="clear"></div>' +
                '<textarea class="content-input">' + article.content + '</textarea>' +
                '<div class="clear"></div>' +
                '<div class="add-input">' +
                '<input type="button" value="add"/>' +
                '</div>' +
                '<div class="back-button">' +
                '<input type="button" value="back"/>' +
                '</div>';

            let addElement = document.createElement('div');
            addElement.className = 'edit-frame';
            addElement.innerHTML = view;
            let addButton = addElement.querySelector('div.add-input');
            addButton.addEventListener('click', this.onAddClicked.bind(this));
            let backButton = addElement.querySelector('div.back-button');
            backButton.addEventListener('click', this.onBackClicked.bind(this));
            return addElement;
        }

        onAddClicked() {
            let articleEl = document.querySelector('div.edit-frame');

            let articleUpdated = {};
            articleUpdated.summary = articleEl.querySelector('input.summary-input').value;
            articleUpdated.title = articleEl.querySelector('input.title-input').value;
            articleUpdated.content = articleEl.querySelector('textarea.content-input').value;
            //articleUpdated.tags = articleEl.querySelector('input.tags-input').value.split(' ');

            this.onAdd(articleUpdated);
        }

        onBackClicked() {
            this.onBack();
        }
    }

    window.ArticleEditView = ArticleEditView;
}();