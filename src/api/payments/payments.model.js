const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        cardHolderName: {type: String, required: true, unique, trim: true},
        number: {type: Number, required: true, unique: true, trim: true},
        valMonth: {type: Number, required: true},
        valYear: {type: Number, required: true}
    },
    {
        timestamps: true,
        collection: 'payments'
    }
)

const Payment = mongoose.model('payments', paymentSchema);
module.exports = Payment;