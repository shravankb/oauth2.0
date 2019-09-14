const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    //options for strategy

    clientID:'131756318955-smc4da89vpr0im56tqs096c6pvd2okbb.apps.googleusercontent.com',
    clientSecret:'PbanrETnlWGo6zQH9_-ilWfF'

}), ()=>{
//passport callback function

})






// passport.use(
//     new GoogleStrategy({
         // options for google strategy
//     }, () => {
         // passport callback function
//     })
// );
