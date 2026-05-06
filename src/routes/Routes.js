const db = require("../config/db")

const express = require('express');
const router = express.Router();

const userController = require('../controllers/UsuarioController')
const eventoController = require('../controllers/EventoController')

router.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!')
})

router.get("/usuarios", userController.getAll)
router.post("/usuarios", userController.postUser)

router.get("/eventos", eventoController.getEvento)
router.post("/eventos", eventoController.postEvento)

module.exports = router