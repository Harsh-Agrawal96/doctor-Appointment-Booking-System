export function doctorfun( sequelize, DataTypes ) {

    const Doctor = sequelize.define('doctor', {

      // Model attributes are defined here

      fullName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      email: {
        type : DataTypes.STRING,
        allowNull : false
      },
      password: {
        type: DataTypes.STRING,
        allowNull : false
      },
      Country: {
        type: DataTypes.STRING,
        allowNull : false
      },
      State: {
        type: DataTypes.STRING,
        allowNull : false
      },
      city: {
        type: DataTypes.STRING,
        allowNull : false
      },
      address: {
        type: DataTypes.STRING,
        allowNull : false
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull : false
      },
      work : {
        type: DataTypes.STRING,
        allowNull : false
      },
      reviewPercent : {
        type: DataTypes.FLOAT,
        allowNull : false
      },
      reviewNumber : {
        type: DataTypes.INTEGER,
        allowNull : false
      },
      about : {
        type: DataTypes.STRING,
        allowNull : false
      },
      Services : {
        type: DataTypes.JSON,
        allowNull : false
      },
      specializations : {
        type: DataTypes.JSON,
        allowNull : false
      },
      awards : {
        type: DataTypes.JSON,
        allowNull : false
      },
      education : {
        type: DataTypes.JSON,
        allowNull : false
      },
      membership : {
        type: DataTypes.JSON,
        allowNull : false
      },
      experience : {
        type: DataTypes.JSON,
        allowNull : false
      },
      Registration : {
        type: DataTypes.JSON,
        allowNull : false
      }

    }, {

      // Other model options go here
      tableName: 'doctors'
    });
    
  // `sequelize.define` also returns the model
  console.log(Doctor === sequelize.models.doctor); // true

  return Doctor;
    
}