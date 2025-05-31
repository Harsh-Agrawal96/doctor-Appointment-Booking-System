import { faker } from "@faker-js/faker";
import Clinic from "../models/clinic.js";
import Doctor from "../models/doctor.js";
import { generateDoctorClinicConnectionFunc, generateDoctorClinicRequestFunc } from "./clinicAddDoctor.js";


const generateDoctorClinicConnectDataByDoctorId = async (doctorId, count = 10) => {
    let createdConnectionCount = 0;

    const clinics = await Clinic.find();
    const doctor = await Doctor.findOne({ _id: doctorId });
    if( !doctor ) return;

    for (let i = 0; i < count; i++) {
        const clinic = faker.helpers.arrayElement(clinics);

        const response = await generateDoctorClinicConnectionFunc(clinic, doctor);
        if( response ) createdConnectionCount++; 
    }

    console.log(`${createdConnectionCount} new Connection created.`);
}

const generateDoctorClinicConnectDataByClinicId = async (clinicId, count = 10) => {
    let createdConnectionCount = 0;

    const clinic = await Clinic.findOne({ _id: clinicId });
    const doctors = await Doctor.find();
    if( !clinic ) return;

    for (let i = 0; i < count; i++) {
        const doctor = faker.helpers.arrayElement(doctors);

        const response = await generateDoctorClinicConnectionFunc(clinic, doctor);
        if( response ) createdConnectionCount++;
    }

    console.log(`${createdConnectionCount} new Connection created.`);
}

const generateDoctorClinicRequestDataByDoctorid = async (doctorId, count = 10) => {
    let createdRequestCount = 0;

    const clinics = await Clinic.find();
    const doctor = await Doctor.findOne({ _id: doctorId });
    if( !doctor ) return;

    for (let i = 0; i < count; i++) {
        const clinic = faker.helpers.arrayElement(clinics);
        
        const repsonse = await generateDoctorClinicRequestFunc(clinic, doctor);
        if( repsonse ) createdRequestCount++;
    }

    console.log(`${createdRequestCount} new Request created.`);
}

const generateDoctorClinicRequestDataByClinicId = async (clinicId, count = 10) => {
    let createdRequestCount = 0;

    const clinic = await Clinic.findOne({ _id: clinicId });
    const doctors = await Doctor.find();
    if( !clinic ) return;

    for (let i = 0; i < count; i++) {
        const doctor = faker.helpers.arrayElement(doctors);
        
        const repsonse = await generateDoctorClinicRequestFunc(clinic, doctor);
        if( repsonse ) createdRequestCount++;
    }

    console.log(`${createdRequestCount} new Request created.`);
}


export {
    generateDoctorClinicConnectDataByClinicId,
    generateDoctorClinicConnectDataByDoctorId,
    generateDoctorClinicRequestDataByClinicId,
    generateDoctorClinicRequestDataByDoctorid
}
