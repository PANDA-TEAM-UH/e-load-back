const { isAdmin } = require("../../middlewares/auth");
const uploadImage = require("../../middlewares/file");
const { createStation, updateStation, deleteStation, getAllStations, getStationById, getStationsComments } = require("./stations.controller");

const stationsRoutes = require("express").Router();

stationsRoutes.post("/", [isAdmin], uploadImage.single('image'), createStation);
stationsRoutes.put("/:id", [isAdmin], uploadImage.single('image'), updateStation);
stationsRoutes.delete("/:id", [isAdmin], deleteStation);
stationsRoutes.get("/comments/", getStationsComments);
stationsRoutes.get("/", getAllStations);
stationsRoutes.get("/:id", getStationById);

module.exports = stationsRoutes;