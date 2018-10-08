const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create Local Strategy 
const localOptions ={ usernameField:'email'}

const localLogin = new LocalStrategy({}, function(email, password, done){

})

// Setup options for Jwt Strategy

const JwtOptions ={
    jwtFromRequest: ExtractJwt.fromHeader('access_token'),
    secretOrKey: config.secret
};

// Create Jwt Strategy
const JwtLogin = new JwtStrategy(JwtOptions, function(payload, done){
    // See if the User ID in the Payload Exists in our Database 
    // If it does, call done with that other 
    // Otherwise call done without a user object 

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