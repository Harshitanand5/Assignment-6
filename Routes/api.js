const express=require('express');
const User=require('../models/user');
const Category = require('../models/category');
const routes=express.Router();

routes.get('/users',(req,res,next)=>{
    User.find({}).then(data=>{
       res.send(data);
    }).catch(next);
})
routes.get('/category',(req,res,next)=>{
    Category.find({}).then(data=>{
       res.send(data);
    }).catch(next);
})

routes.post('/users',(req,res,next)=>{
    User.create(req.body).then(data=>{

        res.send("Your Account is created");
    }).catch(next);
    
})
routes.post('/category',(req,res,next)=>{
    Category.create(req.body).then(data=>{

        res.send("Product added");
    }).catch(next);
    
})

routes.put('/users/:id',(req,res,next)=>{
    User.findByIdAndUpdate({_id: req.params.id},req.body,{useFindAndModify:false,new:true})
    .then(data=>{
         res.status(200).send(data)
    }).catch(next);
    
})

routes.put('/category/:id',(req,res,next)=>{
    Category.findByIdAndUpdate({_id: req.params.id},req.body,{useFindAndModify:false,new:true})
    .then(data=>{
         res.status(200).send(data)
    }).catch(next);
    
})

routes.delete('/users/:id',(req,res,next)=>{
    User.findByIdAndDelete({_id: req.params.id},req.body)
    .then(data=>{
        res.send(data);
    }).catch(next);
})

routes.delete('/category/:id',(req,res,next)=>{
    Category.findByIdAndDelete({_id: req.params.id},req.body)
    .then(data=>{
        res.send(data);
    }).catch(next);
})

module.exports=routes;