const Spot = require("./spots.model");

const createSpot = async (req, res) => {
    try {
        const newSpot = new Spot(req.body);
        if(!req.body.power){
            return res.status(400).json('Potencia obligatoria');
        }
        if(!req.body.type){
            return res.status(400).json('Tipo obligatorio');
        }
        if(!req.body.rate){
            return res.status(400).json('Tarifa obligatoria');
        }
        if(!req.body.power){
            return res.status(400).json('Potencia obligatoria');
        }
        await newSpot.save();
        return res.status(200).json(newSpot);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const updateSpot = async (req, res) => {
    try {
        const { id } = req.params;
        const spot = await Spot.findById(id);
        if(!spot){
            return res.status(404).json({msg: 'Not Found'});
        }
        const spotUpdated = await Spot.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json(spotUpdated);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const deleteSpot = async (req, res) => {
    try {
        const { id } = req.params;
        const spot = await Spot.findById(id);
        if(!spot){
            return res.status(404).json({msg: 'Not Found'});
        }
        const spotDeleted = await Spot.findByIdAndDelete(id);
        return res.status(200).json(spotDeleted);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const getAllSpots = async (res) => {
    try {
        const spots = await Spot.find();
        return res.status(200).json(spots);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const getSpotById = async (req, res) => {
    try {
        const { id } = req.params;
        const spot = await Spot.findById(id);
        if(!spot){
            return res.status(404).json({msg: 'Not Found'});
        }
        return res.status(200).json(spot);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}

module.exports = {
    createSpot,
    updateSpot,
    deleteSpot,
    getAllSpots,
    getSpotById
}