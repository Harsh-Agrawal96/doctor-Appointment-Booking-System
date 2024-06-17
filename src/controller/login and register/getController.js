
let getHOMepage = (req,res) => {

    return res.render( "homePage.ejs" );
}

let getLoginPage = ( req,res ) => {

    return res.render( "login/login.ejs" );
};

let getRegisterPage = ( req,res ) => {

    return res.render( "register/register.ejs" );
};

let getclinicLoginPage = ( req,res ) => {

    return res.render( "login/cliniLogin.ejs" );
};

let getclinicRegisPage = ( req,res ) => {

    return res.render( "register/clinicRegister.ejs" );
};


export {

    getLoginPage,
    getRegisterPage,
    getclinicLoginPage,
    getclinicRegisPage,
    getHOMepage,
    
}