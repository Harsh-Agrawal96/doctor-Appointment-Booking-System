import express from "express";
import * as pages from "../controller/homepageController.js";

// init all web routes here

let routes = express.Router();

let initAllWebRoutes = (app) => {

    routes.get("/", pages.getHomepage);

    routes.get("/register",pages.getRegisterPage);
    routes.get("/login",pages.getLoginPage);

    routes.get("/new-user",pages.getnewuserPage);
    routes.post("/create-new-User",pages.createNewUser);

    return app.use("/",routes);
};

export {
    initAllWebRoutes,
}