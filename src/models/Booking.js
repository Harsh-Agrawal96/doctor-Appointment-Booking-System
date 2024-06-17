export function Bookingfun( sequelize, DataTypes ) {

    const Booking = sequelize.define('bookings', {

      // Model attributes are defined here

      consultanttype : {
        type : DataTypes.STRING,
        allowNull : false
      },
      consultantid : {
        type : DataTypes.INTEGER,
        allowNull : false
      },
      symtom : {
        type : DataTypes.STRING,
        allowNull : false
      },
      patientId : {
        type : DataTypes.INTEGER,
        allowNull: false
      },
      preferredConsultant : {
        type : DataTypes.STRING,
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