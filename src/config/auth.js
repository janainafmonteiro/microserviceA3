import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader) return res.status(401).json({error: 'Token não fornecido'})
    //o padrão é "Bearer <TOKEN>", então dividimos a string
    const parts = authHeader.split(' ');
    const token = parts[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        
        //injeção de dados do usuário na requisição para usar depois
        req.userId = decoded.id
        req.userEmail = decoded.email
        req.userRole = decoded.role

        return next(); //pode seguir para a rota
    } catch (err) {
        return res.status(401).json({ error: "Token inválido ou expirado" });
    }
}