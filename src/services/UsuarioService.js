const db = require('../config/db.js');

const userService = {
    async listAllUsuarios() {
        try{
            const [rows] = await db.query('SELECT id, nome, email, telefone FROM usuarios');
            return rows;
        }catch (error){
            console.error('Erro no Service:', error);
            throw new Error('Erro ao buscar usuários no banco de dados.');
        }
    },
    async addUser(nome, email, senha, telefone, role){
        try{
            const query = 'INSERT INTO usuarios (nome, email, telefone, senha, role) VALUES (?, ?, ?, ?, ?)';
            const [result] = await db.query(query, [nome, email, senha, telefone, role]);

            return{
                id: result.insertId, nome, email, senha, telefone, role}
        }catch(error){
            console.error('Erro no Service:', error);
            throw new Error('Erro ao criar usuários no banco de dados.');
        }
    }
}

module.exports = userService
