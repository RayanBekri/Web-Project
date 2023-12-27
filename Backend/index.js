/*const express = require("express");
const app = express();
const port=6453;
app.listen(port, (error)=>{
if(error){console.log("Server Failed")}
else{ console.log(`Server Started on port ${port}`)}
})
app.use(express.json());
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "chris" },
    ];
    //READ OPERATION all users 
    app.get("/users", (req, res) => { res.status(200).json({ users: users });});

    //READ OPERATION specific user
    app.get("/users/:id", (req, res) => {
        const userId = req.params.id;
        const foundUser = users.find((elt) => elt.id == userId);
        if (!foundUser) {
        res.status(404).json({ msg: "not found" });
        } else {
        res.status(200).json({ foundUser: foundUser });
        }
        });
        //CREATE OPERATION
app.post("/users", (req, res) => {
    const user = req.body;
    const newTable = [...users, user];
    res
    .status(200)
    .json({ message: "User Sucessfully Added", users: newTable });
    });
    //UPDATE OPERATION
    app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    const { name } = updates;
    const updatedUser = users.map((elt) => {
    if (elt.id == userId) { return { ...elt, name: name } }
    else return elt;
    });
    res.status(200).json({ message:"User Successfully Updated",users: updatedUser });})
    const express=require("express");*/
/* const express=require("express");
const app=express();
const userRoute=require("./Routes/userRoute")
const dotenv=require("dotenv")
dotenv.config();
const port=process.env.PORT
app.listen(port, (error)=>{
if(error){console.log("Server Failed")}
else{ console.log(`Server Started on port ${port}`)}
});
app.use(express.json());
app.use("/api", userRoute);*/

/* const express = require("express");
const connectDb=require('./Configuration/connectDb')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.listen(port, (error) => {
if(error){console.log("Server Failed")}
else {
console.log(`server is running on port ${port}`);
}
});
app.use(express.json()) */
/*

const User = require("./models/User");
//get all users
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
response.status(200).json({ user: createdUser, msg: " User added successfully" });
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
module.exports = { postUser, getUsers, getOneUser, putUser, deleteUser };
/* const express = require("express");
const userRoute = require("../Routes/userRoute");
const {connectDb}=require('./configuration/connectDb')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.listen(port, (er) => {
if (er) {
console.log(err);
} else {
console.log(`server is running on port ${port}`);
}
});
app.use(express.json())
app.use("/api", userRoute); */

const express = require("express");
const userRoute = require("../Routes/userRoute");
const {connectDb}=require("./Configuration/connectDb")
var cors = require('cors')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.use(cors())
app.listen(port, (er) => {
if (er) {
console.log(er);
} else {
console.log(`server is running on port ${port}`);
}
});
app.use(express.json())
app.use("/api", userRoute);

    


    