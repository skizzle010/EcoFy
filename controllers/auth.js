const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//User Registration
async function create_user(req,res){
  const{username,email,password} = req.body;
  const salt = await bcrypt.genSalt()
  hashpwd = await bcrypt.hash(password, salt);
  try {
      const newUser = await prisma.user.create({
          data:{
              username: username,
              email:email,
              password: hashpwd
          }
      })
      return res.status(200).json("user created");
  } 
  catch (error) {
      return res.status(401).json("user not created")
  }
  
}
//User Login
async function user_login(req, res, next) {
  try {
    const { username, password } = req.body;
    const data = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!data) return res.status(400).json("User not found");
    const match = await bcrypt.compare(password, data.password);
    if (!match) return res.status(400).json("Wrong Password");
    const user_id = data.user_id;
    const email = data.email;
    const accessToken = jwt.sign(
      { user_id, email },
      process.env.ACCESS_TOKEN_SECRET
    );

    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
      })
      .status(200)
      .json([data.username, data.email, data.id]);
    console.log(data.username, data.email, data.id);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "user not found", err: error });
  }
}

module.exports = {
  create_user,
  user_login,
};
