
import dotenv from "dotenv";

import { DataTypes, Sequelize, Model } from "sequelize";

dotenv.config();

const DB_name = process.env.DB_NAME;
const DB_username = process.env.DB_usernamE;
const DB_password = process.env.DB_PASSWORD;
const DB_host = process.env.DB_HOST;

const sequelize = new Sequelize(DB_name, DB_username, DB_password, {
  host: DB_host,
  logging:false,
  dialect: 'mysql'
});

// let connectDatabase = async () => {

    try {
        sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

// }

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

import { alluserfun } from "./alluser.js";
db.users = alluserfun(sequelize,DataTypes);
import { patientfun } from "./patient.js";
db.patient = patientfun(sequelize,DataTypes);
import { doctorfun } from "./doctor.js";
db.doctor = doctorfun(sequelize,DataTypes);
import { pendingClinicfun } from "./pending_clinicRequest.js";
db.pendingclinic = pendingClinicfun(sequelize,DataTypes);
import { Clinicfun } from "./clinic.js";
db.clinic = Clinicfun(sequelize,DataTypes);
import { Bookingfun } from "./Booking.js";
db.allbooking = Bookingfun(sequelize,DataTypes);

db.sequelize.sync({ alter : true });

export {
    db,
}
