/* const dotenv = require("dotenv");
dotenv.config();
const url = process.env.URL;
const mongoose = require("mongoose");
const connectDb = async () => {
try {
await mongoose.connect(url);
console.log("Connected to MongoDB Atlas successfully.");
} catch (error) {
console.error('Connection to MongoDB Atlas failed:', error);
}
};
module.exports = connectDb; */

const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
url=process.env.URL
const sequelize=new Sequelize(url,{
dialect: 'mysql'
});
const connectDb = async () => {
try {
await sequelize.authenticate();
console.log("Connected to MySQL successfully.");
await sequelize.sync({alter:true});
} catch (error) {
console.error('Connection to MYSQL failed:', error);
} 
};
module.exports = {connectDb,sequelize};

