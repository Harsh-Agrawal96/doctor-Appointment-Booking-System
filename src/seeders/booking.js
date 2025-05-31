import { faker } from "@faker-js/faker";
import Patient from "../models/patient.js";
import Doctor from "../models/doctor.js";
import Clinic from "../models/clinic.js";
import Booking from "../models/Booking.js";


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDates() {
    const now = faker.date.past();
    const appointmentDate = faker.date.future();
    const confirmDate = faker.date.soon(2, appointmentDate);
    const declineDate = faker.date.soon(1, appointmentDate);
    const toConfirmDate = faker.date.soon(3, now);

    return { now, appointmentDate, confirmDate, declineDate, toConfirmDate }
}

const generateBookingData = async (count = 10) => {
    const patients = await Patient.find();
    const patient = getRandomElement(patients);

    await generateBookings(patient, count);
}

const generateBookings = async (patient, count) => {
    const doctors = await Doctor.find();
    const clinics = await Clinic.find();

    if (!doctors.length || !clinics.length) {
        console.error('Required collections (doctors, clinics, patients) are empty.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const consultantType = faker.helpers.arrayElement([2, 3]);
        const consultant = consultantType === 2 ? getRandomElement(doctors) : getRandomElement(clinics);
        const bookingType = consultantType === 2 ? 1 : faker.helpers.arrayElement([1, 2])

        const { now, appointmentDate, confirmDate, declineDate, toConfirmDate } = generateDates();

        const booking = new Booking({
            status: faker.number.int({ min: 1, max: 5 }),
            dateofStart: now,
            dateofappointment: appointmentDate,
            dateofComform: confirmDate,
            dateofDecline: declineDate,
            datetoconform: toConfirmDate,
            patientId: patient._id.toString(),
            patientName: patient.fullName,
            consultantId: consultant._id.toString(),
            consultantName: consultant.fullName,
            consultantType: consultantType,
            symtom: faker.lorem.sentence(),
            consultantMessage: faker.lorem.sentence(),
            patientMessage: faker.lorem.sentence(),
            consultDate: faker.lorem.sentence(),
            preferredConsultdate: faker.lorem.sentence(),
            bookingType: bookingType,
        });

        await booking.save();
    }

    console.log(`${count} bookings added.`);
}


export { generateBookings, generateBookingData, generateDates, getRandomElement }