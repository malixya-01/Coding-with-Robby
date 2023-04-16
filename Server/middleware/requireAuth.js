 const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function requireAuth(req, res, next){
    
    try{
        // Read token off the cookies
        const token = req.cookies.Authorization;
        
        // Decode the token
        const decoded = jwt.verify(token, process.env.SECRET);

        //check expiration
        if(Date.now() > decoded.exp) return res.sendStatus(401);

        // Find user using decoded sub(user id)
        const user = await User.findById(decoded.sub);
        if(!user) return res.sendStatus(401);

        // Attach user to request
        req.user = user;

        // Continue on
        next();
        
    } catch(err){
        return res.sendStatus(401);
    } 
}

module.exports = requireAuth;