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

    const newApplicant = new hostelApplicationModel({
        studentName: studentNameInStringFormat,
        registrationNumber: registrationNumberInString
    });

    try {
        await newApplicant.save();
        res.json(newApplicant);
    } catch (error) {
        console.log("Not saved...");
    }
};
