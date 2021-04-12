import queries from './queries';
import { exerciseView } from '../../../utils/dataViews';

export const create = async (req, res) => {
  try {
    const exercise = req.body;
    const exerciseInfo = await queries.create(exercise);
    return res.json({ exercise: exerciseView(exerciseInfo) });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const update = async ({ params, body }, res) => {
  try {
    const id = params.id;
    const exercise = body;
    const updatedExercise = await queries.update(id, exercise);
    return res.json({ exercise: exerciseView(updatedExercise) });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const destroy = async ({ params }, res) => {
  try {
    const id = params.id;
    await queries.destroy(id);
    return res.json({ status: 200 });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};
