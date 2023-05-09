const Post = require("../models/post");
const router = require("express").Router();


const addItem = async (req, res) => {
  try {
    // const { title, dis, price, image } = req.body;
    const item = await Post.create({
      title: req.body.title,
    dis: req.body.dis,
    price: req.body.price,
    image: req.body.image,
    });
    //Respond with the new note
    res.json({ item });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const getItems = async (req, res) => {
 try {
    //Find the items
    const items = await Post.find();
    //Respond with them
    res.json({ items });

  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updateItem = async (req, res) => {

  //get the id off the url
  const itemID = req.params.id;

  //get the data off the request body
  const { title, dis, price, image } = req.body;

  //find and update the record
  await Post.findOneAndUpdate({ _id: itemID }, {
    title,
    dis,
    price,
    image
  });

  //Find the updated item
  const item = await Post.findById(itemID);

  //Respond with it
  res.json({ item });

};

const deleteItem = async (req, res) => {
  //get the id off the url
  const itemID = req.params.id;
   
  //delete the record
  await Post.deleteOne({_id: itemID});

  //respond
  res.json({success: "Item deleted"});

};
 
const getStoreItem = async (req, res) => {
  try {
    //Find the items
    const items = await Post.find();
    //Respond with them
    res.json({ items });

  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};



module.exports = {
  addItem,
  getItems,
  updateItem,
  deleteItem,
  getStoreItem,
};
// router.route("/create").post((req, res) => {
//   Post.create({
//     title: req.body.title,
//     dis: req.body.dis,
//     price: req.body.price,
//     image: req.body.image,
//   })

//     .then((doc) => res.status(200).json(doc))
//     .catch((err) => console.log(err));
// });

// router.route("/product").get((req, res) => {
//   Post.find()
//     .then((item) => res.json(item))
//     .catch((err) => console.log(err));
// });
// router.route("/store").get((req, res) => {
//   Post.find()
//     .then((item) => res.json(item))
//     .catch((err) => console.log(err));
// });

// //delete
// router.route("/delete/:id").delete((req, res) => {
//   Post.findByIdAndDelete({ _id: req.params.id })
//     .then((item) => res.json(item))
//     .catch((err) => console.log(err));
// });

// //update
// router.route("/update/:id").put((req, res) => {
//   Post.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       title: req.body.title,
//       dis: req.body.dis,
//       price: req.body.price,
//       image: req.body.image,
//     }
//   )
//     .then((item) => res.json(item))
//     .catch((err) => console.log(err));
// });
