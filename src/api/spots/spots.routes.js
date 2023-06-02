const { isAdmin } = require("../../middlewares/auth");
const { createSpot, updateSpot, deleteSpot, getAllSpots, getSpotById } = require("./spots.controller");

const spotsRoutes = require("express").Router();

spotsRoutes.post("/", [isAdmin], createSpot);
spotsRoutes.put("/:id", [isAdmin], updateSpot);
spotsRoutes.delete("/:id", [isAdmin], deleteSpot);
spotsRoutes.get("/", getAllSpots);
spotsRoutes.get("/:id", getSpotById);

module.exports = spotsRoutes;