
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

app.listen( port, () => {
    console.log( `server is started at port ${port}` );
});