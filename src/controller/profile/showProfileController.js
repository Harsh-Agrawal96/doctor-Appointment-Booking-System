
import * as getUsers from "../../services/profile/showProfileServices.js";
import * as getdata from "../../services/profile/editProfileDataServices.js";
import * as connections from "../../services/profile/DrCliConnectServices.js";


let patientProfile = async ( req,res ) => {

    try{

        const patinetId = req.params.id;

        let data = await getUsers.getPatientInfo(patinetId);

        if( data == false ){
            res.redirect("/");
        }
        else{
            let islog = false;
            let user = 199;
            if( req.isAuthenticated() ){
                islog = true;
                user = req.user.type
            }
            res.render("profile/showProfile/patient.ejs",{
                data : data,
                islog : islog,
                usertype : user
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
};

let doctorProfile = async ( req,res ) => {

    try{

        const doctorId = req.params.id;

        let data = await getUsers.getDoctorInfo(doctorId);
        let connect = await connections.clinics(doctorId);
    
        let clinics = {};
        for( let i = 0;i<connect.length;i++ ){
            let clinic = await getUsers.getClinicInfo( connect[i].dataValues.clinicId );
            clinics[`${i}`] = clinic;
        }

        if( data == false ){
            res.redirect("/");
        }
        else{
            let islog = false;
            let user = 199;
            if( req.isAuthenticated() ){
                islog = true;
                user = req.user.type
            }
            res.render("profile/showProfile/doctor.ejs",{
                data : data,
                islog : islog,
                usertype : user,
                clinics : clinics,
                connection : connect
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

};

let clinicProfile = async ( req,res ) => {

    try{

        const clinicId = req.params.id;

        let data = await getUsers.getClinicInfo(clinicId);
        let connect = await connections.doctors(clinicId);

        let doctors = {};
        for( let i = 0;i<connect.length;i++ ){
            let doctor = await getUsers.getDoctorInfo( connect[i].dataValues.doctorId );
            doctors[`${i}`] = doctor;
        }
        

        if( data == false ){
            res.redirect("/");
        }
        else{
            // profile page
            let islog = false;
            let user = 199;
            if( req.isAuthenticated() ){
                islog = true;
                user = req.user.type
            }
            res.render("profile/showProfile/clinic.ejs",{
                data : data,
                islog : islog,
                usertype : user,
                doctors : doctors,
                connection : connect
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

};

let profileEditPage = async ( req,res ) => {

    try{

        let id = req.user.maindata.id;
        let usertype = req.user.type;

        if( usertype == 1 ){

            return patientEditPage(id,res);
        }
        else if( usertype == 2 ){

            return doctorEditPage( id,res );
        }else if( usertype == 3 ){

            return clinicEditPage( id,res );
        }

        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

}

let doctorEditPage = async ( id,res ) => {

    try{
        
        let data = getUsers.getDoctorInfo(id);
        let contant = await getdata.dataforDoctor(id);

        console.log("ok now here");

        if( data == false ){
            return res.redirect("/");
        }
        else{
            // profile page
            res.render("profile/editProfile/doctorEdit.ejs",{
                data : data,
                appointment : contant.appoint,
                requ : contant.requ
            });
        }

    }
    catch(err){
        console.log(err)
        return res.redirect("/");
    }
}

let patientEditPage = async ( id,res ) => {

    try{

        let contant = await getdata.dataforPatient(id);
        let data = await getUsers.getPatientInfo(id);

        if( data == false ){
            return res.redirect("/");
        }
        else{
            // profile page=
            res.render("profile/editProfile/patientEdit.ejs",{
                data : data,
                appointment : contant.appoint,
                sergery : contant.sergery
            });
        }
    }
    catch(err){
        console.log(err);
        return res.redirect("/");
    }
}

let clinicEditPage = async ( id,res ) => {

    try{

        let contant = await getdata.dataforClinic(id);
        let data = await getUsers.getClinicInfo(id);

        if( data == false ){
            return res.redirect("/");
        }
        else{
            // profile page
            res.render("profile/editProfile/clinicEdit.ejs",{
                data : data,
                appointment : contant.appoint,
                sergery : contant.sergery,
                requ : contant.requ
            });
        }
    }
    catch(err){
        console.log(err);
        return res.redirect("/");
    }
}


// test

let check = async (req,res) => {

    res.render("profile/editProfile/doctorEdit.ejs");
}


export {

    patientProfile,
    doctorProfile,
    clinicProfile,
    profileEditPage,
    check,

}


