const {Admin} = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const mail = req.headers.mail
    const pass = req.headers.pass
    const existingUser = await Admin.findOne({
        emailId : mail,
        password : pass
    })
    if(!existingUser){
        res.status(404).send({msg : "error"})
    }
    next()

    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;