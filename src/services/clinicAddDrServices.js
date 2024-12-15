
import Doctor from "../models/doctor.js";
import DoctorClinicRequest from "../models/doctor_clinic_request.js";
import DoctorClinicConnect from "../models/doctor_clinic_connection.js";
import { serverErrorFromService as serverErr, userErrorfromService as userErr } from "../utils/errorMsg.js";


// id is clinicid
let createRequest = async ( id,body_data ) => {

    return new Promise ( async ( resolve, reject ) => {
        try{

            const checkreq = await Doctor.findOne({
                _id : body_data.id
            })
            if( checkreq == null ){
                return reject(userErr);
            }

            const request = await DoctorClinicRequest.findOne({
                clinicId : id,
                doctorId : body_data.id
            })

            // check doctor is presend or not
            if( request != null ){
                return reject(userErr);
            }

            // crate booking
            const request_obj = new DoctorClinicRequest({ 
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

            resolve(["Request Send successfully"]);

        }
        catch(err){
            reject(serverErr);
        }
    })
}


// id is request id
let clinicUpdate = async ( clinicid,body_data ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const request = await DoctorClinicRequest.findOne({
                _id : body_data.uniqueId,
                clinicId : clinicid
            })

            if( request == null ){
                return reject(userErr);
            }
            if( request.status != 2 ){
                return reject(userErr);
            }

            // update workingdate and time status clinicMessage
            await DoctorClinicRequest.findByIdAndUpdate(
                {
                    _id : body_data.uniqueId
                },
                { 
                    clinicMessage : body_data.message,
                    workingDays : body_data.days,
                    workingTime : body_data.time, 
                    status : 1 
                },
            )

            resolve(["Done"]);
        }
        catch(err){
            reject(serverErr);
        }
    })
}

// id is request id
let doctorResponce = async ( doctorid,body_data ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            const request = await DoctorClinicRequest.findOne({
                _id : body_data.uniqueId,
                doctorId : doctorid
            })

            // check
            if( request != null && request.status == 1 ){
                
                // update data and only status and doctorMessage 
                if( body_data.choose == 2 ){

                    await DoctorClinicRequest.findByIdAndUpdate(
                        {
                            _id : body_data.uniqueId
                        },
                        { 
                            workingDays : body_data.days, 
                            workingTime :body_data.time, 
                            doctorMessage : body_data.message, 
                            status : 2 
                        },
                    )

                }else{

                    await DoctorClinicRequest.findByIdAndUpdate(
                        {
                            _id : body_data.uniqueId
                        },
                        {
                            doctorMessage : body_data.message, 
                            status : 3 
                        },
                    )
                    const make = new DoctorClinicConnect({
                        clinicId : request.clinicId,
                        doctorId : doctorid,
                        workingDays : request.workingDays,
                        workingTime : request.workingTime
                    });
                    await make.save();

                }
                return resolve(["Done"]);

            }else{
                return reject(userErr);
            }
        }
        catch(err){
            reject(serverErr);
        }
    })
}


export {

    createRequest,
    clinicUpdate,
    doctorResponce,

}