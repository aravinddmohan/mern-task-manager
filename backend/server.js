const express = require("express");
const cors = require ("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const userRoutes = require("./routes/userRoute");
const taskRoutes = require("./routes/taskRoute");
const app = express();


connectDB();

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

//Test route
app.get("/",(req,res)=>{
    res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});