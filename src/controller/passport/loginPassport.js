import passport from "passport";
import passportLocal from "passport-local";
import * as passportmanage from '../../services/passportManageService.js';
import { tryAgainError as tryErr } from "../../utils/errorMsg.js";
import { configDotenv } from "dotenv";

let localStrategy = passportLocal.Strategy;

let passportOfUsers = () => {

    passport.use( "local" , new localStrategy(
        {
            usernameField : "email",
            passwordField : "password",
            passReqToCallback : true
        },
        async ( req,email, password, done) => {
            try{
                
                await passportmanage.findUserbyEmail(email)
                .then( async (user) => {
                    let message = await passportmanage.comparePassword( password, user);
                    if( message == true ){
                        return done(null, user, req.flash("success", [
                            "Login successful"
                        ]));
                    }else{
                        return done( null, false, req.flash("formError", "Email or password are Incorrect"));
                    }
                })
                .catch( error => {
                    return done(null, false, req.flash("formError", "Email or password are Incorrect"));
                });
            }catch(err){
                return done(null, false, req.flash("error", tryErr))
            }
        }
    ))

}


passport.serializeUser( (user,done) => {
    return done(null, user.id );
});

passport.deserializeUser( async (id, done ) => {
    
    passportmanage.findUserbyid( id ).then( async (user) => {
        let userData = await passportmanage.findRealUser( user.usertype,user.useremail );
        let data = { "maindata" : userData, "type" : user.usertype }
        return done( null , data);
    }).catch( error => {
        return done( error, null);
    } )
    
});

export {
    passportOfUsers
}