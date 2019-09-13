const router= require('express').Router();
//auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});



//auth logout
router.get('/logout',(req,res)=>{
    //handle it with passport
    res.send('logging out');
})



//auth with google
router.get('/google', (req,res)=>{
//handle with passport
res.send('loggin in with google')

});


module.exports=router;