
let forstart = (req,res ) => {

    if( req.user.type != 1 ){
        req.redirect("/");
    }
    next();

};

let forprogress = (req,res) => {

    if( req.user.type == 1 ){
        req.redirect("/");
    }
    next();
    
};

let forcomformed = ( req,res) => {

    if( req.user.type == 1 ){
        req.redirect("/");
    }
    next();

};

let fordenied = (req,res ) => {

    if( req.user.type != 1 ){
        req.redirect("/");
    }
    next();

};

let conform = (req,res ) => {
    
    if( req.user.type != 1 ){
        req.redirect("/");
    }
    next();

};

export {

    forstart,
    forprogress,
    forcomformed,
    fordenied,
    conform

}