import { CreateUserDTO } from '../dto/UsuarioDTO.js'
import { FindUserDTO } from '../dto/UsuarioDTO.js'
import { userService } from '../services/UsuarioService.js'

export const userController = {
    
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

            //verificação senha
            if(userData.senha.length >= 8 && userData.senha != ""){
                //método para adicionar um usuário (passando como parametro o DTO)
                const userCreate = await userService.addUser(
                    userData.nome, 
                    userData.email, 
                    userData.senha, 
                    userData.telefone, 
                    userData.role
                );
                return res.status(200).json({ message: "Usuário criado com sucesso"})
            }else return res.status(500).json({ error: "A senha não pode ser menor que 8 caracteres" })

        }catch(error){
            console.log(error)
            return res.status(500).json({ error: error.message })
        }
    },
    //post para procurar usuário por email e senha
    async postFindByEmailAndPassword(req, res){
        try{
            const userData = FindUserDTO(req.body)

            //verificação credenciais
            if(userData.email != "" && userData.senha != ""){
                const userFind = await userService.findUser(userData.email,userData.senha)

                if(userFind){
                    return res.status(200).json({ 
                        message: "Usuário encontrado com sucesso",
                        usuario: userFind
                    })
                }else res.status(401).json({ error: "Email ou senha incorretos" })
            }else return res.status(400).json({ error: "Email e senha obrigatórios" })

        }catch(error){
            return res.status(500).json({ error: error.message })
        }
    }
};