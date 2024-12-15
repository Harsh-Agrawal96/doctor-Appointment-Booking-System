
let forstart = (req,res, next ) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type != 1 ){
            req.flash("msg", [
                "Please login as patient to create booking"
            ])
            return res.redirect("/");
        }
        next();
    }
    catch(err){
        res.redirect("/login");
    }

};

let forprogress = (req,res,next) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type == 1 ){
            req.flash("error", [
                "something went wrong",
                "Error 404"
            ])
            return res.redirect("/");
        }
        next();
    }
    catch(err){
        res.redirect("/login");
    }
    
};

let forcomformed = ( req,res,next) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type == 1 ){
            req.flash("error", [
                "something went wrong",
                "Error 404"
            ])
            return res.redirect("/");
        }
        next();
    }
    catch(err){
        res.redirect("/login");
    }

};

let forDeniedResponse = ( req,res,next ) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type == 1 ){
            req.flash("error", [
                "something went wrong",
                "Error 404"
            ])
            return res.redirect("/");
        }
        next();
    }
    catch(err){
        res.redirect("/login");
    }

};

let patientResponse = (req,res,next ) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type != 1 ){
            req.flash("error", [
                "something went wrong",
                "Error 404"
            ])
            return res.redirect("/");
        }
        next();
    }
    catch(err){
        res.redirect("/login");
    }

};

export {

    forstart,
    forprogress,
    forcomformed,
    forDeniedResponse,
    patientResponse

}