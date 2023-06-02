const { deleteFile } = require("../../middlewares/deleteFile");
const Station = require("./stations.model");

const createStation = async (req, res) => {
    try {
        const newStation = new Station(req.body);       
        if(req.user.rol === "admin"){
            if(req.file){
                newStation.image = req.file.path;
            }
            if(!req.body.coordinates){
                return res.status(400).json('Coordenadas obligatorias');
            }
            if(!req.body.address){
                return res.status(400).json('Dirección obligatoria');
            }
            if(!req.body.schedule){
                return res.status(400).json('Horario obligatorio');
            }
            await newStation.save();
            return res.status(200).json(newStation);
        }
        else{
            return res.status(403).json({msg: 'Forbbiden'});
        }        
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const updateStation = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findById(id);
        if(!station){
            return res.status(404).json({msg: 'Not Found'});
        }
        if(req.user.rol === "admin"){   //CONSULTAR CON OSCAR
            if(req.file){
                if(station.image){
                    deleteFile(station.image);
                }
                req.body.image = req.file.path;
            }
            else if(station.image && (req.file === undefined || req.file === null)){
                deleteFile(station.image);
                req.body.image = null;
            }
            const stationUpdated = await Station.findByIdAndUpdate(id, req.body, {new: true});
            return res.status(200).json(stationUpdated);
        }
        else{
            return res.status(403).json({msg: 'Forbbiden'});
        }
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const deleteStation = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findById(id);
        if(!station){
            return res.status(404).json({msg: 'Not Found'});
        }
        if(req.user.rol === "admin"){
            if(station.image){
                deleteFile(station.image);
            }
            const stationDeleted = await Station.findByIdAndDelete(id);
            return res.status(200).json(stationDeleted);
        }
        else{
            return res.status(403).json({msg: 'Forbbiden'});
        }
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const getAllStations = async (res) => {
    try {
        const stations = await Station.find();
        return res.status(200).json(stations);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}
const getStationById = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findById(id);
        if(!station){
            return res.status(404).json({msg: 'Not Found'});
        }
        return res.status(200).json(station);
    } catch (error) {
        //pasar el error a grafana
        return res.status(500).json({msg: 'Internal Server Error'});
    }
}

module.exports = {
    createStation,
    updateStation,
    deleteStation,
    getAllStations,
    getStationById
}