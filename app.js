const express= require('express');
const app=express();
const port=3000
app.set('view engine','ejs');

app.get('/',(req,res)=>{

    console.log(res)
    res.render('home');
})


app.listen(port, () =>{
    console.log('App listening to port',port);
})