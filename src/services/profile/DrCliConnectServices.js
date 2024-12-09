
import { db } from "../../models/index.js";


let clinics = async ( id ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let clinicsOfDoctor = await db.doctorCLinicConnect.findAll({
                where : {
                    doctorId : id
                }
            })

            return resolve(clinicsOfDoctor);
        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
}


let doctors = async ( id ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let doctorsOfClinic = await db.doctorCLinicConnect.findAll({
                where : {
                    clinicId : id
                }
            })

            return resolve(doctorsOfClinic);
        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
}



export {

    clinics,
    doctors
}