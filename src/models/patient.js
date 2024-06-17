
export function patientfun( sequelize, DataTypes ) {

const Patient = sequelize.define('Patients', {

  // Model attributes are defined here

  fullName: {
    type: DataTypes.STRING,
    allowNull : false
  },
  email: {
    type: DataTypes.STRING,
    allowNull : false
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
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
  }


}, {

  // Other model options go here
  tableName: 'patients'
});

// `sequelize.define` also returns the model
console.log(Patient === sequelize.models.Patients); // true

return Patient;

}
