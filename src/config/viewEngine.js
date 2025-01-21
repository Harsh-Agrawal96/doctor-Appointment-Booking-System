import express from "express";
import bodyParser from "body-parser";


// config( initialize ) view engine for nodejs application
function configViewEngine (app) {

    app.use(express.static("./src/public"));
    app.set("view engine","ejs");
    app.set("views","./src/views");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
};

export default configViewEngine;
