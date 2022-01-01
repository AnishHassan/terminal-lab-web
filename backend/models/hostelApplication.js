import mongoose from 'mongoose';

const hostelApplicationStructure = mongoose.Schema({
    studentName: String,
    registrationNumber: String,
    hostelPreference:Array,
    gender:String
});

const hostelApplicationModel = mongoose.model('hostelApplication',hostelApplicationStructure);

export default hostelApplicationModel;