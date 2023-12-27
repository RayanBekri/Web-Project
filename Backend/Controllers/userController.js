/* const users = [
import SignIn from './../../src/components/SignIn';
    { name: "mary", id: 1, age: 50 },
    { name: "lisa", id: 2, age: 20 },
    { name: "josh", id: 3, age: 30 },
    ];
    const getUsers = (req, res) => {
    res.status(200).json({ users: users });
    };
    const getOneUser = (req, res) => {
    const id = req.params.id;
    const founUser = users.find((user) => user.id == id);
    if (founUser) {
    res.status(200).json({ user: founUser });
    } else {
    res.status(400).json({ msg: "no user found" });
    }
    };
    const postUser = (req, res) => {
    console.log("add user");
    };
    const putUser = (req, res) => {
    console.log("put user");
    };
    const deleteUser = (req, res) => {
    console.log("delete user");
    };
    module.exports = { getUsers, postUser, putUser, deleteUser, getOneUser };
    */
    const jwt = require("jsonwebtoken");
    require("dotenv").config();
const User = require("../models/User");
const getUsers = async (requset, response) => {
  try {
    const users = await User.findAll();
    response.status(200).json({ users: users });
  } catch (error) {
    response.status(500).json({ msg: "error on getting users" });
  }
};
//get one user
const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = await User.findByPk(id);
    if (foundUser) {
      res.status(200).json({ user: foundUser });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    console.error("Error on getting one user:", error);
    res
      .status(500)
      .json({ msg: "Error on getting one user", error: error.message });
  }
};
//post one user
const postUser = async (request, response) => {
  try {
    const newUser = request.body;
    const createdUser = await User.create(newUser);
    response
      .status(200)
      .json({ user: createdUser, msg: " User addedsuccessfully" });
  } catch (error) {
    console.error("Error on adding user:", error);
    response
      .status(500)
      .json({ msg: "Error on adding user", error: error.message });
  }
};
//update one user
const putUser = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const [updateCount] = await User.update(updatedData, {
      where: { id: id },
    });
    if (updateCount > 0) {
      res.status(200).json({ msg: "User updated successfully" });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error on updating user", error: error.message });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCount = await User.destroy({
      where: { id: id },
    });
    if (deleteCount > 0) {
      res.status(200).json({ msg: "User deleted successfully" });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    console.error("Error on deleting user:", error);
    res
      .status(500)
      .json({ msg: "Error on deleting user", error: error.message });
  }
};

const signIn = async (req, res) => {
  const user = req.body;
  try {
    const foundUser = await User.findOne({ email: user.email });
    if (foundUser) {
      if (user.password === foundUser.password) {
        const token = jwt.sign(
          { id: foundUser.id, role: foundUser.role },
          process.env.JWT_SECRET
        );
        res.status(200).json({ user: foundUser, token: token });
      } else {
        res.status(400).json({ msg: "Wrong password" });
      }
    } else {
      return res.status(400).json({ msg: "User not registered" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { postUser, getUsers, getOneUser, putUser, deleteUser, signIn };

