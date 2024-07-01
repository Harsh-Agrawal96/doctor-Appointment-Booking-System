
import express from "express";
import * as profilePages from "../controller/profile/showProfileController.js";
import * as editData from "../controller/profile/changeProfileController.js";
import * as checkAuth from "../controller/checklogin.js"


let routes = express.Router();

let initProfileRoutes = (app) => {


    routes.get( "/user/profile/:id", profilePages.patientProfile );
    routes.get( "/doctor/profile/:id", profilePages.doctorProfile );
    routes.get( "/clinic/profile/:id", profilePages.clinicProfile );

    // auth

    // not done yet
    routes.get( "/user/edit/", profilePages.patientEditPage ); //checkAuth.checkLoggedIn
    routes.get( "/doctor/edit/", profilePages.doctorEditPage ); // checkAuth.checkLoggedIn
    routes.get( "/clinic/edit/", profilePages.clinicEditPage ); // checkAuth.checkLoggedIn

    // routes.post( "/maincheck", (req,res) => {
    //     console.log(req.body);
    // })

    // post for update profile

    routes.post("/doctor/personal", editData.doctorPU_personal );
    routes.post("/doctor/work", editData.doctorPU_work);
    routes.post("/doctor/profession", editData.doctorPU_profession );
    routes.post("/patient/personal", editData.patientUP_personal );
    routes.post("/clinic/personal", editData.clinicUP_personal );


    return app.use("/", routes);
};


export {
    initProfileRoutes
}