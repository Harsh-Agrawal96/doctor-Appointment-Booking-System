
import express from "express";
import * as checkAuth from "../controller/checklogin.js";
import * as checkAuthUser from "../controller/Booking/verifybookingController.js";
import * as booking from "../controller/Booking/bookingController.js";


let routes = express.Router();


let initBookingRoutes = (app) => {


    routes.post( "/start/book", checkAuthUser.forstart, booking.intiBooking );

    routes.post( "/for/progress", checkAuthUser.forprogress, booking.startProgress );
    routes.post( "/for/comformed", checkAuthUser.forcomformed, booking.serviceforConform );

    routes.post( "/denied/response", checkAuthUser.forDeniedResponse, booking.deniedResponse );
    routes.post( "/user/response", checkAuthUser.patientResponse, booking.patientResponse );


    return app.use("/", routes);

}

export {
    initBookingRoutes
}