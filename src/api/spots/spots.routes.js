const { isAdmin } = require("../../middlewares/auth");
const { createSpot, updateSpot, deleteSpot, getAllSpots, getSpotById, getAllSpotsByStation } = require("./spots.controller");
const {verifyCreateSpotFields, verifyUpdateSpotFields} =require( '../../middlewares/fields')
const spotsRoutes = require("express").Router();

spotsRoutes.post("/", [verifyCreateSpotFields, isAdmin], createSpot);
spotsRoutes.put("/:id", [verifyUpdateSpotFields, isAdmin], updateSpot);
spotsRoutes.delete("/:id", [isAdmin], deleteSpot);
spotsRoutes.get("/", getAllSpots);
spotsRoutes.get("/:id", getSpotById);
spotsRoutes.get("/station/:id", getAllSpotsByStation);

module.exports = spotsRoutes;