export function Bookingfun( sequelize, DataTypes ) {

    const Booking = sequelize.define('bookings', {

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
      consultantId : {
        type : DataTypes.INTEGER,
        default : false
      },
      consultanttype : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      symtom : {
        type : DataTypes.STRING,
        allowNull : false
      },
      consultantMeassage : {
        type : DataTypes.STRING,
        allowNull : false
      },
      patientMeassage : {
        type : DataTypes.STRING,
        allowNull : false
      },
      consultDate : {
        type : DataTypes.DATE,
        default : false
      },
      preferredConsultdate : {
        type : DataTypes.DATE,
        default : false
      }


    }, {

      // Other model options go here
      tableName: 'allBooking'
    });
    
    // `sequelize.define` also returns the model
    console.log(Booking === sequelize.models.bookings); // true

    return Booking;
    
    
    }