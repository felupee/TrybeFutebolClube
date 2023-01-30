import { MatchesCriadas, Teams } from '../interfaces';
import Matches from '../database/models/Matches';

const getAll = async () => {
  const matches = await Matches.findAll();
  // console.log(matches);
  return matches;
};

const getMatchByProgress = async (progress: string) => {
  const inProgress = await Matches.findAll({
    where: { inProgress: progress === 'false' ? '0' : '1' },
  });

  return inProgress;
};

const compareAndCreateMatch = async (match: MatchesCriadas) => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = match;

  if (homeTeamId && awayTeamId && homeTeamId === awayTeamId) {
    return 'Equal Teams';
  }

  const partida = {
    homeTeamId,
    homeTeamGoals,
    awayTeamId,
    awayTeamGoals,
    inProgress: 1,
  };

  const newMatch = await Matches.create(partida);

  return newMatch;
};

const editProgress = async (id: string) => {
  const [editedMatch] = await Matches.update(
    { inProgress: 0 },
    { where: { id: Number(id) } },
  );
  return editedMatch;
};

const editPlacar = async (id: string, teams: Teams) => {
  const { homeTeamGoals, awayTeamGoals } = teams;
  const [updatedMatch] = await Matches.update(
    { homeTeamGoals: Number(homeTeamGoals), awayTeamGoals: Number(awayTeamGoals) },
    { where: { id: Number(id) } },
  );
  return updatedMatch;
};

export default {
  getMatchByProgress,
  compareAndCreateMatch,
  getAll,
  editProgress,
  editPlacar,
};
