import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import hostelApplications from './routes/hostelApplication.js';

const app = express();

const url = "mongodb://anish:anish123@cluster0-shard-00-00.crwzx.mongodb.net:27017,cluster0-shard-00-01.crwzx.mongodb.net:27017,cluster0-shard-00-02.crwzx.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-254efd-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => console.log("Connected to the database."));

app.listen(5000);

app.use(cors());
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use("/hostelApplicants", hostelApplications);
app.use("/viewApplicants", hostelApplications);

