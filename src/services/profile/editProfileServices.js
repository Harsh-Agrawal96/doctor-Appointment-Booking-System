import Doctor from "../../models/doctor.js";
import Clinic from "../../models/clinic.js";
import Patient from "../../models/patient.js";

// doctor
let doctorU_personal = (data,id) => {
     
    return new Promise( async (resolve,reject ) => {

        try{
            await Doctor.findByIdAndUpdate( { _id : id }, {
                fullName: data.name,
                Country: data.country,
                State: data.state,
                city: data.city,
                address: data.address,
                DOB: data.dob,
            })
            resolve(true);
        }
        catch(err){
            reject(err)
        }
    })
};

let doctorU_work = (data,id) => {
     
    return new Promise( async (resolve,reject ) => {

        try{
            await Doctor.findByIdAndUpdate({ _id: id }, {
                work: data.work,
                about: data.about,
            });
            resolve(true);
        }
        catch(err){
            reject(err)
        }
    })
};

let doctorU_profession = (data,id) => {
     
    return new Promise( async (resolve,reject ) => {

        try{
            await Doctor.findByIdAndUpdate({ _id: id}, {
                Services: data.service,
                specializations: data.specialization,
                awards: data.award,
                education: data.education,
                membership: data.membership,
                experience: data.experience,
                Registration: data.registration,
            });
            resolve(true);
        }
        catch(err){
            reject(err)
        }
    })
};

// clinic
let clinicU_personal = (data,id) => {
     
    return new Promise( async (resolve,reject ) => {

        try{
            await Clinic.findByIdAndUpdate({ _id: id}, {
                fullName: data.name,
                Country: data.country,
                State: data.state,
                city: data.city,
                address: data.address,
                establishedDate: data.establish,
                nickName: data.shortName,
            });
            resolve(true);
        }
        catch(err){
            reject(err)
        }
    })
};


// patient
let patientU_personal = (data,id) => {
     
    return new Promise( async (resolve,reject ) => {

        try{
            await Patient.findByIdAndUpdate({ _id: id }, {
                fullName: data.fullname,
                Country: data.country,
                State: data.state,
                city: data.city,
                address: data.address,
                DOB: data.dob,
            });
            resolve(true);
        }
        catch(err){
            reject(err)
        }
    })
};



export {

    doctorU_personal,
    doctorU_profession,
    doctorU_work,
    clinicU_personal,
    patientU_personal

}