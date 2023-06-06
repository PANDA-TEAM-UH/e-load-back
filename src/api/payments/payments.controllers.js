const User = require("../users/users.model");
const Payment = require("./payments.model");

const createPayment = async (req, res) => {
    try {
        const newPayment = new PaymentMethodChangeEvent(req.body);
        await newPayment.save();
        return res.status(200).json(newPayment);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const getAllPaymentsByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('payments');
        if(!user){
            return res.status(404).json({msg: 'Not Found'});
        }
        const payments = user.payments;
        return res.status(200).json(payments);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const deletePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findById(id);
        if(!payment){
            return res.status(404).json({msg: 'Not Found'});
        }
        const paymentDeleted = await Payment.findByIdAndDelete(id);
        return res.status(200).json(paymentDeleted);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
module.exports = {
    createPayment,
    getAllPaymentsByUser,
    deletePayment
}