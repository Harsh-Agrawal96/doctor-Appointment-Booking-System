import { faker } from '@faker-js/faker';
import Clinic from "../models/clinic.js";
import Doctor from "../models/doctor.js";
import Patient from "../models/patient.js";
import User from "../models/alluser.js";
import { locations } from "./collections/countryCollection.js";
import {
    servicesList,
    specializationsList,
    awardsList,
    educationList,
    membershipList,
    experienceList,
    registrationList
} from "./collections/doctorSpecificationCollection.js"


function getRealisticLocation() {
  const countries = Object.keys(locations);
  const country = faker.helpers.arrayElement(countries);
  const states = Object.keys(locations[country]);
  const state = faker.helpers.arrayElement(states);
  const city = faker.helpers.arrayElement(locations[country][state]);
  const address = faker.location.streetAddress({ useFullAddress: true });

  return { country, state, city, address };
}

function generatePhoneNumber() {
  const startDigit = faker.helpers.arrayElement(['5', '6', '7', '8', '9']);
  let middleDigits = faker.string.numeric(8);
  let endDigit = faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9']);

  return startDigit + middleDigits + endDigit;
}

function generateCustomParagraphs(minParagraphs = 2, maxParagraphs = 3, minWords = 30, maxWords = 40) {
    const paragraphCount = faker.number.int({ min: minParagraphs, max: maxParagraphs });
    const paragraphs = [];

    for (let i = 0; i < paragraphCount; i++) {
        const wordCount = faker.number.int({ min: minWords, max: maxWords });
        let paragraph = faker.lorem.words(wordCount);

        // Capitalize first letter and add period at the end
        paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + '.';
        paragraphs.push(paragraph);
    }

    return paragraphs.join('\n\n');
}

function getRandomSubset(arr) {
  const count = faker.number.int({ min: 0, max: 6 });
  return faker.helpers.arrayElements(arr, count);
}


const generateAllUserData = async ( type, email ) => {

    const user = new User({
        usertype: type,
        useremail: email,
    });

    await user.save();
}

const createPatients = async (count = 10) => {

  for (let i = 0; i < count; i++) {
    const { country, state, city, address } = getRealisticLocation();
    const number = generatePhoneNumber();
    const mail = 'S' + faker.internet.email();


    const patient = new Patient({
      fullName: faker.person.fullName(),
      email: mail,
      phoneNumber: number,
      password: faker.internet.password(),
      Country: country,
      State: state,
      city: city,
      address: address,
      DOB: faker.date.birthdate({ min: 18, max: 60, mode: 'age' }),
    });

    await patient.save();
    await generateAllUserData(1, mail);
  }
  console.log(`${count} patients created.`);
};

const createClinics = async (count = 10) => {
  for (let i = 0; i < count; i++) {
    const { country, state, city, address } = getRealisticLocation();
    const mail = 'C' + faker.internet.email();
    const facilityPara = generateCustomParagraphs(2, 3, 60, 70);

    const clinic = new Clinic({
      fullName: faker.company.name(),
      nickName: faker.company.buzzNoun(),
      email: mail,
      password: faker.internet.password(),
      securityKey: faker.number.int({ min: 1000, max: 9999 }),
      Country: country,
      State: state,
      city: city,
      address: address,
      facility: faker.company.catchPhrase(),
      mainFacility: facilityPara,
      appointmentFee: faker.number.int({ min: 50, max: 300 }),
      sergeryFee: faker.number.int({ min: 500, max: 3000 }),
      appointmentCount: faker.number.int({ min: 0, max: 100 }),
      sergeryCount: faker.number.int({ min: 0, max: 50 }),
      reviewPercent: faker.number.float({ min: 50, max: 95 }).toFixed(2),
      reviewNumber: faker.number.int({ min: 0, max: 500 }),
      establishedDate: faker.date.past({ years: 20 }),
    });

    await clinic.save();
    await generateAllUserData(3, mail);
  }
  console.log(`${count} clinics created.`);
};

const createDoctorData = async (count = 10) => {

    for( let i = 0;i<count;i++ ){
        const { country, state, city, address } = getRealisticLocation();
        const mail = 'T' + faker.internet.email();
        const aboutPara = generateCustomParagraphs(1, 2, 80, 100);

        const doctor = new Doctor({
            fullName: faker.person.fullName(),
            email: mail,
            password: faker.internet.password({ length: 10 }),
            Country: country,
            State: state,
            city: city,
            address: address,
            DOB: faker.date.birthdate({ min: 30, max: 60, mode: 'age' }),
            work: faker.person.jobTitle(),
            appointmentFee: faker.number.int({ min: 200, max: 1000 }),
            consultFee: faker.number.int({ min: 300, max: 1200 }),
            bookingCount: faker.number.int({ min: 10, max: 500 }),
            reviewPercent: faker.number.float({ min: 70, max: 99, precision: 0.1 }).toFixed(2),
            reviewNumber: faker.number.int({ min: 10, max: 100 }),
            about: aboutPara,
            Services: getRandomSubset(servicesList),
            specializations: getRandomSubset(specializationsList),
            awards: getRandomSubset(awardsList),
            education: getRandomSubset(educationList),
            membership: getRandomSubset(membershipList),
            experience: getRandomSubset(experienceList),
            Registration: getRandomSubset(registrationList)
        });

        await doctor.save();
        await generateAllUserData(2, mail);
    }
    console.log(`${count} doctor created.`);
}


export { 
    createPatients,
    createClinics,
    createDoctorData
}

