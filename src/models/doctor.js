export function doctorfun( sequelize, DataTypes ) {

    const Doctor = sequelize.define('doctor', {
      // Model attributes are defined here
      fullName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
    }, {
      // Other model options go here
      tableName: 'doctors'
    });
    
    // `sequelize.define` also returns the model
    console.log(Doctor === sequelize.models.doctor); // true

    return Doctor;
    
    }