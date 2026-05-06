const db = require('../config/db.js');

const userService = {
    //método para retornar lista de usuários
    async listAllUsuarios() {
        try{
            const [rows] = await db.query('SELECT id_usuario, nome, email, telefone FROM usuarios');
            return rows;
        }catch (error){
            console.error('Erro no Service:', error);
            throw new Error('Erro ao buscar usuários no banco de dados.');
        }
    },
    //método para adicionar um usuário
    async addUser(nome, email, senha, telefone, role){
        try{
            const query = 'INSERT INTO usuarios (nome, email, senha, telefone, role) VALUES (?, ?, ?, ?, ?)';
            const [result] = await db.query(query, [nome, email, senha, telefone, role]);

            //retornar um objeto
            return{id: result.insertId, nome, email, telefone, role}
        }catch(error){
            console.error('Erro no Service:', error);
            throw new Error('Erro ao criar usuários no banco de dados.');
        }
    }
}

module.exports = userService
