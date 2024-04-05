// 'use strict';

// const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password : DataTypes.STRING,
//     address : DataTypes.STRING,
//     createdAt:DataTypes.DATE,
//     updatedAt:DataTypes.DATE,
//     deletedAt:DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };



// import { DataTypes } from "sequelize";
// import { sequelize } from "./index.js";

export function userfun( sequelize, DataTypes ) {

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName: 'users'
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

// export {
//   User,
// }

return User;

}
