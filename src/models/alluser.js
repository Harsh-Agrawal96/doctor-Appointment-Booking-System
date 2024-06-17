
export function alluserfun( sequelize, DataTypes ) {

    const user = sequelize.define('Users', {
    
      // Model attributes are defined here
    
      usertype : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      useremail : {
        type : DataTypes.STRING,
        allowNull : false
      }
    
    
    }, {
    
      // Other model options go here
      tableName: 'allUser'
    });
    
    // `sequelize.define` also returns the model
    console.log(user === sequelize.models.Users); // true
    
    return user;
    
    }