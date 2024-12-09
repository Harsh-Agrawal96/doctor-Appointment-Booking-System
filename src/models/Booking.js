

export function Bookingfun( sequelize, DataTypes ) {

    const Booking = sequelize.define('bookings', {

      // Model attributes are defined here

      status : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      dateofStart : {
        type : DataTypes.DATE,
        allowNull : false
      },
      dateofappointment : {
        type : DataTypes.DATE,
        allowNull : false
      },
      dateofComform : {
        type : DataTypes.DATE,
        allowNull : false
      },
      dateofDecline : {
        type : DataTypes.DATE,
        allowNull : false
      },
      datetoconform : {
        type : DataTypes.DATE,
        allowNull : false
      },
      patientId : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      patientName : {
        type : DataTypes.STRING,
        allowNull : false
      },
      consultantId : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      consultantName : {
        type : DataTypes.STRING,
        allowNull : false
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
        type : DataTypes.STRING,
        allowNull : false
      },
      preferredConsultdate : {
        type : DataTypes.STRING,
        allowNull : false
      },
      bookingtype : {
        type : DataTypes.INTEGER,
        allowNull : false
      }


    }, {

      // Other model options go here
      tableName: 'allBooking'
    });
    
    // `sequelize.define` also returns the model
    console.log(Booking === sequelize.models.bookings); // true

    return Booking;
    
    
    }