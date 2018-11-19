const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}
exports.signin = function( req, res, next){
    // User has already had their email and password 'auth' d 
    // We just need to give them a token
    res.send({ 
        user:{
            token: tokenForUser(req.user),
            firstName: req.user.firstName,
            lastName: req.user.lastName
        }
    })
}
exports.signup = function(req, res, next){
    const Email = req.body.email;
    const Password = req.body.password;
    const FirstName = req.body.firstName;
    const LastName = req.body.lastName;

    if(!Email || !Password || !LastName || !FirstName){
        return res.status(422).send({ error: 'You must provide a First Name, Last Name, Email and Password'});
    }

   // See if a user with the given email exists
   User.findOne({ email: Email}, (err, existingUser) =>{
        if(err){ return next(err)}

        // If a user with the email does exist, return an error
        if(existingUser){
            return res.status(422).send({error: 'Sorry Email is Already in Use'})
        }
        // If a user with the email does NOT exist, create and save user
        const user = new User({
            firstName: FirstName,
            lastName: LastName,
            email: Email,
            password: Password
        })
        user.save((err) =>{
            if(err){ return next(err);}

             // Respond to request initcating the user was created
             res.json({ 
                 user:{
                    token: tokenForUser(user),
                    firstName: FirstName,
                    lastName: LastName
                }
                });
        })
   });

   
}