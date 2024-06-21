
import express from "express";
import * as checkAuth from "../controller/checklogin.js";


let routes = express.Router();


let initBookingRoutes = (app) => {


    routes.post( "/start/sergery", checkAuth.checkLoggedIn,  );// no type
    routes.post( "/start/appoint", checkAuth.checkLoggedIn,  );


    routes.post( "/for/progress", checkAuth.checkLoggedIn,  );
    routes.post( "/for/comformed", checkAuth.checkLoggedIn,  );
    routes.post( "/for/denied", checkAuth.checkLoggedIn,  );
    routes.post( "/comformed", checkAuth.checkLoggedIn,  );


    return app.use("/", routes);

}