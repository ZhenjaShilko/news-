;!function () {

    class ArticleAddView {
        constructor(onAddClicked) {
            this.onAdd = onAddClicked;
        }

        render() {
            let view = '<input class="tags-input" type="text" placeholder="tags"/>' +
                '<div class="clear"></div>' +
                '<input class="title-input" type="text" placeholder="title"/>' +
                '<div class="clear"></div>' +
                '<input class="summary-input" type="text" placeholder="summary"/>' +
                '<div class="clear"></div>' +
                '<input class="author-input" type="text" placeholder="author"/>' +
                '<div class="clear"></div>' +
                '<div class="detail-news-photo">' +
                '</div>' +
                '<div class="clear"></div>' +
                '<textarea class="content-input" placeholder="content"></textarea>' +
                '<div class="clear"></div>' +
                '<input class="add-input" type="button" value="add"/>' +
                '<div class="back-button">'+
                '<input type="button" value="back" onclick="new ArticleListContainer().init()"/>'+
                '</div>';

            let addElement = document.createElement('div');
            addElement.className = 'add-frame';
            addElement.innerHTML = view;
            let addButton = addElement.querySelector('input.add-input');
            addButton.addEventListener('click', this.onAddCliked.bind(this));
            return addElement;
        }

        onAddCliked() {
            let articleEl = document.querySelector('div.add-frame');

            let articleUpdated = {};
            articleUpdated.summary = articleEl.querySelector('input.summary-input').value;
            articleUpdated.title = articleEl.querySelector('input.title-input').value;
            articleUpdated.content = articleEl.querySelector('textarea.content-input').value;
            articleUpdated.author = articleEl.querySelector('input.author-input').value;
            articleUpdated.createdAt = new Date();

            this.onAdd(articleUpdated);
        }
    }

    window.ArticleAddView = ArticleAddView;
}();