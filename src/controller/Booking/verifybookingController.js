
let forstart = (req,res, next ) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type != 1 ){
            console.log(" Please login as patient to create booking ");
            return res.redirect("/", {
                error : req.flash({ "1" : "Please login as patient to create booking" }),
            });
        }
        next();
    }
    catch(err){
        console.log(err)
        res.redirect("/login");
    }

};

let forprogress = (req,res,next) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type == 1 ){
            console.log("user must be consultant for start booking!");
            return res.redirect("/" , {
                error : req.flash({"1" : "something went wrong","2" : "Error 404"})
            });
        }
        next();
    }
    catch(err){
        console.log(err)
        res.redirect("/login");
    }
    
};

let forcomformed = ( req,res,next) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type == 1 ){
            console.log("user must be consultant for initialize for allowing!");
            return res.redirect("/" , {
                error : req.flash({"1" : "something went wrong","2" : "Error 404"})
            });
        }
        next();
    }
    catch(err){
        console.log(err)
        res.redirect("/login");
    }

};

let forDeniedResponse = ( req,res,next ) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type == 1 ){
            console.log("user must be consultant for initialize for allowing!");
            return res.redirect("/" , {
                error : req.flash({"1" : "something went wrong","2" : "Error 404"})
            });
        }
        next();
    }
    catch(err){
        console.log(err)
        res.redirect("/login");
    }

};

let patientResponse = (req,res,next ) => {

    try{

        if( req.user == undefined ){
            return res.redirect("/login");
        }
        if( req.user.type != 1 ){
            console.log("user must be patient for response on booking!");
            return res.redirect("/" , {
                error : req.flash({"1" : "something went wrong","2" : "Error 404"})
            });
        }
        next();
    }
    catch(err){
        console.log(err)
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