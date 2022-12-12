const express=require('express');

const app=express();

app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<p> home page</p>');
    res.sendFile('./views/homePage.html',{root:__dirname})
});
app.get('/about',(req,res)=>{
    // res.send('<p> about page</p>');
    res.sendFile('./views/ourServices.html',{root:__dirname})

});
app.get('/contact',(req,res)=>{
    // res.send('<p> contact page</p>');
    res.sendFile('./views/contactUs.html',{root:__dirname})

});