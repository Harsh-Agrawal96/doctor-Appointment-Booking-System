
import express from "express";


let routes = express.Router();


let initBookingRoutes = (app) => {


    routes.post( "/startbook", );
    routes.post( "/for/progress", );
    routes.post( "/for/comformed", );
    routes.post( "/for/denied", );
    routes.post( "/comformed", );


    return app.use("/", routes);
}