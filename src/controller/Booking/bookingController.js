
import * as booking from "../../services/bookingServices.js";

let intiBooking = () => {

    try{

        let data = booking.createbooking();

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }

};

let startProgress = async ( req,res) => {
    
    try{

        let consultId = req.user.maindata.id;
        let consulttype = req.user.type;
        let data = booking.newBookings(consultId,consulttype,req.body);

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let serviceforConform = async ( req,res ) => {

    try{

        let consultId = req.user.maindata.id;
        let consulttype = req.user.type;
        let data = booking.requestforConform(consultId,consulttype,req.body);

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let patientconform = async ( req,res ) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = booking.CompleteBooking(patientId,patienttype,req.body,1);

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let patientdenied = async ( req,res) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = booking.CompleteBooking(patientId,patienttype,req.body,2);

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

export {

    intiBooking,
    startProgress,
    serviceforConform,
    patientconform,
    patientdenied,

}

