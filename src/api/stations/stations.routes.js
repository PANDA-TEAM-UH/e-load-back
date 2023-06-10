const { isAdmin } = require("../../middlewares/auth");
const { verifyCreateStationFields, verifyUpdateStationFields } = require("../../middlewares/fields");
const uploadImage = require("../../middlewares/file");
const { createStation, updateStation, deleteStation, getAllStations, getStationById } = require("./stations.controller");

const stationsRoutes = require("express").Router();

stationsRoutes.post("/", [verifyCreateStationFields, isAdmin], uploadImage.single('image'), createStation);
stationsRoutes.put("/:id", [verifyUpdateStationFields, isAdmin], uploadImage.single('image'), updateStation);
stationsRoutes.delete("/:id", [isAdmin], deleteStation);
stationsRoutes.get("/", getAllStations);
stationsRoutes.get("/:id", getStationById);

module.exports = stationsRoutes;