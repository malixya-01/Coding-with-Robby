const router = require("express").Router();
let Notice = require('../models/notifi');
const express = require('express');
const app = express();

// create notice
 router.route("/add").post((req,res)=>{

    const name =req.body.name ;
    const date =req.body.date ;
    const discription =req.body.discription;

    const newNotice = new Notice({  
        name,
        date,
        discription,
    })

    newNotice.save().then(()=>{
        res.json("Notice added")
    }).catch((err)=>{
        console.log(err);
    })
 })

 // display all notices

 router.route("/").get((req,res)=>{

    Notice.find().then((notices)=>{
        res.json(notices)
    }).catch((err)=>{
        console.log(err)
    })
 })


 // update notice details

 router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id ;
    const {name, date, discription } = req.body; // D structure

    const updateNotice = {
        name,
        date,
        discription
    }

    const update = await Notice.findByIdAndUpdate(userId, updateNotice)
    .then(()=>{
        res.status(200).send({status: "Notice updated"})
    }).catch((err)=> {
        console.log(err);
        res.send({status: "Error with updating data",error: err.message});
    })

 })

 // Delete notice

 router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id ;

    await Notice.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"Notice Deleted"}) ;
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete notice",error:err.message});
    })
 })

 // Get only one notice details

 router.route("/get/:id").get(async(req,res)=>{
    let userId =req.params.id ;
    const user = await Notice.findById(userId)
    .then((Notice)=>{ 
       // res.status(200).send({status: "notice fetched"})
       res.json(Notice)
    }).catch((err)=>{
        console.log(err.message) ;
        res.status(500).send({status: "Error with get user",error: err.message});
    })
 })

 module.exports = router;