
import { validationResult } from "express-validator";
import * as services from "../../services/adduserServices.js";
import { tryAgainError as tryErr, registrationMsg as registerMsg } from "../../utils/errorMsg.js";



let handleDoctorRegister = async (req,res) => {

    let form = {
        name : req.body.name,
        againpassword : req.body.repassword,
        email : req.body.email,
        password : req.body.password
    }
    let forcheck = await checkforValidation(req,res,form);
    req.flash('formdata', form);

    if( forcheck ){
        req.flash('doctorError', forcheck[0]);
        return res.redirect("/register");
    }

    try{
        let user = req.body;
        await services.addNewUser(user,2);

        req.flash("success",registerMsg);
        return res.redirect("/");

    }catch(err){
        req.flash("error",tryErr);
        return res.redirect("/register");
    }

};

let handleClinicRegister = async (req,res) => {

    let form = {
        doctoremail : req.body.doctorEmail,
        doctorname : req.body.doctorName,
        clinicemail : req.body.clinicEmail,
        clinicname : req.body.clinicName, 
        password : req.body.password
    }
    let forcheck = await checkforValidation(req,res,form);
    req.flash('formdata', form);

    if( forcheck ){
        req.flash('clinicError', forcheck[0]);
        return res.redirect("/clinic/register");
    }

    try{
        let user = req.body;
        await services.addNewUser(user,3);
        
        req.flash("success",registerMsg);
        return res.redirect("/");

    }catch(err){
        req.flash("error",tryErr);
        return res.redirect("/register");
    }
};

let handleUserRegister = async (req,res) => {

    let form = {
        name : req.body.username,
        againpassword : req.body.repassword,
        email : req.body.email,
        password : req.body.password
    }
    let forcheck = await checkforValidation(req,res, form);
    req.flash('formdata', form);
    
    if( forcheck){
        req.flash("userError", forcheck[0]);
        res.redirect("/register");
        return;
    }

    try{

        let user = req.body;
        await services.addNewUser(user,1);
        
        req.flash("success",registerMsg);
        return res.redirect("/");

    }catch(err){
        req.flash("error",tryErr);
        return res.redirect("/register");
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
        return errorArr;
    }else{
        return null;
    }
};

export {

    handleUserRegister,
    handleDoctorRegister,
    handleClinicRegister,

}