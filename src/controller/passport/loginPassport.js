import passport from "passport";
import passportLocal from "passport-local";
import * as passportmanage from '../../services/passportManageService.js';
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
                    let val = JSON.stringify(user);
                    if( val.length <= 2 ){
                        return done(null, false, req.flash("errors", "user not found! "));
                    }
                    let message = await passportmanage.comparePassword( password, user);
                    if( message == true ){
                        return done(null, user, null);
                    }else{
                        return done( null, false, req.flash("errors", message));
                    }
                })
                .catch( error => {
                    return done(null, false, error);
                });
            }catch(err){
                return done(null, false, err)
            }
        }
    ))

}


passport.serializeUser( (user,done) => {

    return done(null, user[0].dataValues.id );
});

passport.deserializeUser( async (id, done ) => {

    console.log("deserealize")
    console.log(id);

    
    passportmanage.findUserbyid( id ).then( async (user) => {
        console.log(user);
        let userData = await passportmanage.findRealUser( user[0].dataValues.usertype,user[0].dataValues.useremail );
        let data = { "maindata" : userData, "type" : user[0].dataValues.usertype }
        console.log(data);
        return done( null , data);
    }).catch( error => {
        return done( error, null);
    } )
    
});

export {
    passportOfUsers
}