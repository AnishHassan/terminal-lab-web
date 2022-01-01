import hostelApplicationModel from "../models/hostelApplication.js";
export const getApplications = async (req, res) => {
    try {
        const hostelApplications = await hostelApplicationModel.find();
        res.json(hostelApplications);
    } catch (error) {
        console.log("Not found any data.");
    }
};



export const createApplication = async (req, res) => {
    const studentName = req.body.studentName;
    const studentNameInStringFormat = studentName.toString();

    const registrationNumber = req.body.registrationNumber;
    const registrationNumberInString = registrationNumber.toString();

    const hostelPreference = req.body.hostelPreference;
    const hostelPreferenceInString = hostelPreference.toString();

    const gender = req.body.gender;
    const genderInString = gender.toString();

    const newApplicant = new hostelApplicationModel({
        studentName: studentNameInStringFormat,
        registrationNumber: registrationNumberInString,
        hostelPreference:hostelPreferenceInString,
        gender : genderInString
    });

    try {
        await newApplicant.save();
        res.json(newApplicant);
    } catch (error) {
        console.log("Not saved...");
    }
};

export const deleteRecord = async (req, res) => {
    const hostelApplications = await hostelApplicationModel.find();
    hostelApplications.findByIdAndDelete(req.params.id)
      .then(() => res.json('Applicant deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  }
