const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema(
    {
        power: {type: String, required: true, enum: ["2.3kW", "3.7kW", "7.4kW", "11kW", "22kW", "43kW", "50kW"]},
        type: {type: String, required: true, enum: ["CHAdeMO", "CCS2", "Type2", "Schuko"]},
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