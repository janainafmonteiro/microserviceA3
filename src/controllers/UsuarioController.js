const { CreateUserDTO } = require('../dto/UsuarioDTO.js');
const userService = require('../services/UsuarioService.js')

const userController = {
    // get para listar todos
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

    //post para criar
    async postUser(req, res){
        try{
            const userData = CreateUserDTO(req.body) 
            //método para adicionar um usuário (passando como parametro o DTO)
            const userCreate = await userService.addUser(
                userData.nome, 
                userData.email, 
                userData.senha, 
                userData.telefone, 
                userData.role
            );

        }catch(error){
            console.log(error)
        }
    }

};

module.exports = userController