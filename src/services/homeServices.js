
import { db } from "../models/index.js";


let findtopdoctor = async (  ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let doctors = await db.doctor.findAll({
                limit : 10
            })

            resolve(doctors);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })

}

let findtopclinic = async (  ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let clinic = db.clinic.findAll({
                limit : 10
            })

            resolve(clinic);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}


export{
    findtopclinic,
    findtopdoctor
}