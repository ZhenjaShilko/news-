const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const articleController = require(__dirname + '/db/article-mapper');
const userController = require(__dirname + '/db/user-mapper');
const session = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local', new LocalStrategy(
    {passReqToCallback: true},

    (req, username, password, done) => {

        const user = userController.getUser(username);

        if (!user) return done(null, false);

        if (user.password !== password) {
            return done(null, false);
        }

        return done(null, user);
    }));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use(session({
    name: 'Evg',
    secret: 'xep',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.post('/user', passport.authenticate('local'), (req, res) => {
    res.send({username: req.user.username});
});

app.get('/islogin', (req, res) => {
    if (req.user) res.send({username: req.user.username});
    else res.sendStatus(401);
});

app.delete('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/UI/news.html');
});

app.post('/article', (req, res) => {
    articleController.addArticle(req.body);
    res.json(req.body);
});

app.get('/article/:id', (req, res) => {
    let article = articleController.getArticle(req.params.id);
    if (!article) res.send({});
    res.send(article);
});

app.delete('/article', (req, res) => {
    articleController.removeArticle(req.body);
    res.send(req.body);
});

app.patch('/article', (req, res) => {
    articleController.update(req.body);
    res.json(req.body);
});

app.get('/articles', (req, res) => {
    res.send(articleController.loadArticles());
});

app.listen(3000);
