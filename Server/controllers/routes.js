let Video=require('../models/videos')
const router=require("express").Router(); //express use to connect the database
const express = require('express');
const app = express();


//Add to the video details
router.route("/add").post((req, res)=>{

    const url=req.body.url;
    const date=req.body.date;
    const title=req.body.title;
    const views=req.body.views;
    const grade=req.body.grade;

    const newVideo=new Video({
        url,
        date,
        title,
        views,
        grade,
    })

    newVideo.save().then(()=>{
        res.json("video added successfully")
    }).catch((err)=>{
        alert('video added error ${err}');
        console.log(err);
    })
});


//get details to the webpage
router.route("/").get( async function(req, res){

    Video.find().then((videos)=>{  //pass data to the FrontEnd
        res.json(videos);
    }).catch((err)=>{
        console.log(err);
    })

});


//upadate students
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { url,date, title,views,grade} = req.body;
  
    if (!userId) {
      return res.status(400).json({ error: "Missing user ID" });
    }
  
    const updatedVideo =({
        url,
        date,
        title,
        views,
        grade,
    });
  
    try {
      const update = await Video.findByIdAndUpdate(userId, updatedVideo);
      res.status(200).send({ status: "user updated",user:update });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: "user not updated", error: err.message });
    }
  });
  

 //delete students
 router.route("/delete/:id").delete(async(req, res)=>{
    let Userid=req.params.id;

    await Video.findByIdAndDelete(Userid).then(()=>{
        res.status(200).send({status: "user deleted"}) //200 success msg
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "user not deleted"}) //send user not deleted status To frontend 
        })                                                       //500 error message

})


//get only one user data
router.route("/get/:id").get(async(req, res)=>{

    let Userid=req.params.id;

    const user=await Video.findById(Userid).then((videos)=>{
        res.status(200).json(videos);
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Not selected Data"});
    })

})


module.exports=router;