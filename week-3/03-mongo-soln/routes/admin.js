const { Router } = require("express");
const {Admin} = require("../db")
const {Course} = require("../db")
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const mail = req.body.mail
    const pass = req.body.pass
    const name = req.body.name
    await Admin.create({
        emailId : mail,
        password : pass,
        name : name
     })
     res.status(200).send({msg : "Admin Created Successfulyy"})
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const titl = req.body.titl
    const disc = req.body.disc
    const amount = req.body.amount
    await Course.create({
        title : titl,
        description : disc,
        price : amount
    })
    res.status(200).send({msg : "Course created successfully"})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find(); // fetch all courses from DB
    res.json(courses);
});

module.exports = router;