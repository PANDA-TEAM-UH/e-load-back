const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema(
    {
        power: {type: String, required: true, enum: ["50kW", "43kW", "22kW"]},
        type: {type: String, required: true, enum: ["CHAdeMO", "CCS2", "Type2"]},
        rate: {type: Number, required: true},
        state: {type: String, required: true, enum: ["Libre", "Ocupado", "Fuera de Servicio"], default:'Libre'}
    },
    {
        timestamps: true,
        collection: 'spots'
    }
)

const Spot = mongoose.model('spots', spotSchema);
module.exports = Spot;