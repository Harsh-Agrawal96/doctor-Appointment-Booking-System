
import doten from "dotenv";
import express from "express";
import { configViewEngine }  from "./config/viewEngine.js";
import { initAllVerifyRoutes } from "./routes/verifyRoutes.js";
import { initProfileRoutes } from "./routes/profileRoutes.js";
import { initAllWebRoutes } from "./routes/web.js";
import { initAllRequestRoutes } from "./routes/addDrRoutes.js";
import connectFlash from "connect-flash";
import session from "express-session";
import cookiePars from "cookie-parser";
import passport from "passport";

doten.config();

let app = express();
let port = process.env.PORT || 8080;

// config express session
app.use(cookiePars('secretofharsh'));

// config express session
app.use(session({

    secret: 'harshsecret',
    resave:true,
    saveUninitialized: false,
    cookie: {
        maxAge : 1000 * 60 * 60 * 24 // 1 day
    }
}));

// show flash messages
app.use(connectFlash());

// config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// config view engine
configViewEngine(app);

// init all routes
initAllVerifyRoutes(app);
initProfileRoutes(app);
initAllWebRoutes(app);
initAllRequestRoutes(app);

app.listen( port, () => {
    console.log( `server is started at port ${port}` );
});