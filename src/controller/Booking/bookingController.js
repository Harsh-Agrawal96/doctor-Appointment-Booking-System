
import * as booking from "../../services/bookingServices.js";



let intiBooking = async ( req,res ) => {

    try{

        let data = await booking.createbooking(req.user.maindata.id, req.body );

        return res.redirect("/",{
            error : req.flash()
        });
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
        let data = await booking.startprogress(consultId,consulttype,req.body);

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
        let data = await booking.requestforConform(consultId,consulttype,req.body);

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let deniedResponse = async ( req,res ) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;

        if( req.body.selection == 1 ){
            let data = await booking.startprogress(patientId,patienttype,req.body);
        }
        if( req.body.selection == 2 ){
            let data = await booking.requestforConform(patientId,patienttype,req.body);
        }else{
            console.log("User Error");
            return res.redirect("/");
        }

        // profile page
        return res.redirect("/");
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let patientResponse = async ( req,res ) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = await booking.CompleteBooking(patientId,patienttype,req.body);

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
    deniedResponse,
    patientResponse,

}

