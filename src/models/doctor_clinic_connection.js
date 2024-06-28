
export function doctor_clinicfun( sequelize, DataTypes ) {

    const connection = sequelize.define('doctor_clinics', {

      // Model attributes are defined here

      clinicId : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      doctorId : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      workingDays : {
        type : DataTypes.STRING,
        allowNull : false
      },
      workingTime : {
        type : DataTypes.STRING,
        allowNull : false
      }


    }, {

      // Other model options go here
      tableName: 'connectionDoctorClinic'
    });
    
    // `sequelize.define` also returns the model
    console.log(connection === sequelize.models.doctor_clinics); // true

    return connection;
    
    
}