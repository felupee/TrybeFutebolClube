import { Request, Response } from 'express';
import loginService from '../services/Login';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await loginService({ email, password });

  if (!user) {
    return res.status(401).json({ error: 'Incorrect email or password' });
  }

  return res.status(200).json(user);
};

// const retorno = { "role": req.body.user.role };

const getUserRole = (req: Request, res: Response) =>
  res.status(200).json({ role: req.body.user.role });

export {
  login,
  getUserRole,
};
