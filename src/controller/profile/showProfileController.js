
import * as getUsers from "../../services/profile/showProfileServices.js";

let unauthPatientProfile = async ( req,res,id ) => {

    try{

        const patinetId = req.params.id;
        console.log(patinetId)

        let data = await getUsers.getPatientInfo(patinetId);

        if( data == false ){
            res.redirect("/")
        }
        else{
            // profile page
            res.render("profile/auth/showProfile/patient.ejs",{
                data : data
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

};

let unauthDoctorProfile = async ( req,res,id ) => {

    try{

        const doctorId = req.params.id;
        console.log(doctorId)

        let data = await getUsers.getDoctorInfo(doctorId);

        if( data == false ){
            res.redirect("/");
        }
        else{
            // profile page
            console.log(data)
            res.render("profile/auth/showProfile/doctor.ejs",{
                data : data
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

};

let unauthClinicProfile = async ( req,res,id ) => {

    try{

        const cinicId = req.params.id;

        let data = await getUsers.getClinicInfo(cinicId);

        if( data == false ){
            res.redirect("/");
        }
        else{
            // profile page
            res.redirect();
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

};


// test

let check = async (req,res) => {

    res.render("profile/auth/editProfile/patientEdit.ejs");
}


export {

    unauthPatientProfile,
    unauthDoctorProfile,
    unauthClinicProfile,
    check,

}


