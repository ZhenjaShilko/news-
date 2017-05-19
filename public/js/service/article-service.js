;!function (articles, config, util, tags) {

    'use strict';

    let articleService = {};
    //articleService.getArticle = id => articles.find(article => article.id === id);

    articleService.getArticle = id => {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/article/'+id+'', true);
            xhr.send();

            xhr.onload = () => {
                let article = JSON.parse(xhr.responseText, (key, value) => {
                    if (key === 'createdAt') return new Date(value);
                    return value;
                });

                resolve(article);
            }
        });
    };

    function classOf(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8, -1);
    }

    articleService.isArticleValid = article => {
        if (!article) return false;
        const props = config.VALIDATION_SCHEMA.ARTICLE.all();
        console.log(props);
        return props.every(p => article.hasOwnProperty(p.key) && classOf(article[p.key]) === p.type);
    };

    articleService.addArticle = article => {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/article', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(article));

            xhr.onload = () => {
                resolve();
            }
        });


        /*if (!articleService.isArticleValid(article)) return;
        articles.unshift(article);
        articleService.saveChanges(articles);
        return article;

        */
    };

    articleService.editArticle = (id, article) => {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('PATCH', 'http://localhost:3000/article', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({id: id, article: article}));

            xhr.onload = () => {
                resolve();
            }
        });



        /*if (!article) return false;
        let currentArticle = articleService.getArticle(id);
        if (!currentArticle) return false;

        let properties = ['title', 'summary', 'content'];
        let articleClone = Object.assign({}, currentArticle);

        properties.forEach((propertyName) => {
            if (article[propertyName]) {
                articleClone[propertyName] = article[propertyName];
            }
        });

        if (!articleService.isArticleValid(articleClone)) return false;

        articles[articles.indexOf(currentArticle)] = articleClone;
        articleService.saveChanges(articles);
        return true;

        */
    };

    articleService.removeArticle = (id) => {

        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'http://localhot:3000/article', false);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({id: id}));

        /*if (!id) return;
        let article = articleService.getArticle(id);
        if (!article) return;
        let index = articles.indexOf(article);
        articles.splice(index, 1);
        articleService.saveChanges(articles);
        return article;
        */
    };

    articleService.addTag = (tagName, article) => {
        if (!tagName || !article) return false;
        if (newsTags.indexOf(tagName) === -1) return false;
        if (article.tags.indexOf(tagName) != -1) return false;
        article.tags.push(tagName);
        return true;
    };

    articleService.removeTag = (tagName, article) => {
        if (!tagName || !article || !article.tags) return false;
        let index = article.tags.indexOf(tagName);
        if (index === -1) return false;
        article.tags.splice(index, 1);
        return true;
    };

    articleService.getArticles = (skip, top, filter = {}) => {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/articles', true);
            xhr.send();

            xhr.onload = () => {
                let articles = JSON.parse(xhr.responseText, (key, value) => {
                    if (key === 'createdAt') return new Date(value);
                    return value;
                });

                resolve(articles);
            }
        });

        /*let filterTags = filter.tags || [];
        delete filter.tags;
        let filterKeys = Object.keys(filter);
        let filteredArticles = articles.filter(article => {
            if (!filterTags.every(tag => article.tags.includes(tag))) return false;
            return filterKeys.every(filterKey => filter[filterKey].toString() === article[filterKey].toString());
        });

        filteredArticles = filteredArticles.slice(skip, skip + top);
        filteredArticles.sort((article1, article2) => article2.createdAt - article1.createdAt);
        //skip = util.skipNumberValid(skip, filteredArticles.length);
        //top = util.topNumberValid(top);
        return filteredArticles;

        */
    };

    articleService.saveChanges = updateArticles => {
      articles = updateArticles;
    };

    window.articleService = articleService;
}(window.articles, window.CONFIG, window.util, window.articleTags);
