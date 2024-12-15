
import doten from "dotenv";
import express from "express";
import { configViewEngine }  from "./config/viewEngine.js";
import { initAllWebRoutes } from "./routes/web.js";
import flash from "connect-flash";
import session from "express-session";
import cookiePars from "cookie-parser";
import passport from "passport";
import connectDB from "./models/index.js";


doten.config();

let app = express();
let port = process.env.PORT || 8080;

connectDB();


// config view engine
configViewEngine(app);

// config express session
app.use(cookiePars('secretofharsh'));

// config express session
app.use(session({

    secret: 'harshsecret',
    resave:false,
    saveUninitialized: true,
    cookie: {
        maxAge : 1000 * 60 * 60 * 24 // 1 day
    }
}));

// show flash messages
app.use(flash());

// Middleware to make flash messages available in views
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

// config passport middleware
app.use(passport.initialize());
app.use(passport.session());


// init all routes
initAllWebRoutes(app);

app.listen( port, () => {
    console.log( `server is started at port ${port}` );
});