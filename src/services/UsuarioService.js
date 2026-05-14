import db from '../config/db.js'

export const userService = {
    //método para retornar lista de usuários
    async listAllUsuarios() {
        try{
            const [rows] = await db.query('SELECT id_usuario, nome, email, senha, telefone FROM usuarios');
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
    },
    //procurar usuário pelo email && senha
    async findUser(email, senha){
        try{
            const [rows] = await db.query('SELECT id_usuario, nome, email FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);
            
            //tamanho da lista maior que 0 retorna algo
            if(rows.length > 0){
                return rows[0];
            }else console.log("Usuário não encontrado")
        }catch(error){
            throw new Error('Erro ao buscar usuario no banco de dados.');
        }
    }
}

