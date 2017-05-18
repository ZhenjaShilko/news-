;!function (articles) {

    class Router {
        constructor() {
            this.articleListContainer = new window.ArticleListContainer();
            this.userComponent = new window.UserComponent();
        }

        render() {
            this.articleListContainer.init();
            this.userComponent.init();
        }
    }

    new Router().render();
}(window.articles);
