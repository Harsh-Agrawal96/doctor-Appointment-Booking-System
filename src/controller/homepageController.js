// import * as services from "../services/addUser.js";
// import { validationResult } from "express-validator";

// let getHomepagefun = (req,res) => {
//     return res.render("homePage.ejs");
// };

// let getnewuserPage = (req,res) => {
//     let form = {
//         first : req.body.firstname,
//         last : req.body.lastname,
//         email : req.body.email,
//         password : req.body.password
//     }
//     return res.render("register.ejs",{
//         errors : req.flash('errors'),
//         form : form
//     });
// };

// let createNewUser = async (req,res) => {
    
//     let user = req.body;
//     await services.addNewUser(user);
//     return res.redirect("/");

// };

// let getRegisterPage = (req,res) => {

//     let form = {
//         first : req.body.firstname,
//         last : req.body.lastname,
//         email : req.body.email,
//         password : req.body.password
//     }
//     return res.render("register.ejs",{
//         errors : req.flash('errors'),
//         form : form
//     });
// };

// let getLoginPage = (req,res) => {

//     let form = {
//         first : req.body.firstname,
//         last : req.body.lastname,
//         email : req.body.email,
//         password : req.body.password
//     }
//     return res.render("login.ejs",{
//         errors : req.flash('errors'),
//         form : form
//     });
// };  

// let handleRegister = async ( req,res) => {

//     // keep user's input fields
//     let form = {
//         first : req.body.firstname,
//         last : req.body.lastname,
//         email : req.body.email,
//         password : req.body.password
//     }

//     // validate input fields
//     let errorArr = [];// create array to save validation error
//     let validationError = validationResult(req);
//     if( !validationError.isEmpty() ){
//         let errors = Object.values( validationError.mapped() );
//         errors.forEach( ( items ) => {
//             errorArr.push(items.msg);
//         })
//         req.flash("errors",errorArr);
//         return res.render("register.ejs",{
//             errors : req.flash('errors'),
//             form : form
//         });
//     }

//     // create object of new user for pass in build funtion of sequelize ( for now we are not doing it )
//     try{
//         console.log("hello")
//         let user = req.body;

//         await services.addNewUser(user);
        
//         return res.redirect("/");


//     }catch(err){
//         req.flash("errors",err);
//         return res.render("register.ejs",{
//             errors : req.flash('errors'),
//             form : form
//         });
//     }

// };

// // main work 



// export {
//     getHomepagefun as getHomepage,
//     getnewuserPage,
//     createNewUser,
//     getRegisterPage,
//     getLoginPage,
//     handleRegister,
// }


import * as homework from "../services/homeServices.js";

let gethomepage = async ( req,res ) => {

    res.render("home pages/home.ejs");
}

let getdoctorPage = async ( req,res ) => {

    let doctors = await homework.findtopdoctor();

    res.render("home pages/findDoctor.ejs",{
        data : doctors
    });

}


export {
    gethomepage,
    getdoctorPage
}
