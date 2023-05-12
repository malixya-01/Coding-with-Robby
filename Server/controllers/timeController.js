const router = require("express").Router();
let timetable = require("../models/timeTable");
const express = require('express');
const app = express();



//Create Class..
router.route("/add").post((req,res)=>{

    const classname = req.body.classname;
    const grade = req.body.grade;
    const date = req.body.date;
    const time = req.body.time;
    const link = req.body.link;

    const newClass = new timetable({
        classname,
        grade,
        date,
        time,
        link
    })

    newClass.save().then(()=>{
        res.json("Class Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/").get((req,res)=>{

    timetable.find().then((classes)=>{
        res.json(classes)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/table").get((req,res)=>{

    timetable.find().then((classes)=>{
        res.json(classes)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update Class..
/*router.route("/update/:id").put(async (req, res) => {
    let classId = req.params.id;
    const {classname, grade, date, time, link} = req.body;

    const updateClass = {
        classname,
        grade,
        date,
        time,
        link
    }

    const update = await Class.findByIdAndUpdate(classId, updateClass)
    .then(() => {
    res.status(200).send({status: "Class Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})   
}) */

//Delete Class..
router.route("/delete/:id").delete(async (req, res) => {
    let classId = req.params.id;

    await timetable.findByIdAndDelete(classId)
    .then(() => {
        res.status(200).send({status: "Class Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete class", error: err.message});
    })
})

//Read Class..
/*router.route("/get/:id").get(async (req, res) => {
    let classId = req.params.id;
    const user = await Class.findById(classId)
    .then((user) => {
         res.status(200).send({status: "Class fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get class", error: err.message});
    })
})  */

router.route("/get/:id").get(async (req, resp) => {
    let result = await timetable.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  

router.route("/update/:id").put(async (req, resp) => {
    let result = await timetable.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;