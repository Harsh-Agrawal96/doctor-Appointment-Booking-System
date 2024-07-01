
import { db } from "../models/index.js";



let createbooking = async ( patientid, data_body ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            if( body_data.consttype == 2 ){
                let check = await db.doctor.findAll({
                    where : {
                        id : data_body.constid
                    }
                })

                let check2 = JSON.stringify(check);
                if( check2.length == 2 ){
                    reject("consultant not found");
                }
            }

            if( body_data.consttype == 3 ){
                let check = await db.clinic.findAll({
                    where : {
                        id : data_body.constid
                    }
                })

                let check2 = JSON.stringify(check);
                if( check2.length == 2 ){
                    reject("consultant not found");
                }
            }

            let booking = db.allbooking;
            const booking_obj = booking.build( { status:1, dateofStart : '1800-01-01',dateofappointment : '1800-01-01', dateofComform : '1800-01-01', dateofDecline : '1800-01-01', datetoconform : '1800-01-01', patientId :id, consultantId : data_body.constid,consultanttype : data_body.consttype, symtom : data_body.symtom,consultantMeassage : "",patientMeassage : data_body.message,consultDate : '1800-01-01',preferredConsultdate : data_body.preferredate });

            await booking_obj.save();
            console.log( "new booking created! ");

            resolve();
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}


let startprogress = async ( consultId, type, body_data) => {

    return new Promise( async (resolve,reject) => {

        try{

            let booking = await findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.consultantId == consultId && bookingData.consultanttype == type && ( bookingData.status == 1 || bookingData.status == 4 ) ){
                    
                    // update data
                    await db.allbooking.update(
                        { consultantMeassage : body_data.message, status : 2, preferredConsultdate : body_data.date },
                        {
                            where : {
                                id : body_data.uniqueId
                            },
                        },
                    )
                    console.log("progress start done!");
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

    return new Promise( async (resolve,reject) => {

        try{

            let booking = await findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.consultantId == consultId && bookingData.consultanttype == type && ( bookingData.status == 2 || bookingData.status == 4 ) ){
                    
                    await db.allbooking.update(
                        { consultantMeassage : body_data.message, status : 3 },
                        {
                            where : {
                                id : body_data.uniqueId
                            },
                        },
                    )
                    console.log("send request for conform done!");
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

    return new Promise( async (resolve,reject) => {

        try{

            let booking = await findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.patientId != patientid || type != 1 || bookingData.status != 3 ){
                    reject("details not found");
                }

                if( query == 1 ){
                    conformed( body_data );
                }
                if( query == 2 ){
                    denied( body_data );
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

let conformed = async ( body_data ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            await db.allbooking.update(
                { status : 5 },
                {
                    where : {
                        id : body_data.uniqueId
                    },
                },
            )
            console.log("booking completed successfully!");
            resolve();
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}

let denied = async ( body_data ) => {
    
    return new Promise ( async ( resolve,reject ) => {

        try{

            await db.allbooking.update(
                { patientMeassage : body_data.message, status :4 },
                {
                    where : {
                        id : body_data.uniqueId
                    },
                },
            )
            console.log("booking denied!");
            resolve();
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}


let findbooking = async ( id ) => {

    return new Promise( async (resolve,reject) => {

        try{

            let booking = await db.allbooking.findAll({
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