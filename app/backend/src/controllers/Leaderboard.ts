import { Request, Response, NextFunction } from 'express';
import LDservice from '../services/Leaderboard';

const home = async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const ranking = await LDservice.sortLeaderboardHome();
    console.log(ranking);
    if (!ranking) return res.status(404).json();

    return res.status(200).json(ranking);
  } catch (e) {
    return res.status(500).end();
  }
};

export default {
  home,
};
