const express = require("express"); 

const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json());

const req = require("./js/routes/requests.js")

const PORT = 8080;

app.get("/", req.welcomeMessage);

app.get("/user", req.getAllUsers);
app.get("/user/:id", req.getUserById);


app.listen(PORT, () => {
  console.log("Running smoothly AF on port " + PORT)
});