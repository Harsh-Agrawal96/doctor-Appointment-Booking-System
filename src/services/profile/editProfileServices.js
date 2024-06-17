import { db } from "../../models/index.js";

// doctor
let doctorU_personal = (data,id) => {
     
    return new Promise( async (resolve,reject ) => {

        try{
            await db.doctor.update(
                { fullName : data.name, Country : data.country, State : data.state, city : data.city, address: data.address, DOB : data.dob },
                {
                    where : {
                        id : id
                    },
                },
            )
            console.log("done");
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
            await db.doctor.update(
                { work : data.work, about : data.about },
                {
                    where : {
                        id : id
                    },
                },
            )
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
            await db.doctor.update(
                { Services : data["service"], specializations : data["specialization"], awards : data["award"], education : data["education"], membership : data["membership"], experience : data["experience"], Registration : data["registration"] },
                {
                    where : {
                        id : id
                    },
                },
            )
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
            await db.clinic.update(
                { fullName : data.name , Country : data.country, State : data.state, city : data.city, address: data.address, establishedDate : data.establish, nickName : data.shortName }, 
                {
                    where : {
                        id : id
                    },
                },
            )
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
            await db.patient.update(
                { fullName : data.fullname , Country : data.country, State : data.state, city : data.city, address: data.address, DOB : data.dob },
                {
                    where : {
                        id : id
                    },
                },
            )
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