import Users from '../database/models/UsersModel';
import { LoginData } from '../interfaces/index';
import { generateToken } from '../middlewares/jwt';

const loginService = async (Data: LoginData) => {
  const usuario = await Users.findOne({ where: { email: Data.email } });

  if (!usuario) throw new Error('usuário não encontrado');

  const { id, username, role, email } = usuario;

  const token = await generateToken({ id, username, role, email });

  return {
    user: { id, username, role, email },
    token,
  };
};

export default loginService;
