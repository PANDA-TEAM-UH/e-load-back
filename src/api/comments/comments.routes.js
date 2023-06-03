const { isAuth, isAdmin } = require("../../middlewares/auth");
const { createComment, deleteComment, getAllComments, getCommentById } = require("./comments.controller");

const commentsRoutes = require("express").Router();

commentsRoutes.post("/", [isAuth], createComment);
commentsRoutes.delete("/:id", [isAdmin], deleteComment);
commentsRoutes.get("/", getAllComments);
commentsRoutes.get("/:id", getCommentById);

module.exports = commentsRoutes;