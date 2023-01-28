interface LoginData {
  email: string;
  password: string;
}

// tava dando erro de importação, so parou o erro quando eu adicionei uma interface, só com uma nao tava dando.
interface Exemplo {
  exemplo1: string;
  exemplo2: string;
}

interface LoginUser {
  id: number;
  username: string;
  role: string;
  email: string;
}

export {
  LoginData,
  Exemplo,
  LoginUser,
};
