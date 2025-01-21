
import corsConfigure from "./corsConfig.js";
import connectDB from "./connectDB.js";
import flashConfigure from "./flash.js";
import passportConfigure from "./passport.js";
import sessionConfigure from "./sessionCookie.js";
import configViewEngine from "./viewEngine.js";


let allWebCongifuration = (app) => {

    corsConfigure(app);
    connectDB(app);
    configViewEngine(app);
    sessionConfigure(app);
    flashConfigure(app);
    passportConfigure(app);

}


export default allWebCongifuration;