import doten from "dotenv";
import express from "express";
import allWebCongifuration from "./config/webConfigure.js";
import { initAllWebRoutes } from "./routes/web.js";


doten.config();

let app = express();
let port = process.env.PORT || 8080;


// all configurations and middleware
allWebCongifuration(app);

// init all routes
initAllWebRoutes(app);


//patient
//683af7374bc329e8e5c4101f

//doctor
//683af8124bc329e8e5c41025

//clinic
//683afd90e32cf9538a995956



app.listen( port, () => {
    console.log( `server is started at port ${port}` );
});