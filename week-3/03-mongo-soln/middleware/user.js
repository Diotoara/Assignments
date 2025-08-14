//establish db here ig
const {User} = require("../db")

async function userMiddleware(req, res, next) {
    const mail = req.headers.mail
    const pass = req.headers.pass
    const existingUser = await User.findOne({email : mail})
    if(!existingUser){
        res.status(404).send({msg : "error"})
    }
    next()
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;