const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        cardHolderName: {type: String, required: true, unique: true, trim: true},
        number: {type: Number, required: true, unique: true, trim: true, max: 16},
        valMonth: {type: Number, required: true, max:2},
        valYear: {type: Number, required: true, max:2}
    },
    {
        timestamps: true,
        collection: 'payments'
    }
)

const Payment = mongoose.model('payments', paymentSchema);
module.exports = Payment;