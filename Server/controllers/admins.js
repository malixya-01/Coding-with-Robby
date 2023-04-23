const router = require("express").Router();
let Admin = require( "../models/admin");

router.route("/add").post((req,res)=>{
    const aid = req.body.aid;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const phone = req.body.phone;

    const newAdmin = new Admin({
        aid,
        name,
        username,
        password,
        phone,
    });

    newAdmin.save().then(()=>{
        res.json("New admin added");
    }).catch((err)=>{
        console.log(err.message);
    })
})

router.route("/").get((req, res)=>{
    Admin.find().then((admin)=>{
        res.json(admin);
    }).catch((err)=>{
        console.log(err.message);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let adminId = req.params.id;
    const{aid,name,username,password,phone} = req.body;
    const updateAdmin = {
        aid,
        name,
        username,
        password,
        phone
    }
    const update = await Admin.findByIdAndUpdate(adminId, updateAdmin).then(()=>{
        res.status(200).send({status: "Admin updated",})
    }).catch((err) =>{
        res.status(500).send({status: "Error with updating data"});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let adminId = req.params.id;
    await Admin.findByIdAndDelete(adminId).then(()=>{
        res.status(200).send({status: "Admin Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    })
})

router.route("/get/:id").get(async(res,req)=>{
    let adminId = req.params.id;
    const admin = await Admin.findById(adminId).then((Admin)=>{
        res.status(200).send({status: "Admin Fetched", adminDate: admin})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "User cannot be fetched", error: err.message})
    })
})

module.exports = router;