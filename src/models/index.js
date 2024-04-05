// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs.readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js'
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;




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

import { userfun } from "./user.js";
db.user = userfun(sequelize,DataTypes);
import { doctorfun } from "./doctor.js";
db.doctor = doctorfun(sequelize,DataTypes);

db.sequelize.sync({force:false});

export {
    db,
}
