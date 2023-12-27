/* var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
userName: {
type: String,
required: true,
},
email: {
type: String,
required: true,
},
age: {
type: String,
required: true,
}}
);
const User = mongoose.model('User',userSchema)
module.exports= User; */

const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../Configuration/connectDb");
const { userRoute } = require("../../Routes/userRoute");
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false } // Add this to disable the default timestamps
);
module.exports = User;
