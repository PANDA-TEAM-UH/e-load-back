const { isAuth } = require("../../middlewares/auth");
const { createPayment, getAllPaymentsByUser, deletePayment } = require("./payments.controllers");

const paymentsRoutes = require("express").Router();

paymentsRoutes.post("/", [isAuth], createPayment);
paymentsRoutes.delete("/:id", [isAuth], deletePayment);
paymentsRoutes.get("/user/:id", [isAuth], getAllPaymentsByUser);

module.exports = paymentsRoutes;