import { Exercise } from '../../../../models';

const create = async (exercise) => {
  const exerciseInfo = await Exercise.create(exercise);
  return exerciseInfo;
};

const update = async (id, exercise) => {
  await Exercise.update(exercise, { where: { id } });
  const updatedExercise = Exercise.findByPk(id);
  return updatedExercise;
};

const destroy = async (id) => {
  await Exercise.destroy({ where: { id } });
};

export default {
  create,
  update,
  destroy,
};
