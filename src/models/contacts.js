

export function contactfun( sequelize, DataTypes ) {

    const contact = sequelize.define('allcontact', {
    
      // Model attributes are defined here
    
      patinetId: {
        type: DataTypes.INTEGER,
        allowNull : false
      },
      patinetemail: {
        type: DataTypes.STRING,
        allowNull : false
      },
      message: {
        type: DataTypes.STRING,
        allowNull : false
      },
      date: {
        type: DataTypes.DATE,
        allowNull : false
      }
    
    
    }, {
    
      // Other model options go here
      tableName: 'contacts'
    });
    
    // `sequelize.define` also returns the model
    console.log(contact === sequelize.models.allcontact); // true
    
    return contact;
    
    }
    