
import DoctorClinicConnection from "../../models/doctor_clinic_connection.js";


let clinics = async ( id ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const clinicsOfDoctor = await DoctorClinicConnection.find({
                doctorId: id 
            });
            return resolve(clinicsOfDoctor);
        }
        catch(err){
            reject(err);
        }
    })
}


let doctors = async ( id ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const doctorsOfClinic = await DoctorClinicConnection.find({
                clinicId: id 
            });
            return resolve(doctorsOfClinic);
        }
        catch(err){
            reject(err);
        }
    })
}



export {

    clinics,
    doctors
}