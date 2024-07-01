
import * as updateProfile from "../../services/profile/editProfileServices.js";

// doctor
let doctorPU_personal = async (req,res) => {

    console.log(req.body);

    try{
        let data = req.body;
        let mainid = req.user.maindata.id;
        await updateProfile.doctorU_personal(data,mainid);

        // send profile page
        return res.redirect("/");
    }
    catch(err){
        console.log("here")
        console.log(err);
        // send updation page
        return res.redirect("/");
    }
    
}

let doctorPU_work = async (req,res) => {

    try{
        let data = req.body;
        let mainid = req.user.maindata.id;
        await updateProfile.doctorU_work(data,mainid);

        // send profile page
        return res.redirect("/")
    }
    catch(err){
        console.log(err);
        // send updation page
        return res.redirect("/")
    }
}

let doctorPU_profession = async (req,res) => {

    try{
        let profession_data = req.body;
        let mainid = req.user.maindata.id;
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

        // send profile page
        return res.redirect("/")
    }
    catch(err){
        console.log(err);
        // send updation page
        return res.redirect("/")
    }
}

let makeobject = (string) => {

    let substringsArray = string.split(",");
    let substringsObject = {};
    substringsArray.forEach((substring, index) => {
        if( substring == ''){

            let data = JSON.stringify(substringsObject);
            return data;
        }
        substringsObject[`I${index}`] = substring;
    });

    let data = JSON.stringify(substringsObject);

    return data;
}

//Clinic

let clinicUP_personal = async (req,res) => {
    
    try{
        let data = req.body;
        let mainid = req.user.maindata.id;
        await updateProfile.clinicU_personal(data,mainid);

        // send profile page
        return res.render();
    }
    catch(err){
        console.log(err);
        // send updation page
        return res.render("")
    }
}

// patient
let patientUP_personal= async (req,res) => {

    console.log(req.body);

    try{
        let data = req.body;
        let mainid = req.user.maindata.id;
        await updateProfile.patientU_personal(data,mainid);

        // send profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        // send updation page
        return res.redirect("/")
    }
}


export {

    patientUP_personal,
    doctorPU_personal,
    doctorPU_work,
    doctorPU_profession,
    clinicUP_personal,

}