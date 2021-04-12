import queries from './queries';
import { exerciseView } from '../../utils/dataViews';

export const getAll = async (req, res) => {
  try {
    var exercises = await queries.getAll();
    exercises = exercises.map((exercise) => exerciseView(exercise));
    return res.json({ exercises });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const get = async ({ params }, res) => {
  try {
    const id = params.id;
    const exercise = await queries.get(id);
    return res.json({ exercise: exerciseView(exercise) });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};
