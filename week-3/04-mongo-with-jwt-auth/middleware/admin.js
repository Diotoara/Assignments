const jwt = require('jsonwebtoken');
const jwtPassword = "1234567";

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization
    const decode = jwt.verify(token,jwtPassword); 
    if(decode.id){
        next();
    }
    else return res.status(404).send({msg:"wrong username or password"})
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = {
    adminMiddleware,
    jwtPassword
}