const { Router } = require("express");
const jwt = require('jsonwebtoken');
const { adminMiddleware, jwtPassword } = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    await Admin.create({
        username,
        password
    })
    res.send({"msg" : "user created. sign in now!"})

});

router.post('/signin', async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await Admin.findOne({
        username : username,
        password : password
    })
    if(existingUser) {
        var adminToken = jwt.sign({id: username}, jwtPassword);
        res.send({ "your token is" : adminToken})
    }
    else res.status(404).send({msg : "error"})

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const newCrs = await Course.create({title, description, price})
    res.send({msg : "course created successfully", courseId : newCrs._id})
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;