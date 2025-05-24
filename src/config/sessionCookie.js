import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from 'connect-mongo';
import dotenv from "dotenv";


dotenv.config();

let sessionConfigure = (app) => {

    app.use(cookieParser(process.env.COOKIE_KEY));
    
    // config express session
    app.use(session({
        secret: process.env.SESSION_SECRET || 'your_secret',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.DB_URI,
            collectionName: 'session'
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        }
    }));
}


export default sessionConfigure;