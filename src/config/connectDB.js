import dotenv from "dotenv";

import { Sequelize } from "sequelize";

dotenv.config();

const DB_name = process.env.DB_NAME;
const DB_username = process.env.DB_usernamE;
const DB_password = process.env.DB_PASSWORD;
const DB_host = process.env.DB_HOST;

const sequelize = new Sequelize(DB_name, DB_username, DB_password, {
  host: DB_host,
  dialect: 'mysql'
});

let connectDatabase = async () => {

    try {
        await sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

export { 
    connectDatabase,
}