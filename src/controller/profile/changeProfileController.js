
import * as updateProfile from "../../services/profile/editProfileServices.js";
import { tryAgainError as tryErr, profileUpdateMsg as profileMsg } from "../../utils/errorMsg.js";

// doctor
let doctorPU_personal = async (req,res) => {

    try{
        const data = req.body;
        const mainid = req.user.maindata._id;
        await updateProfile.doctorU_personal(data,mainid);

        req.flash("success", profileMsg);
        res.redirect("/profile/edit");
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
    
}

let doctorPU_work = async (req,res) => {

    try{
        const data = req.body;
        const mainid = req.user.maindata.id;
        await updateProfile.doctorU_work(data,mainid);

        req.flash("success", profileMsg);
        res.redirect("/profile/edit");
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}

let doctorPU_profession = async (req,res) => {

    try{
        let profession_data = req.body;
        const mainid = req.user.maindata.id;
        let data = {};
        let val;

        val = makeobject(profession_data.serviceslist);
        data["service"] = val;
        
        val = makeobject(profession_data.specializationlist);
        data["specialization"] = val;

        val = makeobject(profession_data.awardlist);
        data["award"] = val;

        val = makeobject(profession_data.educationlist);
        data["education"] = val;

        val = makeobject(profession_data.membershiplist);
        data["membership"] = val;

        val = makeobject(profession_data.experiencelist);
        data["experience"] = val;

        val = makeobject(profession_data.registrationlist);
        data["registration"] = val;

        await updateProfile.doctorU_profession(data,mainid);

        req.flash("success", profileMsg);
        res.redirect("/profile/edit");
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}

let makeobject = (string) => {

    if( string === '' ){
        return [];
    }
    const substringsArray = string.split(",");
    return substringsArray;
}


//Clinic
let clinicUP_personal = async (req,res) => {
    
    try{
        const data = req.body;
        const mainid = req.user.maindata.id;
        await updateProfile.clinicU_personal(data,mainid);

        req.flash("success", profileMsg);
        res.redirect("/profile/edit");
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}

// patient
let patientUP_personal= async (req,res) => {

    try{
        const data = req.body;
        const mainid = req.user.maindata.id;
        await updateProfile.patientU_personal(data,mainid);

        req.flash("success", profileMsg);
        res.redirect("/profile/edit");
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}


export {

    patientUP_personal,
    doctorPU_personal,
    doctorPU_work,
    doctorPU_profession,
    clinicUP_personal,

}