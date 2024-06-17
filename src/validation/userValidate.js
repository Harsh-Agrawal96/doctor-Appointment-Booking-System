import { check } from "express-validator";

let validateRegister = [
    check("email", "Invalid email!").isEmail().trim(),
    check("password","Invalid password. password must contain atleast 5 character ").isLength({min:5})

];

let validateRegister2 = [
    check( "clinicEmail" , "Invalid email!" ).isEmail().trim(),
    check( "doctorEmail" , "Invalid email!" ).isEmail().trim(),
    check("password","Invalid password. password must contain atleast 5 character ").isLength({min:5})

];

export {
    validateRegister,
    validateRegister2

}

