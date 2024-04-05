
import doten from "dotenv";
import express from "express";
import { configViewEngine }  from "./config/viewEngine.js";
import { initAllWebRoutes } from "./routes/web.js";
import { db } from "./models/index.js";

doten.config();

let app = express();
let port = process.env.PORT || 8080;

// config view engine
configViewEngine(app);

// init all routes
initAllWebRoutes(app);

app.listen( port, () => {
    console.log( `server is started at port ${port}` );
});