const SlipPayment = require('../models/slipPayment');

const createSlipPayment = async (req, res) => {
    try {
        //Get the sent in data off request body(retreive data from request)
        const { classId, img } = req.body;

        //Create a object with it
        const slipPayment = await SlipPayment.create({
            classId,
            img,
            user: req.user._id
        });
        //respond with the new slipPayment
        res.json({ slipPayment });

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}


module.exports = {
    createSlipPayment,
};