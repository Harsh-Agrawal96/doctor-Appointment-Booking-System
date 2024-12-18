
import * as booking from "../../services/bookingServices.js";
import { serverErrorController as serverErr, userErrorController as userErr } from "../../utils/errorMsg.js";


let intiBooking = async ( req,res ) => {

    try{

        let data = await booking.createbooking(req.user.maindata.id, req.body );

        req.flash( "success", data);
        return res.redirect("/");
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
        req.flash( "error", serverErr)

        return res.redirect("/");
    }

};

let startProgress = async ( req,res) => {
    
    try{

        let consultId = req.user.maindata.id;
        let consulttype = req.user.type;
        let data = await booking.startprogress(consultId,consulttype,req.body);

        req.flash( "success", data);
        return res.redirect("/profile/edit/");
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
        req.flash( "error", serverErr)
        
        return res.redirect("/");
    }
};

let serviceforConform = async ( req,res ) => {

    try{

        let consultId = req.user.maindata.id;
        let consulttype = req.user.type;

        let data = await booking.requestforConform(consultId,consulttype,req.body);

        req.flash( "success", data);
        return res.redirect("/profile/edit/");
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
        req.flash( "error", serverErr)
        
        return res.redirect("/");
    }
};

let deniedResponse = async ( req,res ) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = undefined;

        if( req.body.selection == 1 ){
            data = await booking.startprogress(patientId,patienttype,req.body);
        }
        if( req.body.selection == 2 ){
            data = await booking.requestforConform(patientId,patienttype,req.body);
        }else{
            req.flash( "error", userErr)
            return res.redirect("/");
        }

        req.flash( "success", data);
        return res.redirect("/profile/edit/");
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
        req.flash( "error", serverErr)
        
        return res.redirect("/");
    }
};

let patientResponse = async ( req,res ) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = await booking.CompleteBooking(patientId,patienttype,req.body);

        req.flash( "success", data);
        return res.redirect("/profile/edit/");
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
        req.flash( "error", serverErr)
        
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

