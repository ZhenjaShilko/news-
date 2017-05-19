let express = require('express'),
     app = express();

let bodyParser = require('body-parser');
let articleCV = require(__dirname + '/db/article-mapper');
let userCV = require(__dirname + '/db/user-mapper');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/UI/news.html');
});

app.post('/article', (req, res) => {
    articleCV.addArticle(req.body);
    res.json(req.body);
});

app.get('/article/:id', (req, res) => {
    let article = articleCV.getArticle(req.params.id);
    if (!article) res.send({});
    res.send(article);
});

app.delete('/article', (req, res) => {
    articleCV.removeArticle(req.body);
    res.send(req.body);
});

app.patch('/article', (req, res) => {
    articleCV.update(req.body);
    res.json(req.body);
});

app.get('/articles', (req, res) => {
    res.send(articleCV.loadArticles());
});

app.post('/user', (req, res) => {
    let reqUser = req.body;
    let users = userCV.getUsersFromDb();
    let user = users.find(user => user.name === reqUser.name && user.password === reqUser.password);
    if (!user) return res.status(400).send('Wrong password or userName');
    userCV.setCurrentUserToDb(user);
    res.json(reqUser);
});

app.get('/current_user', (req, res) => {

    if (userCV.getCurrentUserFromDb().length === 0) return res.sendStatus(400);
    res.send(userCV.getCurrentUserFromDb()[0]);
});

app.delete('/logout', (req, res) => {
    userCV.deleteCurrentUserFromDb();
    res.json({userWasRemoved: 'ok'});
});


app.listen(3000);
