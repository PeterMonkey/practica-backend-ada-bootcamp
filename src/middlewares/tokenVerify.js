import Jwt from "jsonwebtoken";

export function tokenVerify(req, res, next) {
    const token = req.headers['auth-token']

    if(!token){
        return res.status(401).json({
            message: 'Acceso denegado'
        })
    }

    try {
        Jwt.verify(token, 'secret-key', (err, decoded) => {
            if(err){
                return res.status(401).json({
                    err
                })
            }
            req.user = decoded
            next()
        })
    } catch (error) {
        res.status(400).json({
            err
        })
    }
}