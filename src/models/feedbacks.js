

export function feedbackfun( sequelize, DataTypes ) {

    const feedback = sequelize.define('allfeedback', {
    
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
      rating : {
        type: DataTypes.FLOAT,
        allowNull : false
      },
      date: {
        type: DataTypes.DATE,
        allowNull : false
      }
    
    
    }, {
    
      // Other model options go here
      tableName: 'feedbacks'
    });
    
    // `sequelize.define` also returns the model
    console.log( feedback === sequelize.models.allfeedback ); // true
    
    return feedback;
    
    }