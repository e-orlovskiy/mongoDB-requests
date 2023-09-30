const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

mongoose.connect(process.env.CONNECTION_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT",
    credentials: true,
  })
);

const userSchema = new mongoose.Schema({
  id: { type: String },
  nickname: { type: String, require },
  email: { type: String, require },
  products: { type: [{ name: String, price: Number, quantity: Number }] },
  raiting: { type: Number }
})

const userModel = mongoose.model('users', userSchema)

app.get('/users', async (req, res) => {
  const users = await userModel.find()
  res.json(users)
})

app.get('/users/:user', async (req, res) => {
  const user = await userModel.findById(req.params.user) // параметры
  console.log(user)
  res.json(user)
})

app.listen(3002, () => {
  console.log("Сервер запущен на 'http://localhost:3002'");
});