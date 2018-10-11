const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create Local Strategy 
const localOptions ={ usernameField:'email'};

const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    // Verify this email and Password, call done with the user 
    // if it is the correct username and password 
    // otherwise, call done with false 

    User.findOne({ email : email}, function( err, user){
        if(err) { return done(err); }
        if(!user){ return done(null, false); }

        // compare passwords - is 'password' equal to user.password?

        user.comparePassword(password, function( err, isMatch){
            if(err){ return done(err); }
            if(!isMatch) { return done(null, false)}

            return done(null, user);
        })
    });
});

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

passport.use(localLogin);