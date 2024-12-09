
import { db } from "../models/index.js";


// id is clinicid
let createRequest = async ( id,body_data ) => {

    return new Promise ( async ( resolve, reject ) => {

        try{

            let checkreq = await db.doctor.findAll({
                where : {
                    id : body_data.id
                }
            })

            let check = JSON.stringify(checkreq);
            if( check.length == 2 ){
                return reject({ "1":"Something went Wrong", "2":"Error 404" });
            }

            let request = await db.doctorClinicRequest.findAll({
                where : {
                    clinicId : id,
                    doctorId : body_data.id
                }
            })

            // check doctor is presend or not
    
            let data = JSON.stringify(request);
        
            if( data.length > 2 ){
                return reject({ "1":"Something went Wrong", "2":"Error 404" });
            }

            // crate booking
            let createRequest = db.doctorClinicRequest;
            const request_obj = createRequest.build( { 
                status:1,
                clinicId : id,
                clinicName : body_data.clinicN,
                doctorId : body_data.id,
                doctorName : body_data.doctorN,
                workingDays : body_data.workday,
                workingTime :body_data.worktime,
                clinicMessage : body_data.message,
                doctorMessage :""
            });

            await request_obj.save();
            console.log( "new booking created! ");

            resolve({ "1":"Request Send successfully" });

        }
        catch(err){
            console.log(err)
            reject({ "1":"Something went Wrong", "2":"Error 502" });
        }
    })
}


// id is request id
let clinicUpdate = async ( clinicid,body_data ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let request = await db.doctorClinicRequest.findAll({
                where : {
                    id : body_data.uniqueId,
                    clinicId : clinicid
                }
            })
        
            let data = JSON.stringify(request);

            if( data.length <= 2 ){
                return reject({ "1":"Something went Wrong", "2":"Error 404" });
            }
            if( request[0].dataValues.status != 2 ){
                return reject({ "1":"Something went Wrong", "2":"Error 404" });
            }

            // update workingdate and time status clinicMessage
            await db.doctorClinicRequest.update(
                { clinicMessage : body_data.message,workingDays : body_data.days,workingTime : body_data.time, status : 1 },
                {
                    where : {
                        id : body_data.uniqueId
                    },
                },
            )

            resolve({ "1":"Done" });
        }
        catch(err){
            console.log(err);
            reject({ "1":"Something went Wrong", "2":"Error 502" });
        }
    })
}

// id is request id
let doctorResponce = async ( doctorid,body_data ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            console.log(body_data.uniqueId);
            console.log(doctorid)

            let request = await db.doctorClinicRequest.findAll({
                where : {
                    id : body_data.uniqueId,
                    doctorId : doctorid
                }
            })

            // check
        
            let data = JSON.stringify(request);

            console.log(data);
        
            if( data.length > 2 && request[0].dataValues.status == 1 ){
                
                // update data and only status and doctorMessage 
                if( body_data.choose == 2 ){

                    console.log("doing denied")

                    await db.doctorClinicRequest.update(
                        { workingDays : body_data.days, workingTime :body_data.time, doctorMessage : body_data.message, status : 2 },
                        {
                            where : {
                                id : body_data.uniqueId
                            },
                        },
                    )
                    console.log("successfully denied");

                }else{

                    console.log("doing accept")
                    await db.doctorClinicRequest.update(
                        { doctorMessage : body_data.message, status : 3 },
                        {
                            where : {
                                id : body_data.uniqueId
                            },
                        },
                    )
                    console.log("successfully accepted");

                    let make = db.doctorCLinicConnect.build( {
                        clinicId : request[0].dataValues.clinicId,doctorId : doctorid,workingDays : request[0].dataValues.workingDays,workingTime : request[0].dataValues.workingTime
                    } );
                    await make.save();

                    console.log("connection maked!");

                }

                console.log("done")
                return resolve({ "1":"Done" });

            }else{
                return reject({ "1":"Something went Wrong", "2":"Error 404" });
            }
        }
        catch(err){
            console.log(err);
            reject({ "1":"Something went Wrong", "2":"Error 502" });
        }
    })
}


export {

    createRequest,
    clinicUpdate,
    doctorResponce,

}