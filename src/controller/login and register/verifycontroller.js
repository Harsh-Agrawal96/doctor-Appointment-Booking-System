
import { validationResult } from "express-validator";
import * as services from "../../services/adduserServices.js";
import { tryAgainError as tryErr, registrationMsg as registerMsg } from "../../utils/errorMsg.js";



let handleDoctorRegister = async (req,res) => {

    // keep user's input fields
    let form = {
        name : req.body.name,
        againpassword : req.body.repassword,
        email : req.body.email,
        password : req.body.password
    }
    let forcheck = await checkforValidation(req,res,form);
    if( forcheck == true ){
        return res.render("register/register.ejs",{
            errors : req.flash('formError'),
            form : form
        });
    }

    try{
        let user = req.body;
        await services.addNewUser(user,2);

        req.flash("success",registerMsg);
        return res.redirect("/");

    }catch(err){
        req.flash("error",tryErr);
        return res.render("register/register.ejs",{
            form : form
        });
    }

};

let handleClinicRegister = async (req,res) => {

    // keep user's input fields
    let form = {
        doctoremail : req.body.doctorEmail,
        doctorname : req.body.doctorName,
        clinicemail : req.body.clinicEmail,
        clinicname : req.body.clinicName, 
        password : req.body.password
    }
    let forcheck = await checkforValidation(req,res,form);
    if( forcheck == true ){
        return res.render("register/clinicRegister.ejs", {
            errors : req.flash('formError'),
            form : form
        })
    }

    try{
        let user = req.body;
        await services.addNewUser(user,3);
        
        req.flash("success",registerMsg);
        return res.redirect("/");

    }catch(err){
        req.flash("error",tryErr);
        return res.render("register/clinicRegister.ejs",{
            form : form
        });
    }

};

let handleUserRegister = async (req,res) => {

    // keep user's input fields
    let form = {
        name : req.body.username,
        againpassword : req.body.repassword,
        email : req.body.email,
        password : req.body.password
    }
    let forcheck = await checkforValidation(req,res, form);
    if( forcheck == true ){
        return res.render("register/register.ejs",{
            errors : req.flash('formError'),
            form : form
        });
    }

    try{
        let user = req.body;
        await services.addNewUser(user,1);
        
        req.flash("success",registerMsg);
        return res.redirect("/");

    }catch(err){
        req.flash("error",tryErr);
        return res.render("register/register.ejs",{
            form : form
        });
    }

};

// validate input fields
let checkforValidation = async (req,res, form) => {

    let errorArr = [];// create array to save validation error
    let validationError = await validationResult(req);
    if( !validationError.isEmpty() ){
        let errors = Object.values( validationError.mapped() );
        errors.forEach( ( items ) => {
            errorArr.push(items.msg);
        })
        req.flash("formError",errorArr);
        return true;
    }else{
        return false;
    }
};

export {

    handleUserRegister,
    handleDoctorRegister,
    handleClinicRegister,

}