import mongoose from 'mongoose';
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


const User = require('../models/usersModel');

export const getUsers = (req, res) => {
	User.find({}, (err, user) => {
		if(err){
			res.send(err);
		}
		res.json(user);
	});
};
