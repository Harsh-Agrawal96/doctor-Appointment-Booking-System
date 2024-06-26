
import { db } from "../models/index.js";


let newBookings = async ( consultId, type, data) => {

    return new Promise( (resolve,reject) => {

        try{

            let booking = findbooking(data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.)
                
            }else{
                reject("booking not found");
            }
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    });
}

let findbooking = async ( id ) => {

    return new Promise( (resolve,reject) => {

        try{

            let booking = db.allbooking.findAll({
                where: {
                    id : id
                }
            })
            resolve(booking)
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    });
}

export {

    newBookings,

}