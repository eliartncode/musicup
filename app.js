const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const session = require('express-session');
const constants = require('./util/constants');
const connection = require('./util/connection');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));
app.locals.moment = require('moment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/images');
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname);
    }
});

app.use(multer({ storage: fileStorage, limits: {fileSize: 250336978} }).single('image'));
app.use(session({ secret: '2bwjKeEIgW4UlU0FNgbKGhEF8LnW6ASM', resave:false, saveUninitialized: false }));


const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const accountsRoutes = require('./routes/accounts');
app.use('/account', accountsRoutes);





const port = 6020;
connection
.sync()
.then(result => {
    app.listen(port, function(){
        console.log(`Server is running under port ${port}`);
    });
})
.catch(error => {
    console.log(`Error: ${error}`);
})
