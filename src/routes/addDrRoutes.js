
import express from "express";
import * as handleRequest from "../controller/clinicAddDrController.js";



let routes = express.Router();

let initAllRequestRoutes = (app) => {

    routes.post("/clinic/add/doctor", handleRequest.newRequest );

    return app.use("/",routes);

};

export {
    initAllRequestRoutes,
}