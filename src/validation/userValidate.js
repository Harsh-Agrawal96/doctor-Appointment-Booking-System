import { body } from "express-validator";


let registerValid = [
    body('email').isEmail().withMessage('Please enter a valid email.'),

    body('password')
      .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long.')
      .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
      .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
      .matches(/\d/).withMessage('Password must contain at least one number.'),

    body('repassword')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords do not match.');
        }
        return true;
      }),
  ];

  let clinicRegisterValid = [

    body('doctorEmail').isEmail().withMessage('Please enter a valid email.'),
    body('clinicEmail').isEmail().withMessage('Please enter a valid email.'),

    body('password')
      .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long.')
      .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
      .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
      .matches(/\d/).withMessage('Password must contain at least one number.'),

  ];

  export {
    registerValid,
    clinicRegisterValid
  }

