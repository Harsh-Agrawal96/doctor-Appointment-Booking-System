
import express from "express";
import * as adding from "../controller/crime/unformal.js"

let route = express.Router();

let unformalRoutes = (app) => {

    route.get("/crime/clinicadd", (req,res) => {
        res.render("unformal/addclinic.ejs");
    })

    route.post("/un/addclinic", adding.addclinic )

    return app.use("/",route)
};

export { unformalRoutes }