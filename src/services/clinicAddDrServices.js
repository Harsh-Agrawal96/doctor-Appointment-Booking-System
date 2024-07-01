
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

            check = JSON.stringify(checkreq);
            if( check.length == 2 ){
                reject( "doctor is not valid! ");
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
                reject("request already exist!");
            }

            // crate booking
            let createRequest = db.doctorClinicRequest;
            const request_obj = createRequest.build( { status:1,clinicId : id,doctorId : body_data.id,workingDays : body_data.workday ,workingTime :body_data.worktime,clinicMessage : body_data.message,doctorMessage :""  });

            await request_obj.save();
            console.log( "new booking created! ");

            resolve();

        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
}


// id is request id
let clinicUpdate = async ( clinicid,body_data ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let request = db.doctorClinicRequest.findAll({
                where : {
                    id : body_data.id,
                    clinicId : clinicid
                }
            })
        
            let data = JSON.stringify(request);

            if( data.length <= 2 ){
                reject("request not exist!");
            }
            if( request[0].dataValues.status != 2 ){
                reject("invalid request!");
            }

            // update workingdate and time status clinicMessage
            await db.doctorClinicRequest.update(
                { clinicMessage : body_data.message,workingDays : body_data.days,workingTime : workTime, status : 1 },
                {
                    where : {
                        id : body_data.id
                    },
                },
            )
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}

// id is request id
let doctorResponce = async ( doctorid,body_data ) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let request = db.doctorClinicRequest.findAll({
                where : {
                    id : body_data.id,
                    doctorId : doctorid
                }
            })

            // check
        
            let data = JSON.stringify(request);
        
            if( data.length > 2 && data[0].dataValues.status == 1 ){
                
                // update data and only status and doctorMessage 
                if( body_data.choose == 2 ){

                    await db.doctorClinicRequest.update(
                        { doctorMessage : body_data.message, status : 4 },
                        {
                            where : {
                                id : body_data.id
                            },
                        },
                    )
                    console.log("successfully denied");
                }else{

                    await db.doctorClinicRequest.update(
                        { doctorMessage : body_data.message, status : 5 },
                        {
                            where : {
                                id : body_data.id
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
                resolve();

            }else{
                reject("Request not exist!");
            }
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}


export {

    createRequest,
    clinicUpdate,
    doctorResponce,

}