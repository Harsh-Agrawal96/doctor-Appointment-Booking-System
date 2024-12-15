
import Booking from "../../models/Booking.js";
import DoctorClinicRequest from "../../models/doctor_clinic_request.js";


// for doctor
let dataforDoctor = async (id) => {

    return new Promise ( async ( resolve, reject ) => {
        try{
            let appointmentdata = await bookingData(id,2,1);
            let requestdata = await requestDatabydoctor(id);

            let forsend = { "requ" : requestdata, "appoint" : appointmentdata }

            resolve(forsend);
        }
        catch(err){
            reject(err);
        }
    })

}

// for clinic
let dataforClinic = async (id) => {

    return new Promise ( async ( resolve,reject ) => {
        try{
            let appointmentdata = await bookingData(id,3,1);
            let sergerydata = await bookingData(id,3,2);
            let requestdata = await requestDatabyclinic(id);

            let forsend = { "requ" : requestdata, "appoint" : appointmentdata, "sergery" : sergerydata }

            resolve(forsend);
        }
        catch(err){
            reject(err);
        }
    } )
    
} 

// for patient
let dataforPatient = async (id) => {

    return new Promise ( async ( resolve,reject ) => {
         
        try{

            let appointmentdata = await bookingDataforpatient(id,1);
            let sergerydata = await bookingDataforpatient(id,2);

            let forsend = { "appoint" : appointmentdata, "sergery" : sergerydata }

            resolve(forsend);
        }
        catch(err){
            reject(err);
        }
    })

}

// common data calls 


let bookingData = async (id,type,bookingtype) => {

    return new Promise ( async ( resolve,reject ) => {
        try{
            const data = await Booking.find({ 
                consultantId: id, 
                consultantType: type, 
                bookingType : bookingtype 
            });
            resolve( data );
        }
        catch(err){
            reject(err);
        }
    })
};

let bookingDataforpatient = async (id,bookingtype) => {

    return new Promise ( async ( resolve,reject ) => {

        try{
            let data = await Booking.find({ 
                patientId: id, 
                bookingType : bookingtype 
            });
            resolve( data );
        }
        catch(err){
            reject(err);
        }
    })
};

let requestDatabyclinic = async (id) => {
     
    return new Promise ( async ( resolve,reject ) => {

        try{
            let data = await DoctorClinicRequest.find({ 
                clinicId: id 
            });
            resolve( data );
        }
        catch(err){
            reject(err);
        }
    })
};

let requestDatabydoctor = async (id) => {
     
    return new Promise ( async ( resolve,reject ) => {
        try{
            let data = await DoctorClinicRequest.find({ 
                doctorId: id 
            });
            resolve( data );
        }
        catch(err){
            reject(err);
        }
    })
};



export {
    dataforDoctor,
    dataforClinic,
    dataforPatient
}