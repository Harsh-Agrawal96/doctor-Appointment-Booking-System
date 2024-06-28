
import { db } from "../models/index.js";



let createbooking = async (  ) => {


}


let startprogress = async ( consultId, type, body_data) => {

    return new Promise( (resolve,reject) => {

        try{

            let booking = findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.consultantId == consultId && bookingData.consultanttype == type && ( bookingData.status == 1 || bookingData.status == 4 ) ){
                    
                    // update data
                    resolve();
                }else{

                    reject("invalid user or booking details")
                }
                
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

let requestforConform = async ( consultId, type, body_data) => {

    return new Promise( (resolve,reject) => {

        try{

            let booking = findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.consultantId == consultId && bookingData.consultanttype == type && ( bookingData.status == 2 || bookingData.status == 4 ) ){
                    
                    // update data
                    resolve();
                }else{

                    reject("invalid user or booking details")
                }
                
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

let CompleteBooking = async ( patientid, type, body_data, query) => {

    return new Promise( (resolve,reject) => {

        try{

            let booking = findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.patientId != patientid || type != 1 || bookingData.status != 3 ){
                    reject("details not found");
                }

                if( query == 1 ){
                    conformed( patientid, type, body_data );
                }
                if( query == 2 ){
                    denied( patientid, type, body_data );
                }

                resolve("done");
                
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

let conformed = async () => {

}

let denied = async () => {
    
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

    createbooking,
    startprogress,
    requestforConform,
    CompleteBooking,

}