
import * as requestCrud from "../services/clinicAddDrServices.js";
import { userErrorController as userErr, serverErrorController as serverErr } from "../utils/errorMsg.js";


let newRequest = async ( req,res ) => {

    try{
        if( req.user.type == 3 ){

            let data = await requestCrud.createRequest( req.user.maindata.id,req.body );
    
            req.flash( "success", data);
            return res.redirect("/profile/edit/");
        }
        else{
            req.flash( "error", userErr)
            return res.redirect("/");
        }
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
            req.flash( "error", serverErr)
        
        return res.redirect("/");
    }
}

let updateRequest = async ( req,res ) => {

    try{
        if( req.user.type == 3 ){

            let data = await requestCrud.clinicUpdate( req.user.maindata.id,req.body );
    
            req.flash( "success", data);
            return res.redirect("/profile/edit/");
        }
        else{
            req.flash( "error", userErr)
            return res.redirect("/");
        }
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
            req.flash( "error", serverErr)
        
        return res.redirect("/");
    }
}

let doctorResponse = async ( req,res ) => {

    try{
        if( req.user.type == 2 ){

            let data = await requestCrud.doctorResponce( req.user.maindata.id,req.body );
    
            req.flash( "success", data);
            return res.redirect("/profile/edit/");
        }
        else{
            req.flash( "error", userErr)
            return res.redirect("/");
        }
    }
    catch(err){
        if( err.check === undefined || err.check != "1" )
            req.flash("error", err.msg);
        else 
            req.flash( "error", serverErr)
        
        return res.redirect("/");
    }
}


export {

    newRequest,
    updateRequest,
    doctorResponse

}