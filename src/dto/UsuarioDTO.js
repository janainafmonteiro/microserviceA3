// DTO para receber dados do cliente (Request)
export const CreateUserDTO = (body) => {
    return {
        nome: body.nome,
        email: body.email,
        senha: body.senha,
        telefone: body.telefone || null,
        role: body.role
    };
};

export const FindUserDTO = (body) =>{
    return{
        email: body.email,
        senha: body.senha
    }
}
