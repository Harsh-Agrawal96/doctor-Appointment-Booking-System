
import * as booking from "../../services/bookingServices.js";

let initRequest = () => {


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
        let data = booking.(consultId,consulttype,req.body);

        // profile page
        return res.redirect("/");
        
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let userconform = async ( req,res ) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = booking.(patientId,patienttype,req.body);

        // profile page
        return res.redirect("/");
        
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

let userdenied = async ( req,res) => {

    try{

        let patientId = req.user.maindata.id;
        let patienttype = req.user.type;
        let data = booking.(patientId,patienttype,req.body);

        // profile page
        return res.redirect("/");
        
    }
    catch(err){
        console.log(err);
        
        return res.redirect("/");
    }
};

