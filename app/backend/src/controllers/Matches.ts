import { Request, Response } from 'express';
import Matches from '../services/Matches';

const getAll = async (req: Request, res: Response) => {
  try {
    const progress = req.query.inProgress;

    if (progress !== undefined) {
      const inProgress = progress.toString();
      const matches = await Matches.getMatchByProgress(inProgress);
      return res.status(200).json(matches);
    }

    const getAllMatches = async () => {
      const matches = await Matches.getAll();
      return matches;
    };
    const result = await getAllMatches();
    // provavel chance de da erro
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json(e);
  }
};

const createMatch = async (req: Request, res: Response) => {
  const match = req.body;
  const newMatch = await Matches.compareAndCreateMatch(match);

  if (!newMatch) { return res.status(404).json({ message: 'There is no team with such id!' }); }

  if (newMatch === 'Equal Teams') {
    return res
      .status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  return res.status(201).json(newMatch);
};

const finishMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const alteracao = await Matches.editProgress(id);

  if (!alteracao) {
    return res.status(500).json({ message: 'Não foi possivel editar o status da partida' });
  }

  return res.status(200).json({ message: 'Finished' });
};

const editMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teams = req.body;
  const result = await Matches.editPlacar(id, teams);
  return res.status(200).json(result);
};

export { createMatch, finishMatch, editMatch, getAll };
