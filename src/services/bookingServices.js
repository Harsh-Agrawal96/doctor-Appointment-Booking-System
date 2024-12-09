
import { db } from "../models/index.js";



let createbooking = async ( patientid, data_body ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            if( data_body.type != 1 && data_body.type != 2 ){
                return reject( {"1" : "something went wrong","2" : "Error 404"} );
            }

            let type;

            if( data_body.consttype == 2 ){
                let check = await db.doctor.findAll({
                    where : {
                        id : data_body.constid
                    }
                })

                let check2 = JSON.stringify(check);
                if( check2.length == 2 ){
                    return reject( {"1" : "something went wrong","2" : "Error 404"} );
                }
                type = 1;
            }

            if( data_body.consttype == 3 ){
                let check = await db.clinic.findAll({
                    where : {
                        id : data_body.constid
                    }
                })

                let check2 = JSON.stringify(check);
                if( check2.length == 2 ){
                    return reject( {"1" : "something went wrong","2" : "Error 404"} );
                }
                type = data_body.type;
            }

            let booking = db.allbooking;
            const booking_obj = booking.build( { 

                status:1, 
                dateofStart : '1800-01-01',
                dateofappointment : '1800-01-01', 
                dateofComform : '1800-01-01', 
                dateofDecline : '1800-01-01', 
                datetoconform : '1800-01-01', 
                patientId :patientid,
                patientName : data_body.patinetName,
                consultantId : data_body.constid,
                consultantName : data_body.consultName,
                consultanttype : data_body.consttype, 
                symtom : data_body.symtom,
                consultantMeassage : "",
                patientMeassage : data_body.message,
                consultDate : "",
                preferredConsultdate : data_body.preferredate,
                bookingtype : type 

            });

            await booking_obj.save();

            resolve( { "1" : "booking created successfully" } );
        }
        catch(err){
            console.log(err);
            reject( {"1" : "something went wrong","2" : "Error 502"} );
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
                        { 
                            consultantMeassage : body_data.message, 
                            status : 2, 
                            preferredConsultdate : body_data.date
                        },
                        {
                            where : {
                                id : body_data.uniqueId
                            },
                        },
                    )
                    console.log("progress start done!");
                    resolve( { "1" : "done" } );
                }else{

                    reject( {"1" : "something went wrong","2" : "Error 404"} );
                }
                
            }else{
                reject( {"1" : "something went wrong","2" : "Error 404"} );
            }
        }
        catch(err){
            console.log(err);
            reject( {"1" : "something went wrong","2" : "Error 502"} );
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
                    resolve( { "1" : "done!" } );
                }else{

                    reject( {"1" : "something went wrong","2" : "Error 404"} )
                }
                
            }else{
                reject( {"1" : "something went wrong","2" : "Error 404"} );
            }
        }
        catch(err){
            console.log(err);
            reject( {"1" : "something went wrong","2" : "Error 502"} );
        }
    });
}


let CompleteBooking = async ( patientid, type, body_data ) => {

    return new Promise( async (resolve,reject) => {

        try{

            let booking = await findbooking(body_data.uniqueId);

            let data = JSON.stringify(booking);

            if( data.length > 2 ){
                let bookingData = booking[0].dataValues;

                if( bookingData.patientId != patientid || type != 1 || bookingData.status != 3 ){
                    reject( {"1" : "something went wrong","2" : "Error 404"} );
                }

                if( body_data.selection == 1 ){
                    await conformed( body_data );
                }
                if( body_data.selection == 2 ){
                    await denied( body_data );
                }

                return resolve( { "1" : "done" } );
                
            }else{
                return reject( {"1" : "something went wrong","2" : "Error 404"} );
            }
        }
        catch(err){
            console.log(err);
            reject( {"1" : "something went wrong","2" : "Error 502"} );
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
            reject( {"1" : "something went wrong","2" : "Error 502"} );
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
            reject( {"1" : "something went wrong","2" : "Error 502"} );
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
            resolve(booking);
        }
        catch(err){
            console.log(err);
            reject( {"1" : "something went wrong","2" : "Error 502"} );
        }
    });
}

export {

    createbooking,
    startprogress,
    requestforConform,
    CompleteBooking,

}