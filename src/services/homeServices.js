
import Doctor from "../models/doctor.js";
import Clinic from "../models/clinic.js";


let findtopdoctor = async (  ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const doctors = await Doctor.find({
                limit : 10
            })
            resolve(doctors);
        }
        catch(err){
            reject(err);
        }
    })

}

let findtopclinic = async (  ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const clinics = await Clinic.find({
                limit : 10
            })
            resolve(clinics);
        }
        catch(err){
            reject(err);
        }
    })
}


export{
    findtopclinic,
    findtopdoctor
}