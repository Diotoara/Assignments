const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/Assignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    emailId: String,
    password: String,
    name: String,
});

const UserSchema = new mongoose.Schema({
    emailId: String,
    password: String,
    name: String,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}