const cors = require("cors");
const express = require("express");
const db = require("./db/connection.js"); //databse connection
require("dotenv").config();

const app = express();
const auth = require("./router/auth"); // import sms router

// const corsOptions = {
//   // cors options for cors policy
//   origin: "*",
//   credentials: true,
// };

app.use(cors()); // cors for connection exact origin in this case * for all origin can access
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // while entering to this api you can able to see this message
  res.send("api connected successfully");
});
app.use("/api", auth); // connecting to the route /api

db.on("error", console.error.bind(console, "Mongodb connection failed")); // any db error will handle by this

app.use((err, req, res, next) => {
  // error handling middle ware for handle any kind of errors without stoping our program
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
const PORT = process.env.PORT || 2000; // define port if we are running on a virtual machine like aws it will take its env port other wise 2000
app.listen(PORT, () => {
  // server connecting in to the port
  console.log(`server running on ${PORT}`);
});
