
import * as getUsers from "../../services/profile/showProfileServices.js";
import * as getata from "../../services/profile/editProfileDataServices.js";

let patientProfile = async ( req,res,id ) => {

    try{

        const patinetId = req.params.id;
        console.log(patinetId)

        let data = await getUsers.getPatientInfo(patinetId);

        if( data == false ){
            res.redirect("/")
        }
        else{
            // profile page
            res.render("profile/showProfile/patient.ejs",{
                data : data
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
};

let doctorProfile = async ( req,res,id ) => {

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
            res.render("profile/showProfile/doctor.ejs",{
                data : data
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }

};

let clinicProfile = async ( req,res,id ) => {

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

let doctorEditPage = async ( req,res ) => {

    try{
        // let id = req.user.maindata.id;
        
        // let data = getUsers.getDoctorInfo(id);
        
        let data = true;

        if( data == false ){
            res.redirect("/");
        }
        else{
            // profile page
            res.render("profile/editProfile/doctorEdit.ejs",{
                data : data
            });
        }

    }
    catch(err){
        console.log(err)
        res.redirect("/");
    }
}

let patientEditPage = async ( req,res ) => {

    try{

        // const id = req.user.maindata.id;
        // console.log(id);

        // let data = await getUsers.getPatientInfo(id);
        let data = true;

        if( data == false ){
            res.redirect("/");
        }
        else{
            // profile page
            res.render("profile/editProfile/patientEdit.ejs",{
                data : data
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
}

let clinicEditPage = async ( req,res ) => {

    try{

        // const id = req.user.maindata.id;
        // console.log(id);
        await getata.dataforClinic(2);

        // let data = await getUsers.getClinicInfo(id);
        let data = true;

        if( data == false ){
            res.redirect("/");
        }
        else{
            // profile page
            res.render("profile/editProfile/clinicEdit.ejs",{
                data : data
            });
        }
    }
    catch(err){
        console.log(err);
        res.redirect("/");
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
    patientEditPage,
    doctorEditPage,
    clinicEditPage,
    check,

}


