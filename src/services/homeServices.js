
import Doctor from "../models/doctor.js";
import Clinic from "../models/clinic.js";


let findtopdoctor = async (limit, alreadyFetchedIds = []) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const doctors = await Doctor.find({ _id: { $nin: alreadyFetchedIds } })
            .limit(limit);
            resolve(doctors);
        }
        catch(err){
            reject(err);
        }
    })

}

let findtopclinic = async (limit, alreadyFetchedIds = []) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const clinics = await Clinic.find({ _id: { $nin: alreadyFetchedIds } })
            .limit(limit);
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