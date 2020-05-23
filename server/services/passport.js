const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const {Strategy} = require('passport-jwt')
const {ExtractJwt} = require('passport-jwt')
const LocalStrategy = require('passport-local');

// Create Local Strategy 
const localOptions ={ usernameField:'email'};

const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    // Verify this email and Password, call done with the user 
    // if it is the correct username and password 
    // otherwise, call done with false 
    User.findByEmail( email )
    .then((user) => {
        return user;
    }).catch((err) => {
        console.error(err);
    });

    User.findByEmail(email)
        .then((user) => {
            console.log(email, password)
            // compare passwords - is 'password' equal to user.password?
            User.comparePassword(password,user.password)
            .then((isMatch) => {
                return !isMatch ? false : done(null, user);
            }).catch((err) => {
                console.error(err);
            }); 
        }).catch((err) => {
            console.error(err);  
        });

});

// Setup options for Jwt Strategy

const JwtOptions ={
    jwtFromRequest: ExtractJwt.fromHeader('access_token'),
    secretOrKey: config.secret
};

// Create Jwt Strategy
const JwtLogin = new Strategy(JwtOptions, function(payload, done){
    // See if the User ID in the Payload Exists in our Database 
    // If it does, call done with that other 
    // Otherwise call done without a user object 
    console.log('[IS THIS WORKING?')
    User.findById(payload.sub, function(err, user){
        if(err){return done(err, false)}

        if(user){
            done(null, user);
        }else{
            done(null, false);
        }
    })
})


// Tell Passport to use this strategy

passport.use(JwtLogin);

passport.use(localLogin);