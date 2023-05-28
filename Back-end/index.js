const express = require("express");
const dotenv = require("dotenv")
const router = express.Router();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000
const app = express();
const cors = require('cors')
// const jwt = require('jsonwebtoken')
dotenv.config();

app.use(bodyParser.json());
app.use(cors())

const connect = require("./db");

connect();
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    login
} = require("./controller/user-controller");


router
    .get("/accounts/user", getUsers)
    .get("/accounts/user/:id", getUser)
    .post("/accounts/user", createUser)
    .delete("/accounts/user/:id", deleteUser)
    .patch("accounts/user/:id", updateUser)




router.get("/", (_req, res) => { res.send("hi") })

app.use(router);

app.listen(port, () => {
    console.log("listened" + "_" + port);
});