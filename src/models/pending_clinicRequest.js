export function pendingClinicfun( sequelize, DataTypes ) {

    const pendingClinic = sequelize.define('pendingClinicReq', {

      // Model attributes are defined here

      doctorEmail : {
        type : DataTypes.STRING,
        allowNull : false
      },
      doctorName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      clinicName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      clinicEmail : {
        type : DataTypes.STRING,
        allowNull : false
      }

    }, {

      // Other model options go here
      tableName: 'newClinicRequest'
    });
    
    // `sequelize.define` also returns the model
    console.log(pendingClinic === sequelize.models.pendingClinicReq); // true

    return pendingClinic;
    
    }