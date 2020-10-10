//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();

//parameter
let name = "Komang";

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));

//route untuk halaman home
app.get('/',(req, res) => {
    //render file index.hbs
    res.render('index',{
        name : name
    });
});

//route untuk halaman home dengan parameter name
app.get('/post',(req, res) => {
    res.render('post');
});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});
