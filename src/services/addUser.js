import { db } from "../models/index.js";

let addNewUser = (users) => {
    return new Promise( async (resolve, reject) => {
        try{

            let User = db.user;
            const jane = User.build({ firstName: users.firstname, lastName: users.lastname, password: users.password });
            await jane.save();
            resolve("done!");
        }
        catch(e){
            reject(e);
        }
    });
};

export {
    addNewUser,
}