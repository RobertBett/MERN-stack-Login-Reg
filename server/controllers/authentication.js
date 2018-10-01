const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}

exports.signup = function(req, res, next){
    const Email = req.body.email;
    const Password = req.body.password;

    if(!Email || !Password){
        return res.status(422).send({ error: 'You must provide an email and a password'});
    }

   // See if a user with the given email exists
   User.findOne({ email: Email}, (err, existingUser) =>{
        if(err){ return next(err)}

        // If a user with the email does exist, return an error
        if(existingUser){
            return res.status(422).send({error: 'Email is Already in Use'})
        }
        // If a user with the email does NOT exist, create and save user
        const user = new User({
            email: Email,
            password: Password
        })
        user.save((err) =>{
            if(err){ return next(err);}

             // Respond to request initcating the user was created
             res.json({ token: tokenForUser(user)});
        })
   });

   
}