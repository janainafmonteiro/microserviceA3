// DTO para receber dados do cliente (Request)
const CreateUserDTO = (body) => {
    return {
        nome: body.nome,
        email: body.email,
        senha: body.senha,
        telefone: body.telefone || null,
        role: body.role
    };
};

module.exports = { CreateUserDTO };