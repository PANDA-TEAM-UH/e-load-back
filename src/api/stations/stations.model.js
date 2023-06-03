const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
    {
        coordinates: {
            north: {type: Number, required: true},
            west: {type: Number, required: true}
        },
        address: {type: String, required: true},
        likes: {type: Number, default: 0},
        image: {type: String},
        schedule: {type: String, required: true},
        comments: [{type: mongoose.Types.ObjectId, ref: 'comments'}]        
    },
    {
        timestamps: true,
        collection: 'stations'
    }
)

const Station = mongoose.model('stations', stationSchema);
module.exports = Station;