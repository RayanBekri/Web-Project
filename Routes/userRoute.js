
const express = require("express");
const userRoute = express.Router();
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  getOneUser,
  signIn,
} = require("../backend/Controllers/userController");
const isAuth = require("../backend/middleware/isAuth");
const isAutho = require("../backend/middleware/isAutho");
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", isAuth, isAutho(["user"]), getOneUser);
userRoute.post("/users", postUser);
userRoute.put("/users/:id", putUser);
userRoute.delete("/users/:id", isAuth, isAutho(["admin"]), deleteUser);
userRoute.post("/signIn", signIn);
module.exports = userRoute;
