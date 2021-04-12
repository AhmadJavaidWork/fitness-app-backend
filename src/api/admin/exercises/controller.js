import queries from './queries';
import { exerciseView } from '../../../utils/dataViews';

export const create = async (req, res) => {
  try {
    const exercise = req.body;
    const exerciseInfo = await queries.create(exercise);
    return res.json({ exercise: exerciseView(exerciseInfo) });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const update = async ({ params, body }, res) => {
  try {
    const { id } = params;
    const exercise = body;
    const updatedExercise = await queries.update(id, exercise);
    return res.json({ exercise: exerciseView(updatedExercise) });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const destroy = async ({ params }, res) => {
  try {
    const { id } = params;
    await queries.destroy(id);
    return res.json({ status: 200 });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};
