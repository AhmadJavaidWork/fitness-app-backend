import { Exercise } from '../../../models';

const getAll = async () => {
  const exercises = await Exercise.findAll();
  return exercises;
};

const get = async (id) => {
  const exercise = await Exercise.findByPk(id);
  return exercise;
};

export default {
  getAll,
  get,
};
