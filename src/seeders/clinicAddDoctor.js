import { faker } from "@faker-js/faker"
import DoctorClinicConnect from "../models/doctor_clinic_connection.js";
import DoctorClinicRequest from "../models/doctor_clinic_request.js";
import Clinic from "../models/clinic.js";
import Doctor from "../models/doctor.js";
import { daysOptions, timeRanges } from "./collections/clinicAddDoctorCollection.js"


async function getRandomWorkingSchedule() {
  return {
    workingdays: faker.helpers.arrayElement(daysOptions),
    workingtime: faker.helpers.arrayElement(timeRanges),
  };
}


const generateDoctorClinicConnectData = async (count = 10) => {
    let createdConnectionCount = 0;

    const clinics = await Clinic.find();
    const doctors = await Doctor.find();

    for (let i = 0; i < count; i++) {
        const clinic = faker.helpers.arrayElement(clinics);
        const doctor = faker.helpers.arrayElement(doctors);

        const response = await generateDoctorClinicConnectionFunc(clinic, doctor);
        if( response ) createdConnectionCount++; 
    }

    console.log(`${createdConnectionCount} new Connection created.`);
}

const generateDoctorClinicRequestData = async (count = 10) => {
    let createdRequestCount = 0;

    const clinics = await Clinic.find();
    const doctors = await Doctor.find();

    for (let i = 0; i < count; i++) {
        const clinic = faker.helpers.arrayElement(clinics);
        const doctor = faker.helpers.arrayElement(doctors);
        
        const repsonse = await generateDoctorClinicRequestFunc(clinic, doctor);
        if( repsonse ) createdRequestCount++;
    }

    console.log(`${createdRequestCount} new Request created.`);
}

const generateDoctorClinicConnectionFunc = async(clinic, doctor) => {
    const exists = await DoctorClinicConnect.findOne({
        clinicId: clinic._id.toString(),
        doctorId: doctor._id.toString()
    });

    if (!exists) {
        const { workingdays, workingtime } = await getRandomWorkingSchedule();

        const newConnection = new DoctorClinicConnect({
            clinicId: clinic._id.toString(),
            doctorId: doctor._id.toString(),
            workingDays: workingdays,
            workingTime: workingtime,
        });

        await newConnection.save();
        await generateDoctorClinicCompleteRequest(
            3,
            doctor._id.toString(),
            clinic._id.toString(),
            doctor.fullName,
            clinic.fullName,
            workingdays,
            workingtime,
        );

        return true;
    } else {
        console.log(`Connection already exists: clinic=${clinic._id}, doctor=${doctor._id}`);
        return false;
    }
}

const generateDoctorClinicRequestFunc = async(clinic, doctor) => {
    const { workingdays, workingtime } = await getRandomWorkingSchedule();

    const exists = await DoctorClinicRequest.findOne({
        clinicId: clinic._id.toString(),
        doctorId: doctor._id.toString()
    });

    if (!exists) {
        const status = Math.floor(Math.random()*2) + 1;

        await generateDoctorClinicCompleteRequest(
            status,
            doctor._id.toString(),
            clinic._id.toString(),
            doctor.fullName,
            clinic.fullName,
            workingdays,
            workingtime,
        );
        return true;
    } else {
        console.log(`Request already exists: clinic=${clinic._id}, doctor=${doctor._id}`);
        return false;
    }
}

const generateDoctorClinicCompleteRequest = async (status, doctorid, clinicid, doctorName, clinicName, workingdays, workingtime, ) => {

    const newRequest = new DoctorClinicRequest({
        status: status,
        clinicId: clinicid,
        clinicName: clinicName,
        doctorId: doctorid,
        doctorName: doctorName,
        workingDays: workingdays,
        workingTime: workingtime,
        clinicMessage: faker.lorem.sentences(2),
        doctorMessage: faker.lorem.sentences(2),
    });

    await newRequest.save();
    console.log(`new request created under new connection`)
}


export {
    generateDoctorClinicConnectData,
    generateDoctorClinicRequestData,
    generateDoctorClinicConnectionFunc,
    generateDoctorClinicRequestFunc
}