import { Exercise } from '../../../models';

const getAll = async () => {
  const exercises = await Exercise.findAll();
  return exercises;
};

export default {
  getAll,
};
