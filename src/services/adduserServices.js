
import User from "../models/alluser.js";
import Patient from "../models/patient.js";
import Doctor from "../models/doctor.js";
import PendingClinic from "../models/pending_clinicRequest.js";


let addNewUser = (user, num) => {
    return new Promise( async (resolve, reject) => {
        try{

            const checkforEmail = await checkEmail(user.email);
            if( checkforEmail ){
                reject("This  email is already registerd!! ");
            }

            // 1 for patient
            if( num == 1){
                // hash the user's password
    
                const patient = new Patient({
                    fullName: user.username,
                    email: user.email,
                    password: user.password,
                    address : "",
                    accountName : "",
                    phoneNumber : 0,
                    Country : "",
                    State : "",
                    city : "",
                    DOB : ''
                });
                await patient.save();

                const newuser = new User({
                    usertype : 1,
                    useremail : user.email
                })
                await newuser.save();

                resolve("done!");
            }

            // 2 for doctor
            if( num == 2 ){
                // hash the user's password
    
                const doctor = new Doctor({
                    fullName: user.name,
                    email: user.email,
                    password: user.password,
                    address : "", 
                    Country : "", 
                    State : "", 
                    city : "", 
                    DOB : '',
                    work : "", 
                    reviewPercent : 0.0, 
                    reviewNumber : 0,
                    about : "", 
                    Services : [],
                    specializations :[], 
                    awards : [], 
                    education : [], 
                    membership : [], 
                    experience : [], 
                    Registration : []
                })
                await doctor.save();

                const newuser = new User({
                    usertype : 2,
                    useremail : user.email
                })
                await newuser.save();

                resolve("done!");
            }

            // 3 for clinic
            if( num == 3 ){

                let doctorEmail = await checkDoctorEmail(user.doctorEmail);

                if( doctorEmail ){
                    reject("The doctor with this email is not registerd!! ");
                }else{
                    // hash the user's password
    
                    const pendingClinic = new PendingClinic({
                        doctorEmail : user.doctorEmail,
                        doctorName : user.doctorName, 
                        clinicName : user.clinicName , 
                        clinicEmail : user.clinicEmail
                    })
                    await pendingClinic.save();

                    resolve("done!");
                }
            }
        }
        catch(e){
            reject(e);
        }
    })
};

let checkDoctorEmail = async (email) => {

    const user = await User.findOne({
        useremail : email
    })
    if( user != null ){
        let type = user.usertype;
        if( type == 2 ){
            return false;
        }else{
            return true;
        }
    }

    return true;
};

let checkEmail = async (email) => {

    const user = await User.findOne({
        useremail : email
    })
    if( user == null ){
        return false;
    }

    return true;
};



export {
    addNewUser,
}

