
import { db } from "../../models/index.js";


// for doctor

let dataforDoctor = async (id) => {

    let appointmentdata = bookingData(id,2,1);
    let requestdata = requestDatabydoctor(id);

    console.log( "here see the result" );

    let requestobj = {};
    for( let i = 0;i<requestdata.length;i++ ){

        let obj = {};
        obj["da1"] = requestdata[i].dataValues;
        let otherobj = await doctorDetails(requestdata[i].dataValues.doctorId);
        obj["da2"] = otherobj;
        requestobj[i] = obj;
    }
    console.log(requestobj);

    let appointmentobj = {};
    for( let i = 0;i<appointmentdata.length;i++ ){

        let obj = {};
        obj["da1"] = appointmentdata[i].dataValues;
        let otherobj = await patientDetails(appointmentdata[i].dataValues.patientId);
        obj["da2"] = otherobj;
        appointmentobj[i] = obj;
    }
    console.log(appointmentobj);

}

// for clinic

let dataforClinic = async (id) => {

    let appointmentdata = bookingData(id,3,1);
    let sergerydata = bookingData(id,3,2);
    let requestdata = await requestDatabyclinic(id);
    
    console.log( "here see the result" );

    let requestobj = {};
    for( let i = 0;i<requestdata.length;i++ ){

        let obj = {};
        obj["da1"] = requestdata[i].dataValues;
        let otherobj = await doctorDetails(requestdata[i].dataValues.doctorId);
        obj["da2"] = otherobj;
        requestobj[i] = obj;
    }
    console.log(requestobj);

    let Sergeryobj = {};
    for( let i = 0;i<sergerydata.length;i++ ){

        let obj = {};
        obj["da1"] = sergerydata[i].dataValues;
        let otherobj = await patientDetails(sergerydata[i].dataValues.patientId);
        obj["da2"] = otherobj;
        Sergeryobj[i] = obj;
    }
    console.log(Sergeryobj);

    let appointmentobj = {};
    for( let i = 0;i<appointmentdata.length;i++ ){

        let obj = {};
        obj["da1"] = appointmentdata[i].dataValues;
        let otherobj = await patientDetails(appointmentdata[i].dataValues.patientId);
        obj["da2"] = otherobj;
        appointmentobj[i] = obj;
    }
    console.log(appointmentobj);
    
} 

// for patient

let dataforPatient = async (id) => {

    let appointmentdata = bookingDataforpatient(id,1);
    let sergerydata = bookingDataforpatient(id,2);

    console.log( "here see the result" );

    let requestobj = {};
    for( let i = 0;i<requestdata.length;i++ ){

        let obj = {};
        obj["da1"] = requestdata[i].dataValues;
        let otherobj = await doctorDetails(requestdata[i].dataValues.doctorId);
        obj["da2"] = otherobj;
        requestobj[i] = obj;
    }
    console.log(requestobj);

    let Sergeryobj = {};
    for( let i = 0;i<sergerydata.length;i++ ){

        let obj = {};
        obj["da1"] = sergerydata[i].dataValues;
        let otherobj = await patientDetails(sergerydata[i].dataValues.patientId);
        obj["da2"] = otherobj;
        Sergeryobj[i] = obj;
    }
    console.log(Sergeryobj);

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

let doctorDetails = async (id) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let data = await db.doctor.findAll({
                where : {
                    id : id
                }
            })
            
            let val = {};
            val["name"] = data[0].dataValues.fullName;
            val["id"] = id;
            resolve(val);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}

let patientDetails = async (id) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let data = await db.patient.findAll({
                where : {
                    id : id
                }
            })
            
            let val = {};
            val["name"] = data[0].dataValues.fullName;
            val["id"] = id;
            resolve(val);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}

let clinicDetails = async (id) => {

    return new Promise ( async ( resolve,reject ) => {

        try{

            let data = await db.clinic.findAll({
                where : {
                    id : id
                }
            })
            
            let val = {};
            val["name"] = data[0].dataValues.fullName;
            val["id"] = id;
            resolve(val);
        }
        catch(err){
            console.log(err);
            reject(err);
        }
    })
}


export {
    dataforDoctor,
    dataforClinic,
    dataforPatient
}