
export function sergeriesBookfun( sequelize, DataTypes ) {

    const Booking2 = sequelize.define('book2', {
    
      // Model attributes are defined here
    
      isnew : {
        type : DataTypes.BOOLEAN,
        default : false
      },
      isInProgress : {
        type : DataTypes.BOOLEAN,
        default : false
      },
      iswaitforConform : {
        type : DataTypes.BOOLEAN,
        default : false
      },
      isRejected : {
        type : DataTypes.BOOLEAN,
        default : false
      },
      isConformed : {
        type : DataTypes.BOOLEAN,
        default : false
      },
      dateofStart : {
        type : DataTypes.DATE,
        default : false
      },
      dateofappointment : {
        type : DataTypes.DATE,
        default : false
      },
      dateofComform : {
        type : DataTypes.DATE,
        default : false
      },
      dateofDecline : {
        type : DataTypes.DATE,
        default : false
      },
      datetoconform : {
        type : DataTypes.DATE,
        default : false
      },
      patientId : {
        type : DataTypes.INTEGER,
        default : false
      },
      doctorId : {
        type : DataTypes.INTEGER,
        default : false
      }
    
    
    }, {
    
      // Other model options go here
      tableName: 'sergeriesBooking'
    });
    
    // `sequelize.define` also returns the model
    console.log(Booking2 === sequelize.models.book2); // true
    
    return Booking2;
    
    }
