
import express from "express";
import * as handleRequest from "../controller/clinicAddDrController.js";



let routes = express.Router();

let initAllRequestRoutes = (app) => {

    routes.post("/clinic/add/doctor", handleRequest.newRequest );
    
    routes.post("/doctor/request/response", handleRequest.doctorResponse );

    routes.post("/clinic/update", handleRequest.updateRequest );

    return app.use("/",routes);

};


export {
    initAllRequestRoutes,
}