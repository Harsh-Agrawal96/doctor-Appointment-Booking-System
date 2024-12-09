
import * as requestCrud from "../services/clinicAddDrServices.js";


let newRequest = async ( req,res ) => {

    try{

        if( req.user.type == 3 ){
            console.log(req.body);
    
            // send clinic and doctorid two check request
            await requestCrud.createRequest( req.user.maindata.id,req.body );
    
            return res.redirect("/");
        }
        else{
    
            return res.redirect("/");
        }
    }
    catch(err){
        console.log(err)
        console.log("fail");
        return res.redirect("/")
    }
}

let updateRequest = async ( req,res ) => {

    try{

        if( req.user.type == 3 ){

            await requestCrud.clinicUpdate( req.user.maindata.id,req.body );
    
            return res.redirect("/");
        }
        else{
    
            return res.redirect("/");
        }
    }
    catch(err){
        console.log(err)
        return res.redirect("/");
    }
}

let doctorResponse = async ( req,res ) => {

    try{

        if( req.user.type == 2 ){

            // update request
            await requestCrud.doctorResponce( req.user.maindata.id,req.body );
    
            return res.redirect("/");
        }
        else{
    
            return res.redirect("/");
        }
    }
    catch(err){
        console.log(err)
        return res.redirect("/");
    }
}


export {

    newRequest,
    updateRequest,
    doctorResponse

}