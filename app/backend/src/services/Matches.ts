import { MatchesCriadas, Teamss } from '../interfaces';
import Matches from '../database/models/Matches';
import Teams from '../database/models/TeamsModel';

const getAll = async () => {
  const matches = await Matches.findAll({
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });
  // console.log(matches);
  return matches;
};

const getMatchByProgress = async (progress: string) => {
  const inProgress = await Matches.findAll({
    where: { inProgress: progress === 'false' ? '0' : '1' },
    include: [
      { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
      { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });

  return inProgress;
};

const compareAndCreateMatch = async ({ homeTeamId, awayTeamId,
  homeTeamGoals, awayTeamGoals }: MatchesCriadas) => {
  if (homeTeamId && awayTeamId && homeTeamId === awayTeamId) {
    return 'Equal Teams';
  }

  // const partida = {
  //   homeTeamId,
  //   homeTeamGoals,
  //   awayTeamId,
  //   awayTeamGoals,
  //   inProgress: 1,
  // };

  const newMatch = await Matches.create({
    homeTeamId, awayTeamId, awayTeamGoals, homeTeamGoals, inProgress: true });

  return newMatch;
};

const editProgress = async (id: string) => {
  const [editedMatch] = await Matches.update(
    { inProgress: 0 },
    { where: { id: Number(id) } },
  );
  return editedMatch;
};

const editPlacar = async (id: string, teams: Teamss) => {
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
