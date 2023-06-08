const express = require("express");
const app = express();
const { create_user, user_login } = require("../controllers/auth");


app.post("/register",create_user);
app.post("/login", user_login);

module.exports = app;

