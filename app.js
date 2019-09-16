const express= require('express');
const app=express();
const port=3000;
const authRoutes=require('./routes/oauth-routes');
const passportSetup=require('./config/passport-setup');
const mongoose= require('mongoose')
const keys= require('./config/keys')
const jwt=require('jsonwebtoken');

app.set('view engine','ejs');

//setting up the routes
app.use('/auth',authRoutes)


//connect to mongodb
mongoose.connect(keys.mongodb.dbUrl,() =>{
    console.log('Connected to MongoDB');
})



app.get('/',(req,res)=>{
    res.render('home');
})


app.listen(port, () =>{
    console.log('App listening to port',port);
})