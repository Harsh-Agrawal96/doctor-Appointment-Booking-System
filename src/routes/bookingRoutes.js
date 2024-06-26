
import express from "express";
import * as checkAuth from "../controller/checklogin.js";
import * as checkAuthUser from "../controller/Booking/verifybookingController.js";


let routes = express.Router();


let initBookingRoutes = (app) => {


    routes.post( "/start/book", checkAuth.checkLoggedIn, checkAuthUser.forstart );

    routes.post( "/for/progress", checkAuth.checkLoggedIn, checkAuthUser.forprogress );
    routes.post( "/for/comformed", checkAuth.checkLoggedIn, checkAuthUser.forcomformed );
    routes.post( "/for/denied", checkAuth.checkLoggedIn, checkAuthUser.fordenied );
    routes.post( "/comformed", checkAuth.checkLoggedIn, checkAuthUser.conform );


    return app.use("/", routes);

}