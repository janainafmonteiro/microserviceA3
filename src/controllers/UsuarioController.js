/*const express = require("express")
const db = require("../config/db")

const routerUsuarios = express.Router();
routerUsuarios.get("/usuarios", async(req, res) => {
    return 
})

const userById = express.Router();
userById.get("/", async(req, res) => {
    
})

module.exports = routerUsuarios*/

const { CreateUserDTO } = require('../dto/UsuarioDTO.js');
const userService = require('../services/UsuarioService.js')

const userController = {
    // Adicione o 'async' antes de (req, res)
    async getAll(req, res) { 
        try {
            const users = await userService.listAllUsuarios();
            
            if (!users || users.length === 0) {
                return res.status(404).json({ message: "Nenhum usuário encontrado." });
            }

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async postUser(req, res){
        console.log("aquu")
        try{
            const userData = CreateUserDTO(req.body) 
            const userCreate = await userService.addUser(userData.nome, userData.email, userData.senha, userData.telefone, userData.role)

        }catch(error){
            console.log(error)
        }
    }

};

module.exports = userController