import express from 'express'
import db from '../config/db.js'

import { userController } from '../controllers/UsuarioController.js'
import { eventoController } from '../controllers/EventoController.js'

import { authMiddleware } from '../config/auth.js';
import { isOrganizador } from '../config/checkRole.js';
//import { isUserComum } from '../config/checkRole.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Servidor rodando com sucesso!')
})

router.get("/usuarios", userController.getAll)
router.get("/userById/:id", userController.getUserById)
router.post("/usuarios", userController.postUser)
router.post("/user", userController.postFindByEmailAndPassword)

router.get("/eventos", eventoController.getEvento)
//endpoint com middleware
router.post("/eventos", authMiddleware, isOrganizador, eventoController.postEvento)

export default router