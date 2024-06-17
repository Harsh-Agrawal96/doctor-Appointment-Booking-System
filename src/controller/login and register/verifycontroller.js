
import { validationResult } from "express-validator";
import * as services from "../../services/adduserServices.js";



let handleDoctorRegister = async (req,res) => {

    // keep user's input fields
    let form = {
        name : req.body.name,
        againpassword : req.body.repassword,
        email : req.body.email,
        password : req.body.password
    }

    let forcheck = checkforValidation(req,res,form);
    if( forcheck == true ){
        return res.render("register/register.ejs",{
            errors : req.flash('errors'),
            form : form
        });
    }

    try{
        console.log("hello")
        let user = req.body;

        await services.addNewUser(user,2);
        
        return res.redirect("/");


    }catch(err){
        req.flash("errors",err);
        return res.render("register/register.ejs",{
            errors : req.flash('errors'),
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

    let forcheck = checkforValidation(req,res,form);
    if( forcheck == true ){
        return res.render("register/clinicRegister.ejs", {
            errors : req.flash('errors'),
            form : form
        })
    }

    try{
        let user = req.body;

        await services.addNewUser(user,3);
        
        return res.redirect("/");

    }catch(err){
        req.flash("errors",err);
        return res.render("register/clinicRegister.ejs",{
            errors : req.flash('errors'),
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

    let forcheck = checkforValidation(req,res, form);
    if( forcheck == true ){
        return res.render("register/register.ejs",{
            errors : req.flash('errors'),
            form : form
        });
    }

    try{
        let user = req.body;

        await services.addNewUser(user,1);
        
        return res.redirect("/");


    }catch(err){
        req.flash("errors",err);
        return res.render("register/register.ejs",{
            errors : req.flash('errors'),
            form : form
        });
    }

};

// validate input fields
let checkforValidation = (req,res, form) => {

    let errorArr = [];// create array to save validation error
    let validationError = validationResult(req);
    console.log(validationError)
    if( !validationError.isEmpty() ){
        let errors = Object.values( validationError.mapped() );
        errors.forEach( ( items ) => {
            errorArr.push(items.msg);
        })
        req.flash("errors",errorArr);
        return true;
    }else{
        return false;
    }
};

export {

    // forcheck,
    handleUserRegister,
    handleDoctorRegister,
    handleClinicRegister,

}