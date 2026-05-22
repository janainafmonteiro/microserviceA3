import jwt from 'jsonwebtoken'

export const isOrganizador = (req, res, next) => {
    //se o token userRole for 'org', o usuário é um organizador de eventos
    if(req.userRole === "org") return next()
    return res.status(403).json({
        error: "Acesso negado. Precisa ser um organizador para criar eventos"
    })
}

export const isUserComum = (req, res, next) => {
    //se o token userRole for 'user', o usuário é um usuário comum
    if(req.userRole === "user") return next()
    return res.status(403).json({
        error: "Acesso negado. Precisa ser um usuário comum para acessar os eventos"
    })
}