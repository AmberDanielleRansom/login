import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import forum from './api/routes/forumRoutes';

const passport = require("passport");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// DB Config
const uri = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose.connect(uri, {
   useNewUrlParser: true 
	}).then(() => {
	console.log('MongoDB Connected...');
	useNewUrlParser: true 
	}).catch(err => console.log(err));