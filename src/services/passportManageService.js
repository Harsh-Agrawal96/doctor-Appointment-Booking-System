
import User from "../models/alluser.js";
import Patient from "../models/patient.js";
import Doctor from "../models/doctor.js";
import Clinic from "../models/clinic.js";


let findUserbyEmail = (email) => {

    return new Promise ( async( resolve,reject ) => {
        try{
            
            const user = await User.findOne({
                useremail : email
            });
            if( user == null ) {
                reject( `Email is not found`);
            }else{
                resolve(user);
            }
        }
        catch(err){
            reject(err);
        }
    });
};

let comparePassword = ( password, user ) => {

    return new Promise( async ( resolve,reject ) => {
        try{

            let type = user.usertype;
            if( type == 1 ){
                const patient = await Patient.findOne({
                    email : user.useremail
                })

                if( patient != null ){
                    if( password === patient.password ){
                        return resolve(true);
                    }else{
                        return reject(false);
                    }
                }
            }
            if( type == 2 ){
                const doctor = await Doctor.findOne({
                    email : user.useremail
                })

                if( doctor != null ){
                    if( password === doctor.password ){
                        return resolve(true);
                    }else{
                        return reject(false);
                    }
                }
            }
            if( type == 3 ){
                const clinic = await Clinic.findOne({
                    email : user.useremail
                })

                if( clinic != null ){
                    if( password === clinic.password ){
                        return resolve(true);
                    }else{
                        return reject(false);
                    }
                }
            }

            reject("some error but don't know");
        }catch(err){    
            reject(err);
        }
    })
}

let findUserbyid = (idInput) => {
    return new Promise( async (resolve, reject) =>{

        try{
            const user = await User.findOne({
                _id : idInput
            });
            if( user == null ) {
                return reject(`user not found by id : ${idInput} `);
            }
            resolve(user);
        }catch( err ){
            reject(err);
        }

    })
}

let findRealUser = async (usertype, email) => {

    return new Promise ( async ( resolve, reject ) => {
        try{

            if( usertype == 1 ){
                const patient = await Patient.findOne({
                    email : email
                })
                if( patient != null ){
                    return resolve(patient);
                }
            }
            if( usertype == 2 ){
                const doctor = await Doctor.findOne({
                    email : email
                })
                if( doctor != null ){
                    return resolve(doctor);
                }
            }
            if( usertype == 3 ){
                const clinic = await Clinic.findOne({
                    email : email
                })
                if( clinic != null ){
                    return resolve(clinic);
                }
            }

            reject(`something went wrong`);
        }
        catch(err){
            reject(err);
        }
    });
}



export {
    
    findUserbyEmail,
    comparePassword,
    findUserbyid,
    findRealUser,
    
}