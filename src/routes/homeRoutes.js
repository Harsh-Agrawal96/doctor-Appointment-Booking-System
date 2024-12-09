
import express from "express";
import * as getpage from "../controller/homepageController.js";


let routes = express.Router();


let iniAllHomepageRoutes = (app) => {

    routes.get("/", getpage.gethomepage );
    routes.get( "/doctor", getpage.getdoctorPage );

    return app.use("/",routes);

};

export{
    iniAllHomepageRoutes,
}