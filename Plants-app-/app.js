// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = process.env.MONGODB_URI;

app.use(
  session({
    secret: process.env.SESS_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/Plants-app-",
    }),
  })
);

// default value for title local
const projectName = "Plants-app-";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const authRouter = require('./routes/auth.routes'); // <== has to be added
app.use('/', authRouter);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
