
import Patient from "../../models/patient.js";
import Doctor from "../../models/doctor.js";
import Clinic from "../../models/clinic.js";


let getPatientInfo = async ( id ) => {

    return new Promise( async ( resolve, reject ) => {

        try{
            const patientInfo = await Patient.findOne({
                _id : id
            });
            if( patientInfo != null ){
                return resolve(patientInfo );
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
            const doctorInfo = await Doctor.findOne({
                _id : id
            });
            if( doctorInfo != null ){
                return resolve( doctorInfo );
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
            const clinicInfo = await Clinic.findOne({
                _id : id
            });
            if( clinicInfo != null ){
                return resolve( clinicInfo );
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