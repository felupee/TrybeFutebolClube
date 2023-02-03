import {
  calculatePoints,
  calculateVictories,
  calculateLosses,
  calculateDraw,
  calcularGolsFavor,
  calcularGolsContra,
  calculateTotalScore,
  calculateVictoriesPercentage,
} from '../middlewares/homeLeaderboard';

import TeamsService from './Teams';
import Matches from '../database/models/Matches';
import Teams from '../database/models/TeamsModel';
import { IHomeMatch } from '../interfaces';

const getAllHomeTeamMatches = async () => {
  const result = await Matches.findAll({
    where: {
      inProgress: false,
    },
    include: [
      {
        model: Teams,
        as: 'homeTeam',
        attributes: {
          include: ['teamName'],
          exclude: ['id'],
        },
      },
    ],
  });
  console.log(result[0]);
  return result as unknown as IHomeMatch[];
};

const leaderboardHome = async () => {
  const homeTeams = await TeamsService.getAll();
  const homeTeamMatches = await getAllHomeTeamMatches();
  // console.log(homeTeamMatches);
  const matchMap = homeTeams.map((e) => {
    const home = homeTeamMatches.filter((match) => match.homeTeam.teamName === e.teamName);
    return {
      name: e.teamName,
      totalPoints: calculatePoints(home),
      totalGames: home.length,
      totalVictories: calculateVictories(home),
      totalDraws: calculateDraw(home),
      totalLosses: calculateLosses(home),
      goalsFavor: calcularGolsFavor(home),
      goalsOwn: calcularGolsContra(home),
      goalsBalance: calculateTotalScore(home),
      efficiency: calculateVictoriesPercentage(home),
    };
  });
  return matchMap;
};

const sortLeaderboardHome = async () => {
  const leader = await leaderboardHome();
  const result = leader.sort(
    (a, b) =>
      b.totalPoints - a.totalPoints
        || b.totalVictories - a.totalVictories
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor
        || b.goalsOwn - a.goalsOwn,
  );
  return result;
};

export default {
  sortLeaderboardHome,
};
