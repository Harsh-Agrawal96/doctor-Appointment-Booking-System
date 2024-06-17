

let checkLoggedIn = ( req,res, next ) => {

    if( !req.isAuthenticated() ){
        return res.redirect("/login");
    }else{
        console.log(req.user);
        console.log("ok")
    }
    next();
};

let checkLoggedOut = ( req,res, next ) => {

    if( req.isAuthenticated() ){
        return res.redirect("/");
    }
    next();
};

let postLogout = ( req,res ) => {

    req.sessoin.destroy( function(error) {
        return res.redirect("/login");
    });
};

export {
    checkLoggedIn,
    checkLoggedOut,
    postLogout,

}