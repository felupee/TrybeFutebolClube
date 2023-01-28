import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { LoginUser } from '../interfaces';

const senha = process.env.JWT_SECRET || 'jwt_secret';

const generateToken = async (payload: LoginUser) => {
  const token = jwt.sign(payload, senha, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decode = jwt.verify(token, senha) as jwt.JwtPayload;

    req.body.user = decode;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export {
  generateToken,
  validateToken,
};
