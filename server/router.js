const Authentication  = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', {session: false, failureFlash: true});

module.exports = (app) => {
    app.get('/test', requireAuth, (req, res) => res.send({hi: 'there'}))
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}