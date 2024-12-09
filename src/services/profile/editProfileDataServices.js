
import { db } from "../../models/index.js";


// for doctor

let dataforDoctor = async (id) => {

    return new Promise ( async ( resolve, reject ) => {

        try{

            let appointmentdata = await bookingData(id,2,1);
            let requestdata = await requestDatabydoctor(id);

            console.log( "here see the result" );

            let forsend = { "requ" : requestdata, "appoint" : appointmentdata }

            resolve(forsend);

        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })

}

// for clinic

let dataforClinic = async (id) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let appointmentdata = await bookingData(id,3,1);
            let sergerydata = await bookingData(id,3,2);
            let requestdata = await requestDatabyclinic(id);
    
            console.log( "here see the result" );

            let forsend = { "requ" : requestdata, "appoint" : appointmentdata, "sergery" : sergerydata }

            resolve(forsend);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    } )
    
} 

// for patient

let dataforPatient = async (id) => {

    return new Promise ( async ( resolve,reject ) => {
         
        try{

            let appointmentdata = await bookingDataforpatient(id,1);
            let sergerydata = await bookingDataforpatient(id,2);

            console.log( "here see the result" );

            let forsend = { "appoint" : appointmentdata, "sergery" : sergerydata }

            resolve(forsend);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })

}

// common data calls 


let bookingData = async (id,type,bookingtype) => {

    return new Promise ( async ( resolve,reject ) => {

        try{
            let data = await db.allbooking.findAll({
                where : {
                    consultantId : id,
                    consultanttype : type,
                    bookingtype : bookingtype
                },
            })

            resolve( data );
        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
};

let bookingDataforpatient = async (id,bookingtype) => {

    return new Promise ( async ( resolve,reject ) => {

        try{
            let data = await db.allbooking.findAll({
                where : {
                    patientId : id,
                    bookingtype : bookingtype
                },
            })

            resolve( data );
        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
};

let requestDatabyclinic = async (id) => {
     
    return new Promise ( async ( resolve,reject ) => {

        try{
            let data = await db.doctorClinicRequest.findAll({
                where : {
                    clinicId : id
                },
            })

            resolve( data );
        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
};

let requestDatabydoctor = async (id) => {
     
    return new Promise ( async ( resolve,reject ) => {

        try{
            let data = await db.doctorClinicRequest.findAll({
                where : {
                    doctorId : id
                },
            })

            resolve( data );
        }
        catch(err){
            console.log(err)
            reject(err);
        }
    })
};



export {
    dataforDoctor,
    dataforClinic,
    dataforPatient
}