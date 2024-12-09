import express from "express";
import * as pages from "../controller/homepageController.js";
import * as validate from "../validation/userValidate.js";
import * as show from "../controller/profile/showProfileController.js"



let routes = express.Router();

let initAllWebRoutes = (app) => { 

    // routes.get("/register",checkauth.checkLoggedOut, pages.getRegisterPage);
    // routes.get("/login", pages.getLoginPage);

    // final routes

    // routes.get("/", checkauth.checkLoggedIn,pages.getHomepage);

    // for check
    routes.get("/check", show.check);


    return app.use("/",routes);
};

export {
    initAllWebRoutes,
}

