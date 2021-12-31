import express from 'express';
import { getApplications, createApplication } from '../controllers/hostelApplication.js';

const router = express.Router();

//get, post, put, delete
router.get("/", getApplications);

router.post("/", createApplication);

export default router;
