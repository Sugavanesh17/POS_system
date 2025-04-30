require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const app = express();


const PORT = config.port;
connectDB();

app.get("/", (req,res) => {
    res.json({message : "Hello from POS Server!"});
})


app.use(globalErrorHandler);


app.listen(PORT, () => {
    console.log(`☑️  POS Server is listening on port ${PORT}`);
})