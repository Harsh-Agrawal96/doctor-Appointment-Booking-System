
export function appointmentBookfun( sequelize, DataTypes ) {

    const Booking1 = sequelize.define('book', {
    
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
      tableName: 'appointmentBooking'
    });
    
    // `sequelize.define` also returns the model
    console.log(Booking1 === sequelize.models.book); // true
    
    return Booking1;
    
    }
