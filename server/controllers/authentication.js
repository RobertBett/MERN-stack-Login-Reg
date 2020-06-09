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
    const { email, password, firstName, lastName } = req.body;

    if(!email || !password || !lastName || !firstName){
        return res.status(422).send({ error: 'You must provide a First Name, Last Name, Email and Password'});
    }
   // See if a user with the given email exists
   User.findByEmail(email)
   .then((existingUser) => {
        // If a user with the email does exist, return an error
        return existingUser &&  res.status(422).send({error: 'Sorry Email is Already in Use'})
   })
   .then(() => {
    // If a user with the email does NOT exist, create and save user
    const newUser = new User(email, firstName, lastName, password);

    newUser.save()
        .then(() => {
            res.json({ 
                user:{
                token: tokenForUser(newUser),
                firstName,
                lastName
            }
            });
        }).catch((err) => {
            console.error(err)
        }); 
   })
   .catch((err) => {
       console.error(err);
       
   });
   
}