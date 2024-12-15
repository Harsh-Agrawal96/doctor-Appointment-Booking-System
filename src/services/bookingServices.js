
import Doctor from "../models/doctor.js";
import Clinic from "../models/clinic.js";
import Booking from "../models/Booking.js";

import { serverErrorFromService as serverErr, userErrorfromService as userErr } from "../utils/errorMsg.js";



let createbooking = async ( patientid, data_body ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{


            if( data_body.type != 1 && data_body.type != 2 ){
                return reject(userErr);
            }

            let type;

            if( data_body.consttype == 2 ){
                const check = await Doctor.findOne({
                    _id : data_body.constid
                })
                if( check == null ){
                    return reject(userErr);
                }
                type = 1;
            }

            if( data_body.consttype == 3 ){
                const check = await Clinic.find({
                    _id : data_body.constid
                })
                if( check== null ){
                    return reject(userErr);
                }
                type = data_body.type;
            }

            const booking_obj = new Booking({ 
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
                consultantType : data_body.consttype, 
                symtom : data_body.symtom,
                consultantMeassage : "",
                patientMeassage : data_body.message,
                consultDate : "",
                preferredConsultdate : data_body.preferredate,
                bookingType : type 
            });
            await booking_obj.save();

            resolve([ "booking created successfully" ]);
        }
        catch(err){
            return reject(serverErr);
        }
    })
}


let startprogress = async ( consultId, type, body_data) => {

    return new Promise( async (resolve,reject) => {
        try{

            const bookingData = await findbooking(body_data.uniqueId);

            if( bookingData != null ){

                if( bookingData.consultantId == consultId && bookingData.consultantType === type && ( bookingData.status == 1 || bookingData.status == 4 ) ){
                    
                    // update data
                    await Booking.findByIdAndUpdate(
                        {
                            _id : body_data.uniqueId
                        },
                        {
                            consultantMessage : body_data.message, 
                            status : 2, 
                            preferredConsultdate : body_data.date
                        },
                    )

                    resolve( ["done"] );
                }else{
                    reject(userErr);
                }
            }else{
                reject(userErr);
            }
        }
        catch(err){
            reject(serverErr);
        }
    });
}

let requestforConform = async ( consultId, type, body_data) => {

    return new Promise( async (resolve,reject) => {

        try{

            const bookingData = await findbooking(body_data.uniqueId);

            if( bookingData != null ){

                if( bookingData.consultantId == consultId && bookingData.consultantType == type && ( bookingData.status == 2 || bookingData.status == 4 ) ){
                    
                    await Booking.findByIdAndUpdate(
                        {
                            _id : body_data.uniqueId
                        },
                        { 
                            consultantMessage : body_data.message, 
                            status : 3 
                        },
                    )

                    resolve(["done"]);
                }else{
                    reject(userErr)
                }
            }else{
                reject(userErr);
            }
        }
        catch(err){
            reject(serverErr);
        }
    });
}


let CompleteBooking = async ( patientid, type, body_data ) => {

    return new Promise( async (resolve,reject) => {

        try{

            const bookingData = await findbooking(body_data.uniqueId);

            if( bookingData != null ){

                if( bookingData.patientId != patientid || type != 1 || bookingData.status != 3 ){
                    return reject(userErr);
                }

                if( body_data.selection == 1 ){
                    await conformed( body_data );
                }
                if( body_data.selection == 2 ){
                    await denied( body_data );
                }

                return resolve(["done"]);
            }else{
                return reject(userErr);
            }
        }
        catch(err){
            reject(serverErr);
        }
    });
}

let conformed = async ( body_data ) => {

    return new Promise ( async ( resolve,reject ) => {
        try{

            await Booking.findByIdAndUpdate(
                {
                    _id : body_data.uniqueId
                },
                { status : 5 },
            )

            resolve();
        }
        catch(err){
            reject();
        }
    })
}

let denied = async ( body_data ) => {
    
    return new Promise ( async ( resolve,reject ) => {
        try{

            await Booking.findByIdAndUpdate(
                {
                    _id : body_data.uniqueId
                },
                { 
                    patientMessage : body_data.message, 
                    status :4 
                },
            )
            resolve();
        }
        catch(err){
            reject();
        }
    })
}


let findbooking = async ( id ) => {

    return new Promise( async (resolve,reject) => {
        try{
            const booking = await Booking.findOne({
                _id : id
            })
            resolve(booking);
        }
        catch(err){
            reject();
        }
    });
}

export {

    createbooking,
    startprogress,
    requestforConform,
    CompleteBooking,

}