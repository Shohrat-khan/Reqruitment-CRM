// app.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const flash =  require('connect-flash');
const path = require('path');
const app = express();
const indexRoutes = require('./routes/index');


//Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middleware
// Middleware setup
app.use(session({
    secret: 'your_secret_key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

// Make flash messages available in all views
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Serve static files from the public directory

app.use(express.static(path.join(__dirname , 'public')));

//Routes
app.use('/',indexRoutes);



//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});