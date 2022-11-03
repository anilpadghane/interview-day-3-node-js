//Q.1-How do you create a simple Express.js application?

const express = require("express");

const app = express();

app.listen(8010, () => {
  console.log("Server connecting to the PORT-8010");
}
);

// Q.2-Implementation of all type of exports in backend application
const Data = require("./Data");
console.log(Data);


// O.3-Create a middleware which will be applicable to all the routes.

const middleware = (req, res, next) => {
  console.log("middleware");

  next();
};

app.use(middleware);

//O.4-what is CORS

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("cors implementation ");
});