const db = require("../config/db")

const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsuarioController')

const userController = require('./src/controllers/UsuarioController')
router.get("/usuarios", userController.getAll)


router.post("/usuarios", userController.postUser)