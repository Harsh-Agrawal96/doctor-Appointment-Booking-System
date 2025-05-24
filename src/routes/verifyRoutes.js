
import express from "express";
import * as verifyPages from "../controller/login and register/getController.js";
import * as checkAuth from "../controller/checklogin.js";
import * as verifyPost from "../controller/login and register/verifycontroller.js";
import * as validate from "../validation/userValidate.js";
import { passportOfUsers } from "../controller/passport/loginPassport.js";
import passport from "passport";



passportOfUsers();

let routes = express.Router();

let initAllVerifyRoutes = (app) => {


    routes.get( "/login", checkAuth.checkLoggedOut, verifyPages.getLoginPage );
    routes.get( "/clinic/login",checkAuth.checkLoggedOut, verifyPages.getclinicLoginPage );
    routes.get( "/register", checkAuth.checkLoggedOut, verifyPages.getRegisterPage );
    routes.get( "/clinic/register", checkAuth.checkLoggedOut, verifyPages.getclinicRegisPage );


    routes.post( "/doctor/login", passport.authenticate("local" , {
        successRedirect : "/",
        failureRedirect : "/login",
        successFlash : true,
        failureFlash : true
    })  );
    routes.post( "/user/login",passport.authenticate("local" , {
        successRedirect : "/",
        failureRedirect : "/login",
        successFlash : true,
        failureFlash : true
    }) );
    routes.post( "/clinic/login", passport.authenticate("local" , {
        successRedirect : "/",
        failureRedirect : "/clinic/login",
        successFlash : true,
        failureFlash : true
    })  );


    routes.post( "/doctor/register", validate.registerValid, verifyPost.handleDoctorRegister );
    routes.post( "/user/register", validate.registerValid, verifyPost.handleUserRegister );
    routes.post( "/clinic/register", validate.clinicRegisterValid, verifyPost.handleClinicRegister );

    routes.get( "/logout", checkAuth.postLogout);

    return app.use("/",routes);
};



export {
    initAllVerifyRoutes
}