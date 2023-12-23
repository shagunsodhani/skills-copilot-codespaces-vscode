// Create web server

// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 2. Setup body-parser
app.use(bodyParser.urlencoded({extended: false}));

// 3. Setup template engine
app.set('view engine', 'ejs');

// 4. Setup static folder
app.use(express.static('public'));

// 5. Setup comments array
const comments = [
    {name: 'Minh', content: 'Hello'},
    {name: 'Minh', content: 'Hello'},
    {name: 'Minh', content: 'Hello'}
];

// 6. Setup route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/comments', (req, res) => {
    res.render('comments', {comments: comments});
});

app.post('/comments', (req, res) => {
    const newComment = {
        name: req.body.name,
        content: req.body.content
    };
    comments.push(newComment);
    res.redirect('comments');
});

// 7. Start server
app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log('Server is listening at port 3000');
});