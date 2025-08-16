const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aryanjhaop:y8AczO8vm6v2PD90@cluster0.dn3bnq9.mongodb.net/jwt-asngmt');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}