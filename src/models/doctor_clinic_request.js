
export function doctor_clinicRequestfun( sequelize, DataTypes ) {

    const requests = sequelize.define('doctor_clinic', {

      // Model attributes are defined here

      status : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      clinicId : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      clinicName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      doctorId : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      doctorName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      workingDays : {
        type : DataTypes.STRING,
        allowNull : false
      },
      workingTime : {
        type : DataTypes.STRING,
        allowNull : false
      },
      clinicMessage : {
        type : DataTypes.STRING,
        allowNull : false
      },
      doctorMessage : {
        type : DataTypes.STRING,
        allowNull : false
      }


    }, {

      // Other model options go here
      tableName: 'doctorClinicRequest'
    });
    
    // `sequelize.define` also returns the model
    console.log(requests === sequelize.models.doctor_clinic); // true

    return requests;
    
    
}