

let checkLoggedIn = ( req,res, next ) => {

    if( !req.isAuthenticated() ){
        return res.redirect("/login");
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