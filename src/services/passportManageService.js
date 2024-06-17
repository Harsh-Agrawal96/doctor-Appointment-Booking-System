import { db } from "../models/index.js";


let findUserbyEmail = (email) => {
    return new Promise ( async( resolve,reject ) => {

        try{

            let user = await db.users.findAll({
                where : {
                    useremail : email
                }
            });
            let data = JSON.stringify(user);
            if( data.length > 2) {
                resolve(user);
            }else{
                reject( ` Email is not found `);
            }
        }
        catch(err){
            reject(err);
        }
    });
};

let comparePassword = ( password, user ) => {

    return new Promise( async ( resolve,reject ) => {
        try{

            let type = user[0].dataValues.usertype;
            if( type == 1 ){
                let patients = await db.patient.findAll({
                    where : {
                        email : user[0].dataValues.useremail
                    }
                })

                let data = JSON.stringify(patients);
                if( data.length > 2 ){
                    if( password === patients[0].dataValues.password ){
                        resolve(true);
                    }else{
                        resolve(" Password is incorrect! ");
                    }
                }
            }
            if( type == 2 ){
                let doctors = await db.doctor.findAll({
                    where : {
                        email : user[0].dataValues.useremail
                    }
                })

                let data = JSON.stringify(doctors);
                if( data.length > 2 ){
                    if( password === doctors[0].dataValues.password ){
                        resolve(true);
                    }else{
                        resolve(" Password is incorrect! ");
                    }
                }
            }
            if( type == 3 ){
                let clinics = await db.clinic.findAll({
                    where : {
                        email : user[0].dataValues.useremail
                    }
                })

                let data = JSON.stringify(clinics);
                if( data.length > 2 ){
                    if( password === clinics[0].dataValues.password ){
                        resolve(true);
                    }else{
                        resolve(" Password is incorrect! ");
                    }
                }
            }

            reject("some error but don't know");
        }catch(err){    
            reject(err);
        }
    })
}

let findUserbyid = (idInput) => {
    return new Promise( async (resolve, reject) =>{

        try{
            let user = await db.users.findAll({
                where : {
                    id : idInput
                }
            });

            let data = JSON.stringify(user);
            if( data.length > 2){
                resolve(user);
            }
            reject(`user not found by id : ${idInput} `);
        }catch( err ){
            reject(err);
        }

    })
}

let findRealUser = async (usertype, email) => {

    console.log(
        "main"
    );
    if( usertype == 1 ){
        let patients = await db.patient.findAll({
            where : {
                email : email
            }
        })

        let data = JSON.stringify(patients);
        if( data.length > 2 ){
            return patients[0].dataValues;
        }
    }
    if( usertype == 2 ){
        let doctors = await db.doctor.findAll({
            where : {
                email : email
            }
        })

        let data = JSON.stringify(doctors);
        if( data.length > 2 ){
            return doctors[0].dataValues;
        }
    }
    if( usertype == 3 ){
        let clinics = await db.clinic.findAll({
            where : {
                email : email
            }
        })

        let data = JSON.stringify(clinics);
        if( data.length > 2 ){
            return clinics[0].dataValues;
        }
    }
}



export {
    
    findUserbyEmail,
    comparePassword,
    findUserbyid,
    findRealUser,
    
}