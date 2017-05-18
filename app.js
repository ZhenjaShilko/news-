let express = require('express'),
     app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/UI/news.html');
});
app.listen(3000);
