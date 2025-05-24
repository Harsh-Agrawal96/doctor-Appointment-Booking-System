import { serverErrorController } from "../utils/errorMsg.js";


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

    req.logout(err => {
        if(err){
            req.flash("error", serverErr);
            return res.redirect("/");
        }
        req.session.destroy(err => {
            if(err)
                return res.redirect("/");
            res.clearCookie('connect.sid');
            res.redirect('/login');
        });
    });
};


export {
    checkLoggedIn,
    checkLoggedOut,
    postLogout,
}