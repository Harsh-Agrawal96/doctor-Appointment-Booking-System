
import passport from "passport";


let passportConfigure = (app) => {

    // config passport middleware
    app.use(passport.initialize());
    app.use(passport.session());

}


export default passportConfigure;