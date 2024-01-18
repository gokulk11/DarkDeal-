const jwt = require('jsonwebtoken');
const errorHandler = require("./error.js");

const verifyToken = (req, res, next) => {
        const token = req.cookies.token;
        if(!token) return next(errorHandler(401,'Unauthorized'))

        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err) return next(errorHandler(401,'Forbidden'))

            req.user = user;
            next();
        })
        
}

module.exports = {
    verifyToken,
}