const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
    {
        coordinates: {
            north: {type: Number, required: true},
            west: {type: Number, required: true}
        },
        address: {type: String, required: true},
        likes: {type: Number, default: 0},
        schedule: {type: String, required: true},  //crear commentsStationSchema
        spots: [{type: mongoose.Types.ObjectId, ref: 'spots'}]       
    },
    {
        timestamps: true,
        collection: 'stations'
    }
)

const Station = mongoose.model('stations', stationSchema);
module.exports = Station;