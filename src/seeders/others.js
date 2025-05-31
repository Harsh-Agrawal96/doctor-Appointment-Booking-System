import { faker } from '@faker-js/faker';
import Feedback from '../models/feedbacks.js';
import Contact from '../models/contacts.js';
import PendingClinic from '../models/pending_clinicRequest.js';
import Patient from '../models/patient.js';
import Doctor from '../models/doctor.js';


function getRandomDate() {
  return faker.date.between({ from: '2024-01-01', to: '2025-05-30' });
}


const addFeedbacks = async (count = 10) => {
    const patients = await Patient.find();
    if (patients.length === 0) return;

    for( let i = 0;i<count;i++ ){
        const patient = faker.helpers.arrayElement(patients);

        const feedback = new Feedback({
            patinetId: patient._id.toString(),
            patinetemail: patient.email,
            message: faker.lorem.sentences(3),
            rating: parseFloat(faker.number.float({ min: 1, max: 5 }).toFixed(2)),
            date: getRandomDate(),
        })

        await feedback.save();
    }

    console.log(`${count} new feedbacks added`);
};

const addContacts = async (count = 10) => {
    const patients = await Patient.find();
    if (patients.length === 0) return;

    for( let i = 0;i<count;i++ ){
        const patient = faker.helpers.arrayElement(patients);

        const contact = new Contact({
            patinetId: patient._id.toString(),
            patientemail: patient.email,
            message: faker.lorem.paragraphs(1),
            date: getRandomDate(),
        })

        await contact.save();
    }

    console.log(`${count} new contacts added`);
};

const addPendingClinics = async (count = 10) => {
    const doctors = await Doctor.find();
    if (!doctors) return;

    for( let i = 0;i<count;i++ ){
        const doctor = faker.helpers.arrayElement(doctors);
        const mail = "CST" + faker.internet.email();

        const pendingClinic = new PendingClinic({
            doctorEmail: doctor.email,
            doctorName: doctor.fullName,
            clinicName: faker.company.name(),
            clinicEmail: mail,
        })

        await pendingClinic.save();
    }

    console.log(`${count} pendingClinic added`);
};


export{
    addContacts,
    addFeedbacks,
    addPendingClinics
}
