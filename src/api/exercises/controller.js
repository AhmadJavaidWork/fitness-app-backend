import queries from './queries';
import { exerciseView } from '../../utils/dataViews';

export const getAll = async (req, res) => {
  try {
    let exercises = await queries.getAll();
    exercises = exercises.map((exercise) => exerciseView(exercise));
    return res.json({ exercises });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const get = async ({ params }, res) => {
  try {
    const { id } = params;
    const exercise = await queries.get(id);
    return res.json({ exercise: exerciseView(exercise) });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};
