export function Clinicfun( sequelize, DataTypes ) {

    const Clinic = sequelize.define('diffClinic', {

      // Model attributes are defined here

      fullName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      nickName : {
        type : DataTypes.STRING,
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
      securityKey : {
        type: DataTypes.INTEGER,
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
      establishedDate : {
        type: DataTypes.DATEONLY,
        allowNull : false
      }

    }, {

      // Other model options go here
      tableName: 'clinics'
    });
    
    // `sequelize.define` also returns the model
    console.log(Clinic === sequelize.models.diffClinic); // true

    return Clinic;
    
    
    }