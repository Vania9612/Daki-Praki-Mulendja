import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
    id: number,
    iat: number, 
    exp: number,
    usuario_id: number
}

import authConfig from '../config/authConfig';

export default function isAuthenticated(request: Request, response: Response, next: NextFunction) {

    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json(
            {
                error: true,
                message: "Token is missing"
            }
        );
    }

    const token = authorization.replace('Bearer', '').trim();
 
    try {
        const decodedToken = verify(token, authConfig.jwt.secret);

        const { id } = decodedToken as TokenPayload;
        request.userId = id;

        return next();

    } catch (error) {
        return response.status(401).json(
            {
                error: true,
                message: "Invalid token"
            }
        )
    }
}

