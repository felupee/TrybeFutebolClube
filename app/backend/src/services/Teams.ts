import Teams from '../database/models/TeamsModel';

const getAll = () => {
  const teams = Teams.findAll();
  return teams;
};

const getById = (id: number) => {
  const teamId = Teams.findByPk(id);
  return teamId;
};

export default {
  getAll,
  getById,
};
