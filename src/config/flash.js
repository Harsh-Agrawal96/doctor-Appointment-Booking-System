
import flash from "connect-flash";


let flashConfigure = (app) => {

    app.use(flash());

    // Middleware to make flash messages available in views
    app.use((req, res, next) => {
        res.locals.messages = req.flash();
        next();
    });
}


export default flashConfigure;