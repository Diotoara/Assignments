const { Router } = require("express");
const {User} = require("../db")
const {Course} = require("../db")
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const mail = req.body.mail
    const pass = req.body.pass
    const name = req.body.name
    await User.create({
        emailId : mail,
        password : pass,
        name : name
    })
    res.status(200).send("User created successfully")
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router