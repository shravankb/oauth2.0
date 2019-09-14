const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys=require('./keys')



passport.use(
    new GoogleStrategy({
    //options for strategy
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, uid, done) => {

    //passport callback function
    console.log('passport callback function fired');
    console.log('pro',profile);
    console.log('uid',uid);
    
})
);






// passport.use(
//     new GoogleStrategy({
         // options for google strategy
//     }, () => {
         // passport callback function
//     })
// );
