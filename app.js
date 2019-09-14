const express= require('express');
const app=express();
const port=3000;
const authRoutes=require('./routes/oauth-routes');
const passportSetup=require('./config/passport-setup');

app.set('view engine','ejs');

//setting up the routes
app.use('/auth',authRoutes)




app.get('/',(req,res)=>{
    res.render('home');
})


app.listen(port, () =>{
    console.log('App listening to port',port);
})