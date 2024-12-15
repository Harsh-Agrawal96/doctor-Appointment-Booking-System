
import * as homework from "../services/homeServices.js";
import { serverErrorController as serverErr } from "../utils/errorMsg.js";


let gethomepage = async ( req,res ) => {

    res.render("home pages/home.ejs");
}

let getdoctorPage = async ( req,res ) => {

    try{
        let doctors = await homework.findtopdoctor();

        res.render("home pages/findDoctor.ejs",{
            data : doctors
        });
    }
    catch(err){
        req.flash( "error", serverErr);
        res.redirect("/");
    }
}


export {
    gethomepage,
    getdoctorPage
}
