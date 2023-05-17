const SlipPayment = require("../models/slipPayment");

const createSlipPayment = async (req, res) => {
  try {
    //Get the sent in data off request body(retreive data from request)
    const { classId, slip, mobile } = req.body;

    //Create a object with it
    const slipPayment = await SlipPayment.create({
      classId,
      slip,
      mobile,
      user: "user1",
      valid: false,
    });

    //respond with the new slipPayment
    res.json({ slipPayment });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//admin
const fetchAll = async (req, res) => {
  try {
    //find all payments
    const payments = await SlipPayment.find();
    //respond with all payments
    res.json({ payments });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

//student's slips
const fetchUserSlips = async (req, res) => {
  try {
    //Get  id off the url
    //const slipId = req.params.id;
    //find all slips
    const slips = await SlipPayment.find({ user: "user1", valid: false });
    //respond with all slips
    res.json({ slips });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

const fetchASlip = async (req, res) => {
  try {
    //Get id off the url
    const paymentId = req.params.id;
    //Find the note using that id
    const note = await SlipPayment.findOne({ _id: paymentId });
    //Respond with the note
    res.json({ note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updatePayment = async (req, res) => {
  try {
    //Get the id off the url
    const PaymentId = req.params.id;

    //Get the data off the request body
    const {classId,slip,mobile} = req.body;

    //Find and update the record
    await SlipPayment.findOneAndUpdate({ _id: PaymentId},
      {
        classId,
        slip,
        mobile,
        user: "user1",
        valid: false,
      }
    );

    //Find updated Payment
    const Payment = await SlipPayment.findById(PaymentId);

    //Respond with it
    res.json({ Payment });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const deleteSlip = async (req, res) => {
  try {
    //Get  id off the url
    const slipId = req.params.id;

    //Delete the record
    const slip = await SlipPayment.deleteOne({ _id: slipId });

    //Respond
    res.json({
      success: "Record deleted",
      slip,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  createSlipPayment,
  fetchAll,
  fetchUserSlips,
  updatePayment,
  fetchASlip,
  deleteSlip,
};
