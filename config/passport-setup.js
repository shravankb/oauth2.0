const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys=require('./keys')
const User = require('../models/user-model')
const jwt=require('jsonwebtoken');



passport.use(
    new GoogleStrategy({
    //options for strategy
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {

    //passport callback function
    console.log('passport callback function fired');
    console.log('pro',profile);
    
    //check if user already exists in our db
    User.findOne({googleId:profile.id})
    .then((currentUser) => {
    if(currentUser)
    {
        //already have the user
        console.log('Already an User', currentUser);
        var token= jwt.sign({currentUser}, keys.secret,
            {
            expiresIn:"30d"
            },(err,token)=>{
                if(err)
                {
                   console.log('Err:',err)
                }
                console.log("Config.Secret:"+keys.secret);
                console.log("token:",token);
                res.send({'success': true,'token':token,'name':currentUser.username,'googleId':currentUser.googleId});

            });

    }
    else
    {
        //if not, create a user     
        //save a user
    new User( { username:profile.displayName, googleId:profile.id} )
        .save()
        .then((newUser) => {
            console.log('new User Created'+newUser)
         
            var token= jwt.sign({newUser}, keys.secret,
                 {
                 expiresIn:"30d"
                 },(err,token)=>{
                     if(err)
                     {
                        console.log('Err:',err)
                     }
                     console.log("Config.Secret:"+config.secret);
                     console.log("token:",token);

                     res.send({'success': true,'token':token,name:user.name,isAdmin:user.isAdmin,'UserID':user._id});

                 });
            


        })
    }    
    })   
})
);
