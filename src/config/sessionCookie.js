
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


dotenv.config();

let sessionConfigure = (app) => {

    app.use(cookieParser(process.env.COOKIE_KEY));
    
    // config express session
    app.use(session({
        secret: process.env.SESSION_KEY,
        resave:false,
        saveUninitialized: true,
        cookie: {
            maxAge : 1000 * 60 * 60 * 24 // 1 day
        }
    }));
}

export default sessionConfigure;