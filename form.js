const express = require('express');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contact');
const app = express();


app.set('view engine', 'ejs');


app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/contact', contactRouter);


app.get('/', (req, res) => {
    res.render('contact');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
