
import * as booking from "../../services/bookingServices.js";
let startProgress = async () => {

    if( req.user.type == 1 ){
        // patient can't initiate booking
    }
    
    try{

        let serviceId = req.user.maindata.id;
        let servicetype = req.user.type;
        let data = booking.newBookings(serviceId,servicetype,req.body.id,true);

        
    }
    catch(err){

    }
}

