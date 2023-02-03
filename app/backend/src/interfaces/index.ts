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

interface MatchesCriadas {
  homeTeamId: number
  awayTeamId: number
  homeTeamGoals: number
  awayTeamGoals: number
}

interface Teamss {
  homeTeamGoals: string;
  awayTeamGoals: string;
}

interface IHomeMatch {
  homeTeamId: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
  homeTeam: {
    teamName: string;
  };
}

export {
  LoginData,
  Exemplo,
  LoginUser,
  MatchesCriadas,
  Teamss,
  IHomeMatch,
};
