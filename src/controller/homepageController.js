
import * as homework from "../services/homeServices.js";
import { serverErrorController as serverErr, tryAgainError as tryErr } from "../utils/errorMsg.js";
import { postLogout } from "./checklogin.js";
import { clinicWork as sergeries, doctorPageList as commonProblem,diseaseName as disease  } from "../utils/homeData.js";


let gethomepage = async ( req,res ) => {

    try{
        let fetchedClinicId = [];
        let clinics = await homework.findtopclinic(9,fetchedClinicId);

        fetchedClinicId = [...fetchedClinicId, ...clinics.map(doc => doc._id)];
        console.log(clinics);

        let islog = false;
        let Utype = -1;
        let userid = -1;
        if( req.isAuthenticated() ){
            islog = true;
            Utype = req.user.type;
            userid = req.user.maindata.id;
        }

        return res.render("home pages/home.ejs",{
            clinic : clinics,
            disease : disease,
            islog : islog,
            usertype : Utype,
            userid : userid
        });
    }
    catch(err){
        return postLogout(req,res);
    }

}

let getdoctorPage = async ( req,res ) => {

    try{
        const limit = 8;
        let fetchedDoctorId = [];
        let doctors = await homework.findtopdoctor(limit,fetchedDoctorId);

        fetchedDoctorId = [...fetchedDoctorId, ...doctors.map(doc => doc._id)];
        console.log(doctors);

        let fetchedClinicId = [];
        let clinics = await homework.findtopclinic(9,fetchedClinicId);

        fetchedClinicId = [...fetchedClinicId, ...clinics.map(doc => doc._id)];
        console.log(clinics);

        let islog = false;
        let Utype = -1;
        let userid = -1;
        if( req.isAuthenticated() ){
            islog = true;
            Utype = req.user.type;
            userid = req.user.maindata.id;
        }

        res.render("home pages/findDoctor.ejs",{
            data : doctors,
            clinic : clinics,
            sergery : sergeries,
            disease : commonProblem,
            islog : islog,
            usertype : Utype,
            userid : userid
        });
    }
    catch(err){
        console.log(err)
        req.flash( "error", serverErr);
        res.redirect("/");
    }
}


export {
    gethomepage,
    getdoctorPage
}
