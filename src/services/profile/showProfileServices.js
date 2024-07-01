import { db } from "../../models/index.js";

let getPatientInfo = async (idName) => {

    return new Promise( async ( resolve, reject ) => {

        try{

            let Patient = db.patient;
            let patientInfo = await Patient.findAll({
    
                where : {
                    id : idName
                }

            });
    
            let finalData = JSON.stringify(patientInfo);
            if( finalData.length > 2 ){
                resolve(patientInfo[0].dataValues);
            }
            // patient not found
            resolve(false);
    
        }
        catch(err){
            reject(err);
        }
    });
};

let getDoctorInfo = async ( id ) => {
     
    return new Promise( async ( resolve, reject ) => {

        try{

            let Doctor = db.doctor;
            let DoctorInfo = await Doctor.findAll({
    
                where : {
                    id : id
                }
            
            });
    
            let finalData = JSON.stringify(DoctorInfo);
            if( finalData.length > 2 ){
                resolve(DoctorInfo[0].dataValues);
            }
            // patient not found
            resolve(false);
    
        }
        catch(err){
            reject(err);
        }
    });
}

let getClinicInfo = async ( id ) => {

    return new Promise( async ( resolve, reject ) => {

        try{

            let Clinic = db.clinic;
            let ClinicInfo = await Clinic.findAll({
    
                where : {
                    id : id
                }
            
            });
    
            let finalData = JSON.stringify(ClinicInfo);
            if( finalData.length > 2 ){
                resolve(ClinicInfo[0].dataValues);
            }
            // patient not found
            resolve(false);
    
        }
        catch(err){
            reject(err);
        }
    });
}

export {

    getPatientInfo,
    getDoctorInfo,
    getClinicInfo,

}