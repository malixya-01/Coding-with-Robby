const SlipPayment = require('../models/slipPayment');

const createSlipPayment = async (req, res) => {
    try {
        //Get the sent in data off request body(retreive data from request)
        const { classId, slip } = req.body;

        //Create a object with it
        const slipPayment = await SlipPayment.create({
            classId,
            slip,
            //user: req.user._id
        });

        //respond with the new slipPayment
        res.json({ slipPayment });

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

const fetchAll = async (req, res) => {
    try {
        //find all payments
        const payments = await SlipPayment.find();
        //respond with all payments
        res.json({ payments })

    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
};


module.exports = {
    createSlipPayment,
    fetchAll,
};