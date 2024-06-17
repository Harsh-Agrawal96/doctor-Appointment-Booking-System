
import express from "express";
import * as verifyPages from "../controller/login and register/getController.js";
import * as verifyPost from "../controller/login and register/verifycontroller.js";
import * as validate from "../validation/userValidate.js";
import { passportOfUsers } from "../controller/passport/loginPassport.js";
import passport from "passport";



passportOfUsers();

let routes = express.Router();

let initAllVerifyRoutes = (app) => {

    routes.get("/", verifyPages.getHOMepage)

    routes.get( "/login", verifyPages.getLoginPage );
    routes.get( "/clinic/login", verifyPages.getclinicLoginPage );
    routes.get( "/register", verifyPages.getRegisterPage );
    routes.get( "/clinic/register", verifyPages.getclinicRegisPage );


    routes.post( "/doctor/login", passport.authenticate("local" , {
        successRedirect : "/",
        failureRedirect : "/clinic/login",
        successFlash : true,
        failureFlash : true
    })  );
    routes.post( "/user/login",passport.authenticate("local" , {
        successRedirect : "/",
        failureRedirect : "/clinic/login",
        successFlash : true,
        failureFlash : true
    }) );
    routes.post( "/clinic/login", passport.authenticate("local" , {
        successRedirect : "/",
        failureRedirect : "/clinic/login",
        successFlash : true,
        failureFlash : true
    })  );


    routes.post( "/doctor/register", validate.validateRegister, verifyPost.handleDoctorRegister );
    routes.post( "/user/register", validate.validateRegister, verifyPost.handleUserRegister );
    routes.post( "/clinic/register", validate.validateRegister2, verifyPost.handleClinicRegister );


    return app.use("/",routes);
};



export {
    initAllVerifyRoutes
}