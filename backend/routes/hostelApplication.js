import express from 'express';
import { getApplications, createApplication,deleteRecord } from '../controllers/hostelApplication.js';

const router = express.Router();

//get, post, put, delete
router.get("/", getApplications);

router.post("/", createApplication);

router.delete('/:id',deleteRecord);


export default router;
