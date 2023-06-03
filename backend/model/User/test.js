const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcryptJS = require("bcrypt");
const Users = new mongoose.Schema({
    // everyone
    // Common fields
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        select: false,
    },
    role: {
        type: String,
        default: "student",
    }
})

// Define the user schema
const UserSchema = new mongoose.Schema({}, { discriminatorKey: 'role' });


const AdminSchema = new mongoose.Schema({
    // everyone
    // Common fields
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        select: false,
    },
    role: {
        type: String,
        default: "admin",
    }
})

// Create the models
const UserModel = mongoose.model('User', UserSchema);
const AdminModel = UserModel.discriminator('admin', AdminSchema);
