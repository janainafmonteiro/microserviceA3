
const db = require("../config/db")
const userController = require('../controllers/UsuarioController')

app.use("/usuarios", userController)


