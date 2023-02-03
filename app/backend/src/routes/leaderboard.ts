import { Router } from 'express';
import controller from '../controllers/Leaderboard';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', controller.home);

export default leaderboardRouter;
