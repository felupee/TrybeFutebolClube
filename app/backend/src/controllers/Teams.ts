import { Request, Response } from 'express';
import Teams from '../services/Teams';

const getAll = async (_req: Request, res: Response) => {
  try {
    const teams = await Teams.getAll();
    return res.status(200).json(teams);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const numberId = Number(id);
    const team = await Teams.getById(numberId);
    return res.status(200).json(team);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

export { getAll, getById };
