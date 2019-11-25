require("dotenv").config();

const express      = require("express");
const passport     = require('passport'); 
const session      = require('express-session'); // cookie session
const app  = express();
const PORT = process.env.PORT || 5001;
const routes = require("./routes");
const db     = require("./models");
const mysql = require ("mysql")

if (process.env.JAWSDB_URL) {
    let connection = mysql.createConnection(process.env.JAWSDB_URL)
  }

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "certifiedAtms"
})

connection.connect(function (err, result) {
    if (err) {
        console.log("error connecting: " + err.stack)
    }
    console.log("connected as id " + connection.threadId)
})


require('./config/passport')(passport); // pass passport for configuration

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use('/public', express.static('public'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
    });
  }


  app.use(session({
    key: 'user_sid',
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 10800000, // 3 HRS
        httpOnly: false
    }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(routes)



// Launch Server ==============================================
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
})