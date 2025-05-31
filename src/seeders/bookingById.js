import { faker } from "@faker-js/faker";
import Patient from "../models/patient.js";
import Doctor from "../models/doctor.js";
import Clinic from "../models/clinic.js";
import Booking from "../models/Booking.js";
import { generateBookings, generateDates, getRandomElement } from "./booking.js";


const generateBookingDataByPatientId = async (patientId, count = 10) => {
    const patient = await Patient.findOne({ _id: patientId });

    await generateBookings(patient, count);
}

const generateBookingByDoctorId = async (doctorId, count) => {
    const doctor = await Doctor.findOne({ _id: doctorId });
    const patients = await Patient.find();

    if (!patients.length) {
        console.error('Required collections (patients) are empty.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const patient = getRandomElement(patients);
        const consultantType = 2;
        const consultant = doctor;
        const bookingType = 1;

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

    console.log(`${count} bookings added by doctor id`);
}

const generateBookingByClinicId = async (clinicId, count) => {
    const clinic = await Clinic.findOne({ _id: clinicId });
    const patients = await Patient.find();

    if (!patients.length) {
        console.error('Required collections (patients) are empty.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const patient = getRandomElement(patients);
        const consultantType = 3;
        const consultant = clinic;
        const bookingType = faker.helpers.arrayElement([1, 2]);

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

    console.log(`${count} bookings added by clinic id`);
}


export {
    generateBookingDataByPatientId,
    generateBookingByClinicId,
    generateBookingByDoctorId
}