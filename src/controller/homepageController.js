import * as services from "../services/addUser.js";

let getHomepagefun = (req,res) => {
    return res.render("homePage.ejs");
};

let getnewuserPage = (req,res) => {
    return res.render("register.ejs");
};

let createNewUser = async (req,res) => {
    
    let user = req.body;
    let message = await services.addNewUser(user);
    console.log(req.body);
    console.log(message);
    return res.redirect("/");

};

let getRegisterPage = (req,res) => {

    return res.render("register.ejs");
};

let getLoginPage = (req,res) => {

    return res.render("login.ejs");
};

export {
    getHomepagefun as getHomepage,
    getnewuserPage,
    createNewUser,
    getRegisterPage,
    getLoginPage,

}
