
import Clinic from "../../models/clinic.js";
import User from "../../models/alluser.js";

let addclinic = async ( req,res ) => {

    const dataobj = req.body;

    const addcli = new Clinic({
        fullName : dataobj.fname,
        nickName : dataobj.nname,
        email : dataobj.mail,
        password : dataobj.pass, 
        securityKey : dataobj.key,
        Country : "",
        State : "",
        city : "",
        address : "",
        facility : "lmn",
        mainFacility : "kl.m",
        establishedDate : ''
    })
    await addcli.save();

    const alladd = new User({
        usertype : 3,
        useremail : dataobj.mail
    })
    await alladd.save();



    return res.redirect("/");
}

export {
    addclinic
}