
import { db } from "../models/index.js";


let newBookings = async () => {

    
    try{
        let data = db.allbooking.findAll({
            where : {

            }
        })

        return data
    }
}

export {

    newBookings,

}