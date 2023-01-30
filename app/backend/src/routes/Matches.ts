import { Router } from 'express';
import validateMatchCreation from '../middlewares/Matches';
import { validateToken } from '../middlewares/jwt';
import {
  createMatch,
  editMatch,
  finishMatch,
  getAll,
} from '../controllers/Matches';

const matchesRouter = Router();

matchesRouter.get('/', getAll);
matchesRouter.post('/', validateToken, validateMatchCreation, createMatch);

matchesRouter.patch('/:id/finish', finishMatch);

matchesRouter.patch('/:id', editMatch);

export default matchesRouter;
