import { db } from "../models/index.js";


let addNewUser = (user, num) => {
    return new Promise( async (resolve, reject) => {
        try{

            // 1 for patient
            if( num == 1){
                // check patient's email is exist before?
                let checkforEmail = await checkEmail(user.email);

                if( checkforEmail ){

                    reject("This  email is already registerd!! ");
                }else{
                    // hash the user's password
    
                    //create a new patient
                    let Patinet = db.patient;
                    const jane = Patinet.build({ fullName: user.username, email: user.email, password: user.password, address : "", accountName : "", phoneNumber : 0, Country : "", State : "", city : "", DOB : '1800-01-01' });
                    await jane.save();

                    // add details in "allusers"
                    let saveuser = db.users;
                    const change = saveuser.build({ usertype : 1,useremail : user.email });
                    await change.save();

                    resolve("done!");
                }
            }

            // 2 for doctor
            if( num == 2 ){
                // check doctor's email is exist before?
                let checkforEmail = await checkEmail(user.email);

                if( checkforEmail ){

                    reject("This  email is already registerd!! ");
                }else{
                    // hash the user's password
    
                    //create a new doctor
                    let Doctor = db.doctor;
                    const jane = Doctor.build({ fullName: user.name, email: user.email, password: user.password, address : "", Country : "", State : "", city : "", DOB : '1800-01-01' ,work : "", reviewPercent : 0.0, reviewNumber : 0,about : "", Services : {},specializations : {}, awards : {}, education : {}, membership : {}, experience : {}, Registration : {} });
                    await jane.save();

                    console.log("doctor saved")
                    // add details in "allusers"
                    let saveuser = db.users;
                    const change = saveuser.build({ usertype : 2,useremail : user.email });
                    await change.save();
                    console.log("user saved")


                    resolve("done!");
                }
            }

            // 3 for clinic
            if( num == 3 ){

                let doctorEmail = await checkDoctorEmail(user.doctorEmail);

                if( doctorEmail ){

                    reject("The doctor with this email is not registerd!! ");
                }else{
                    
                    let isEmailPresent = await checkEmail(user.clinicEmail);

                    if( isEmailPresent ){

                        reject("This  email is already registerd!! ");
                    }else{
                        // hash the user's password
    
                        //create a new doctor
                        let newClinic = db.pendingclinic;
                        const jane = newClinic.build({ doctorEmail : user.doctorEmail,doctorName : user.doctorName, clinicName : user.clinicName , clinicEmail : user.clinicEmail });
                        await jane.save();

                        resolve("done!");

                    }
                }
            }

        }
        catch(e){
            console.log(e);
            reject(e);
        }
    })
};

let checkDoctorEmail = async (email) => {

    let allUsers = db.users;
    const user = await allUsers.findAll({
        where : {
            useremail : email
        }
    })

    let data = JSON.stringify(user);

    if( data.length > 2 ){
        let type = user[0].dataValues.usertype;
        if( type == 2 ){
            return false;
        }else{
            return true;
        }
    }

    return true;
};

let checkEmail = async (email) => {

    let allUsers = db.users;
    const user = await allUsers.findAll({
        where : {
            useremail : email
        }
    })

    let data = JSON.stringify(user);

    if( data.length > 2 ){
        return true;
    }

    return false;
};



export {
    addNewUser,
}

