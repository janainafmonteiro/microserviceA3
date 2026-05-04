const express = require("express")
const db = require("../config/db")

const routerUsuarios = express.Router();
routerUsuarios.get("/usuarios", async(req, res) => {
    return "<h1>oi</h1>"
})

const userById = express.Router();
userById.get("/", async(req, res) => {
    
})

module.exports = routerUsuarios