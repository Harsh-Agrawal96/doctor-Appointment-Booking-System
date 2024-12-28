
import * as getUsers from "../../services/profile/showProfileServices.js";
import * as getdata from "../../services/profile/editProfileDataServices.js";
import * as connections from "../../services/profile/DrCliConnectServices.js";
import { tryAgainError as tryErr } from "../../utils/errorMsg.js";


let patientProfile = async ( req,res ) => {

    try{
        const patinetId = req.params.id;
        let data = await getUsers.getPatientInfo(patinetId);

        if( data == false ){
            req.flash("error",tryErr);
            res.redirect("/");
        }
        else{
            let islog = false;
            let user = -1;
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
        req.flash("error", tryErr);
        res.redirect("/");
    }
};

let doctorProfile = async ( req,res ) => {

    try{

        const doctorId = req.params.id;

        let data = await getUsers.getDoctorInfo(doctorId);
        let connect = await connections.clinics(doctorId);
    
        let clinics = [];
        for( let i = 0;i<connect.length;i++ ){
            const clinic = await getUsers.getClinicInfo( connect[i].clinicId );
            clinics.push(clinic);
        }

        if( data == false ){
            req.flash("error", tryErr);
            res.redirect("/");
        }
        else{
            let islog = false;
            let user = -1;
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
        req.flash("error", tryErr);
        res.redirect("/");
    }

};

let clinicProfile = async ( req,res ) => {

    try{

        const clinicId = req.params.id;

        let data = await getUsers.getClinicInfo(clinicId);
        let connect = await connections.doctors(clinicId);

        let doctors = [];
        for( let i = 0;i<connect.length;i++ ){
            const doctor = await getUsers.getDoctorInfo( connect[i].doctorId );
            doctors.push(doctor);
        }
        

        if( data == false ){
            req.flash("error", tryErr);
            res.redirect("/");
        }
        else{
            let islog = false;
            let user = -1;
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
        req.flash("error",tryErr);
        res.redirect("/");
    }

};

let profileEditPage = async ( req,res ) => {

    try{

        const id = req.user.maindata.id;
        const usertype = req.user.type;

        if( usertype == 1 ){

            return patientEditPage(id,req,res);
        }
        else if( usertype == 2 ){

            return doctorEditPage( id,req,res );
        }else if( usertype == 3 ){

            return clinicEditPage( id,req,res );
        }

        req.flash("error", tryErr);
        res.redirect("/");
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }

}

let doctorEditPage = async ( id,req,res ) => {

    try{
        
        let data = await getUsers.getDoctorInfo(id);
        let contant = await getdata.dataforDoctor(id);
        let islog = false;
        let Utype = -1;
        if( req.isAuthenticated() ){
            islog = true;
            Utype = req.user.type;
        }

        if( data == false ){
            req.flash("error", tryErr);
            res.redirect("/");
        }
        else{
            res.render("profile/editProfile/doctorEdit.ejs",{
                data : data,
                appointment : contant.appoint,
                requ : contant.requ,
                islog : islog,
                usertype : Utype
            });
        }

    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}

let patientEditPage = async ( id,req,res ) => {

    try{

        let contant = await getdata.dataforPatient(id);
        let data = await getUsers.getPatientInfo(id);
        let islog = false;
        let Utype = -1;
        if( req.isAuthenticated() ){
            islog = true;
            Utype = req.user.type;
        }

        if( data == false ){
            req.flash("error", tryErr);
            res.redirect("/");
        }
        else{
            res.render("profile/editProfile/patientEdit.ejs",{
                data : data,
                appointment : contant.appoint,
                sergery : contant.sergery,
                islog : islog,
                usertype : Utype
            });
        }
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}

let clinicEditPage = async ( id,req,res ) => {

    try{

        let contant = await getdata.dataforClinic(id);
        let data = await getUsers.getClinicInfo(id);
        let islog = false;
        let Utype = -1;
        if( req.isAuthenticated() ){
            islog = true;
            Utype = req.user.type;
        }

        if( data == false ){
            req.flash("error", tryErr);
            res.redirect("/");
        }
        else{
            res.render("profile/editProfile/clinicEdit.ejs",{
                data : data,
                appointment : contant.appoint,
                sergery : contant.sergery,
                requ : contant.requ,
                islog : islog,
                usertype : Utype
            });
        }
    }
    catch(err){
        req.flash("error", tryErr);
        res.redirect("/");
    }
}


export {

    patientProfile,
    doctorProfile,
    clinicProfile,
    profileEditPage,

}


