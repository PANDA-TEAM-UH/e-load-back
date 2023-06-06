const { isAuth, isAdmin } = require("../../middlewares/auth");
const { createComment, deleteComment, getAllComments, getCommentById, getAllCommentsByStation } = require("./comments.controller");

const commentsRoutes = require("express").Router();

commentsRoutes.post("/", [isAuth], createComment);
commentsRoutes.delete("/:id", [isAdmin], deleteComment);
commentsRoutes.get("/", getAllComments);
commentsRoutes.get("/:id", getCommentById);
spotsRoutes.get("/station/:id", getAllCommentsByStation);

module.exports = commentsRoutes;